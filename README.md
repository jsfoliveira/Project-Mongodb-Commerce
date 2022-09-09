# 	:woman_technologist: Project Mongodb Commerce

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo  do curso de desenvolvimento web da Trybe. <br>
Neste projeto, pude trabalhar com Mondb, usando linguagem NoSQL, atraves do banco de dados chamado `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas. 

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Esse projeto foi desenvolvido no bloco de back-end e foi possível treinar a linguagem NoSQL, através do Mongodb.
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana-oliveira-project-commerce', isso por conta da exigência do curso.
### Instalação
Precisa utilizar o comando $npm install, a fim de instalar as dependências do projeto.
### Criar banco de dados
Para criar o banco de dados chamado commerce, basta dar o seguinte comando no terminal: $DBNAME=commerce ./scripts/resetdb.sh assets/produtos
### Testes
O teste acontece de cada desafio, através do comando $./scripts/evaluate.sh desafioN.js, sendo N o número do desafio.
### Docker
Para usar o Docker, basta usar o comando que irá criar o container $docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0;<br>
Acesse o terminal do container `docker exec -it nomeDoContainer bash`; <br>
Entre na pasta app, através do comando $cd app; <br>
### Estrutura do projeto
Na pasta challenges, que está na raíz do projeto, terão 32 arquivos chamados `desafioN.js`, em que N é o número do desafio.
Para testar a aplicação, basta dar o comando do teste dentro do container.
### Autores
Esse foi um projeto individual,que desenvolvido somente por Juliana Oliveira.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Nenhum.

A
## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.
#### :footprints:Requisito 1 - Retorne a quantidade de documentos inseridos na coleção `produtos`

- Para isso, escreva a query no arquivo `desafio1.js`

#### :footprints:Requisito 2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos`

- Para isso, escreva a query no arquivo `desafio2.js`

#### :footprints:Requisito 3 - Retorne o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido

- Para isso, escreva a query no arquivo `desafio3.js`

#### :footprints:Requisito 4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente

- Para isso, escreva a query no arquivo `desafio4.js`

#### :footprints:Requisito 5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`

- Para isso, escreva a query no arquivo `desafio5.js`

#### :footprints:Requisito 6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`

- Para isso, escreva a query no arquivo `desafio6.js`

#### :footprints:Requisito 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista

- Para isso, escreva a query no arquivo `desafio7.js`

#### :footprints:Requisito 8 - Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco

- Para isso, escreva a query no arquivo `desafio8.js`

#### :footprints:Requisito 9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`

- Para isso, escreva a query no arquivo `desafio9.js`.

#### :footprints:Requisito 10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`

- Para isso, escreva a query no arquivo `desafio10.js`

#### :footprints:Requisito 11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`

- Para isso, escreva a query no arquivo `desafio11.js`

#### :footprints:Requisito 12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`

Para isso, escreva no arquivo `desafio12.js` duas queries, **nesta ordem**:

1. Crie uma query que adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

#### :footprints:Requisito 13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo

Para isso, escreva no arquivo `desafio13.js` duas queries, **nesta ordem**:

1. Crie uma query que adicione o campo `criadoPor` em todos os documentos, colocando `"Ronald McDonald"` no valor desse campo.

2. Crie uma query que retorne o `nome` e `criadoPor` de todos os produtos.

#### :footprints:Requisito 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`

- Para isso, escreva a query no arquivo `desafio14.js`
- Sua query deve retornar apenas os campos `nome`, `ingredientes` e `valoresNutricionais`.

👀**De olho na dica**: para realizar esse requisito, explore a implementação do `$slice`através do conteúdo [desse link](https://app.betrybe.com/course/back-end/introducao-ao-mongodb/updates-complexos-arrays/e58a3ec0-3a24-4d96-97f1-bfeec6d1b253/conteudos/bc2f5c46-bbeb-4fff-9d79-cebb2c00769b/operador-push/6943fddb-86aa-498c-b675-429487b9bcf3?use_case=side_bar) 

#### :footprints:Requisito 15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo

Para isso, escreva no arquivo `desafio15.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua o campo `avaliacao` do tipo `NumberInt`, com o valor `0` em todos os documentos da coleção.

2. Crie uma query que incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. 
👀**De olho na dica**: utilize como filtro o campo `tags`.

3. Crie uma query que incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

4. Crie uma query que retorne o `nome` e `avaliacao` de todos os sanduíches.

#### :footprints:Requisito 16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`

Para isso, escreva no arquivo `desafio16.js` duas queries, **nesta ordem**:

1. Crie uma query que inclua somente ao sanduíche `Big Mac` o campo `ultimaModificacao` com a data corrente. Para a data corrente faça uso do tipo `date` ou `timestamp`.

2. Crie uma query que retorne o `nome` de todos os documentos em que o campo `ultimaModificacao` existe.

#### :footprints:Requisito 17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`

Para isso, escreva no arquivo `desafio17.js` duas queries, **nesta ordem**:

1. Crie uma query que insira na coleção `resumoProdutos` um documento com os campos: `franquia` com o valor `McDonalds` e `totalProdutos` com o valor sendo a quantidade total de produtos registrados na coleção `produtos`.

2. Crie uma query que retorne os campos `franquia` e o `totalProdutos` da coleção `resumoProdutos`, resultantes da primeira query.

#### :footprints:Requisito 18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`

Para isso, escreva no arquivo `desafio18.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a inclusão de `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

#### :footprints:Requisito 19 - Remova o item `cebola` de todos os sanduíches

Para isso, escreva no arquivo `desafio19.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do item `cebola` em todos os sanduíches.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

#### :footprints:Requisito 20 - Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`

Para isso, escreva no arquivo `desafio20.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **primeiro** `ingrediente` no sanduíche `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

#### :footprints:Requisito 21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt`

Para isso, escreva no arquivo `desafio21.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **último** `ingrediente` no sanduíche `Cheddar McMelt`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

#### :footprints:Requisito 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana

Para isso, escreva no arquivo `desafio22.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua um campo `vendasPorDia` em todos os sanduíches. O valor deste campo deverá ser um _array_ com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em `0`. O _array_ deve seguir a estrutura do exemplo abaixo:
  ```json
  "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
  ```

> O primeiro item desse _array_ representa as vendas no **domingo**, o segundo item representa as vendas na **segunda-feira**, e assim sucessivamente até chegar ao último item, que representa as vendas no **sábado**.

2. Crie uma query que incremente as vendas de `Big Mac` às **quartas-feiras** em `60`.

3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo `bovino` aos **sábados** em `120`.

4. Crie uma query que retorne o `nome` e `vendasPorDia` de todos os documentos.

#### :footprints:Requisito 23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

Para isso, escreva no arquivo `desafio23.js` duas queries, **nesta ordem**:

1. Crie uma query que faça tanto a inserção dos valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches. Ordene os valores de `tags` em ordem alfabética ascendente.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

#### :footprints:Requisito 24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente

Para isso, escreva no arquivo `desafio24.js` duas queries, **nesta ordem**:

1. Crie uma query que faça em todos os documentos a ordenação dos valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente. 
👀**De olho na dica**: mesmo sem adicionar nenhum novo valor, para essa operação é necessário utilizar também o modificador `$each`.

2. Crie uma query que retorne o `nome` e `valoresNutricionais` de todos os documentos.

#### :footprints:Requisito 25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`

Para isso, escreva no arquivo `desafio25.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

#### :footprints:Requisito 26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`

Para isso, escreva no arquivo `desafio26.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

#### :footprints:Requisito 27 - Conte quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas

- Para isso, escreva a query no arquivo `desafio27.js`

#### :footprints:Requisito 28 - Conte quantos produtos têm `4` ingredientes

- Para isso, escreva a query no arquivo `desafio28.js`

#### :footprints:Requisito 29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos

Para isso, escreva no arquivo `desafio29.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a renomeação do campo `descricao` para `descricaoSite` em todos os documentos.

2. Crie uma query que retorne o `nome` e `descricaoSite` de todos os documentos.

#### :footprints:Requisito 30 - Remova o campo `curtidas` do item `Big Mac`

Para isso, escreva no arquivo `desafio30.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do campo `curtidas` do item `Big Mac`.

2. Crie uma query que retorne o `nome` para todos os documentos e `curtidas` (exceto para `Big Mac`).

#### :footprints:Requisito 31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`

- Para isso, escreva a query no arquivo `desafio31.js`

#### :footprints:Requisito 32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`

- Para isso, escreva a query no arquivo `desafio32.js`
