// 27 - Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
// Como é só conter Mc, pode estar em qualquer lugar no nome, fica desse jeito. Mas se quiser encontrar Mc iniciando a palavra, coloca assim: { $regex: /^Mc/i }
db.produtos.countDocuments({
  nome: { $regex: /Mc/i },
});