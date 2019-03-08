# MongoDB

## O que é o MongoDB?

MongoDB é um **NoSQL Database** ou seja em vez de armazenar os dados em tabelas como faz-se no MySQL, o MongoDB irá armazenar suas informações em documentos, coleções ou notações de **objetos**. Se pensarmos bem faz muito sentido usar o MongoDB junto com o [Node.js](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#nodejs) pois a comunicação entre eles será muito mais fácil quando os objetos javascript forem usados.

## Como funciona?

Quando o client faz um request, o server -- comunicando com o database -- simplesmente controlará tudo o que acontece com os dados dentro do database, como: criar, ler, deletar e atualizar (chamadas **Crud Operations**).

Caso Node.js estiver sendo usado como server, será necessário o [Mongoose](https://www.npmjs.com/package/mongoose) para conseguir comunica-lo com o MongoDB. O Mongoose é um package que facilitará muito a conexão server-database.

## Mongoose

Conectando Mongoose ao database MongoDB.

```js
const mongoose = require('mongoose');
```

Conectando a um database local. Caso não existir ele criará um novo. É possível ter quandos databases for necessários com o MongoDB.

```js
// Nome do database
var localDB = 'MeuDB';

// Essa opção é usada quando o MongoDB é instalado na máquina local
mongoose.connect('mongodb://localhost/' + localDB);
```

<br><br>

Apesar de já ter conectando com o MongoDB, ele não sabe quando a conexão foi completa ou quando poderá executar outros códigos. Para solucionar esse problema precisa-se de escutar um **evento** para quando a conexão for feita com sucesso.

```js
// Quando a conexão for 'aberta', executará uma das seguintes funções.
mongoose.connection
    .once('open', function(){
        console.log("A conexão foi feita, agora faça vacas voarem.")
    })
    .on('error', function(err){
        console.log("Erro de conexão encontrado:\n\n" + err);
    });
```

> **DICA:** A diferença de 'on' e 'once' quando se trata de event listeners é que o 'on' irá executar o código todas as vezes que o evento for chamado, já o 'once' irá executar o código quando o evento for chamado apenas uma vez.

### Models e Schemas

Dentro dos databases existe um **Model** (modelo) para organizar o tipo de dado que está sendo organizado. Por exemplo, é possivel ter um modelo apenas para personagens do Mario e outro só com personagens do Sonic, ambos dentro do mesmo database.<br>

Já os **Schemas** (esquemas) são padrões que os dados irão seguir. Por exemplo, no modelo do Mario é necessário haver um atributo ''nomePersonagem' que esperará por uma _string_, já o atributo 'idadePersonagem' esperará por uma _number_. As propiedades dos schemas são opcionais, um personagem pode ou não ter um valor de idade, mas, se houver, irá esperar por um valor do tipo _number_.

```js
// mongodb.js
const mongoose = require('mongoose');

// Habilitando o mongoose para utilizar os schemas
const Schema = mongoose.Schema;

// Definindo as propiedades de um schema
const SchemaFavs = new Schema({
    lugarFav: String,
    bandaFav: String
});

const SchemaDOIS = new Schema({
    anoNasc: Number,
    isMan: Boolean 
});

// Criando um modelo. 
const ModelUm = mongoose.Model("Model um", SchemaFavs);
// Argumentos: Nome do Model e o Schema que será usado.

module.exports = ModelOne;
```

Criando um dado novo com o modelo importado e salvando no database depois.

```js
const Favs = require('./mongodb.js');

// Criando dado localmente por meio do modelo. 
var clienteUm = new Favs({
    lugarFav: "Espanha",
    bandaFav: "Beatles"
});
```

Salvando no dataBase -- aquele do 'connect()'.

```js
// O método 'save()' por ser assíncrono, fora implementado uma Promise dentro dele. 
clienteUm.save().then(function(){

    // Retornará true caso o dado foi criado localmente e não está no database.
    // Retornará false caso o dado foi criado localmente e está no database.
    console.log(clienteUm.isNew);

    // Espera-se 'false' pois o modelo não é novo e está no database
});
```

Para conseguir visualizar os dados do MongoDB, utilize o [Robo 3T](https://robomongo.org/)
