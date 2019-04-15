# MongoDB

* O que é o MongoDB?
    * Como funciona?
* Mongo Shell
    * User
    * Comandos Mongo Shell
* Mongoose
    * Conectando o Mongoose
        * A um database local
        * À nuvem (Atlas)
    * Models e Schemas
    * Criando os dados
        * Dropando uma coleção
    * Lendo os dados
    * Atualizando dados
    * Deletando dados

## O que é o MongoDB?

MongoDB é um **NoSQL Database** ou seja em vez de armazenar os dados em tabelas como faz-se no MySQL, o MongoDB irá armazenar suas informações em documentos, coleções ou notações de **objetos**. Se pensarmos bem faz muito sentido usar o MongoDB junto com o [Node.js](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#nodejs) pois a comunicação entre eles será muito mais fácil quando os objetos javascript forem usados.

### Como funciona?

Quando o client faz um request, o server — comunicando com o database — simplesmente controlará tudo o que acontece com os dados dentro do database, como: criar, ler, deletar e atualizar (chamadas **Crud Operations**). Por isso a arquitetura **MVC** é importante nesses casos.

Caso Node.js estiver sendo usado como server, será necessário o [Mongoose](https://www.npmjs.com/package/mongoose) para conseguir comunica-lo com o MongoDB. O Mongoose é um package que facilitará muito a conexão server-database.

<br><br>

## Mongo Shell

O **Mongo Shell** é uma interface interativa Javascript para o Mongodb. Ela é simplesmente usada para permitir a execução de comandos MongoDB.

Ela é acessada através do command-line ou pela execução direta do arquivo `mongo.exe` que fica na pasta de instalação.

### Criando o UserAdmin

Antes de começar é preciso adicionar um usuário para o database.

Escreva a primeira linha — `db.createUser({` — e de enter, depois disto o Mongodb automaticamente irá disponibilizar os campos para preencher na tela.

```shell
db.createUser({
  user: "Joao",
  pwd: "1234",
  roles: [
    { role: "readWrite", db: "dbAdmin" }
  ],
});
```

### Comandos Mongo Shell 

Aqui está uma pequena lista de comandos o Mongo Shell, para uma lista maior, veja a [referência](https://docs.mongodb.com/manual/reference/mongo-shell/) ou um [compilado]() que eu mesmo fiz.

| Descrição | Comando |
| --- | --- |
| Listar databases | `show dbs` |
| Criar um data base | `use <nomeDb>` |
| Usar um database diferente | `use <nomeDb>` |
| <br><br> |  |
| Listar as collections (DA) | `show collections` |
| Criar uma collection (DA) | `db.createCollection('<nome>');` |
| Criar um dado (Em formato de object) | `db.<nomeCollection>.insert({});` |
| Listar os dados da collection | `db.<nomeCollection>.find();` |

> Para conseguir visualizar melhor os dados do MongoDB, utilize o [Robo 3T](https://robomongo.org/).

<br><br>

## Mongoose

Fazendo require no Node.js.

```js
const mongoose = require('mongoose');
```

### Conectando o Mongoose

#### A um database local

Conectando a um database local; caso não existir ele criará um novo; é possível ter quandos databases for necessário com o MongoDB.

> Dica: o package [Mocha](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/NPM%20Packages/Mocha.md#mocha) é perfeito para usar junto com o Mongoose. O Mocha possíbilita usar funções especiais para controlar o fluxo do algoritmo.

```js
// Nome do database
var nomeDB = 'MeuDB';

// É necessário colocar a porta padrão que é 27017
mongoose.connect('mongodb://localhost:27017/' + nomeDB), {useNewUrlParser: true};
```

<br><br>

Apesar de já ter conectando com o MongoDB, ele não sabe quando a conexão foi completa ou quando poderá executar outros códigos. Para solucionar esse problema precisa-se de escutar um **evento** para quando a conexão for feita com sucesso.

```js
// Quando a conexão for 'aberta', executará uma das seguintes funções.
mongoose.connection
    .once('open', function() {
        console.log("A conexão foi feita.")
    })
    .on('error', function(err) {
        console.log("Erro de conexão encontrado:\n\n" + err);
    });
```

> **DICA:** A diferença de 'on' e 'once' quando se trata de event listeners é que o 'on' irá executar o código todas as vezes que o evento for chamado, já o 'once' irá executar o código apenas uma vez quando o evento for chamado.

#### À nuvem (Atlas)



### Models e Schemas

Dentro dos databases existe um **Model** (modelo) para organizar o tipo de dado que está sendo organizado. Por exemplo, é possivel ter um modelo apenas para personagens do Mario e outro só com personagens do Sonic, ambos dentro do mesmo database. O nome do modelo também é conhecido como o nome da collection.<br>

Já os **Schemas** (esquemas) são padrões que os dados irão seguir. Por exemplo, no modelo do Mario é necessário haver um atributo 'nomePersonagem' que esperará por uma _string_, já o atributo 'idadePersonagem' esperará por uma _number_. As propiedades dos schemas são opcionais, um personagem pode ou não ter um valor de idade, mas, se houver, irá esperar por um valor do tipo _number_.

```js
// mongodb.js
const mongoose = require('mongoose');

// Habilitando o mongoose para utilizar os schemas
const Schema = mongoose.Schema;

// Definindo as propiedades de um schema
const SchemaFavs = new Schema({
    firstName: String,
    isMember: Boolean,
    membershipType: String,
});

const SchemaPersonal = new Schema({
    birthYear: Number,
    isMale: Boolean 
});

// Criando um modelo (este vai ser o nome da collection). 
const ModelUm = mongoose.model("coisasfavoritas", SchemaFavs);
// Argumentos: Nome do Model e o Schema que será usado.

// Exportando o modelo para outros files usarem.
module.exports = ModelUm;
```

> Nota: o Model utiliza seu método com o 'm' minúsculo: mongoose.model() 

### Criando os dados

Processo da criação de um dado novo com o modelo importado e salvando no database. Este processo também pode ser chamado de "instância" — com o mesmo significado na Orientação Objeto.

```js
// Importando o modelo.
const Favs = require('./mongodb.js');

// Criando dado localmente por meio do modelo. É necessário criar uma instância do mesmo.
var cliente = new Favs({
    firstName: "Murilo",
    isMember: false,
    membershipType: "Free"
});
```

Salvando a instância no database. O `.save()` é um método do objeto instanciado anteriormente.

> Relembrando: O database citado é aquele que foi declarado no `.connect()` no começo do código.

```js
// Fora implementado uma promise dentro do 'save()' devido a possíbilidade de demorar alguns segundos para que os dados sejam salvos.
cliente.save().then(function(){

    console.log(cliente.isNew);

    // Retornará true caso o dado foi criado **localmente** e não está no database.
    // Retornará false caso o dado foi criado localmente e está no database.

    // Leve em conta que o resultado será dado dentro da Promise do ".save()", logo espera-se que o dado já esteja salvo, logo false (não é novo). 
});
```

<br><br>

#### Dropando uma coleção

"Dropar" uma coleção significa limpar todos os dados de uma coleção. Caso não seja feito, o database ficará lotado de dados repetidos e sem uso, o que pode acarretar problemas futuros como uso desnecessário de memória e de processamento, dificuldades para procurar um dado específico, entre outros.<br> 

O melhor momento para dropar a coleção é antes de um teste ser feito, para que cada teste retorne dados independentes e para que não surja os problemas mencionados anteriormente.<br> 

Primeiramente para conseguir dropar-lo, então, é preciso referênciar a collection, para isso usa-se o comando: `mongoose.connect.colletions;`

```js
var listaCollections = mongoose.connect.colletions;

// Irá mostrar na tela as collections existentes, junto com suas propiedades. 
console.log(listaCollections);
```

Agora é possível dropar a collection.

```js
// Anteriormente foi usado "coisasfavoritas" para o nome da collection, este nome deve ser posto em [nomeCollection] (sem as aspas). 

listaCollections.[nomeCollection].drop(function(){
    console.log(`A coleção acabou de ser dropada`);
});
```

### Lendo dados
