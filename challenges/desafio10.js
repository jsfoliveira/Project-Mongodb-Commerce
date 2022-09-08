// 10 - Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40
db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "proteínas",
      $and: [
        { percentual: { $gte: 30 } },
        { percentual: { $lte: 40 } },
      ],
    },
  },
}, { nome: 1, _id: 0 });