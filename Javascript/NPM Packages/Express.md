# [Express](https://www.npmjs.com/package/express)

[Awesome Express](https://github.com/rajikaimal/awesome-express#awesome-express--)<br>

Express é um dos packages do npm, ele fornece vários features que auxiliam na criação de aplicações web e mobile, criação de rotas flexíveis e fáceis de usar, lidar com requests POST e GET, útil como um middleware (Espécie de ponte (código) que está back-end e front-end ou entre duas aplicações, ou seja entre o request e o response) etc.<br>

Basicamente o Express reorganiza o node para que fique muito mais intuítivo e fácil de usar.

<br><br>

### O Módulo Express

```javascript
var express = require('express');

/* A variável 'express' foi importada como uma função,
chamando ela nós da acesso a mais métodos  */
var app = express();

// Escutar a porta '3000'
app.listen(3000);
```

<br><br>

**Lidando com requests**

Usando Express e node é muito fácil analizar qualquer tipo de request, basta apenas usar um desses métodos que estão na variável 'app'.

```javascript
/* Para responder um request, usamos a rota em que se encontra o user e uma
função que disparará quando ele for chamado, e o mesmo para os outros */

app.get('/rota', function(){...});
app.post('/rota', function(){...});
app.delete('/rota', function(){...});
```

O método '.get()' também consegue responder aos requests de forma **dinâmica**, isso significa que toda vez que por exemplo algum usuário for criar uma conta no site, ele não precisará de criar uma rota única e especifica para aquela pessoa.<br> 

Syntax (Permitir requests pela url): `:(NomeParâmetro)`<br>
Syntax (Acessar parâmetro do usuário): `req.params.(NomeParâmetro)`

```javascript
app.get('/users/:id', function(req, res){
	/* O id pode ter o mesmo nome uma série de dados em um database que
	injetará os dados na página html usando javascript dinâmico */

	res.send('Você fez um request para ver a página do usuário: ' + req.params.id);
});
```

`req.params` é um objeto que mostra o parâmetros da rota (Aqui no caso foi 'id').<br><br>

**Mandando Arquivos**

Enviando uma página Html.

```javascript
/* Não funcionará se existir res.send() na mesmo escopo */
app.get('/:anything', function(req, res){
    res.sendFile(__dirname + '/Error404.html');
});
```

**Lidando com Arquivos Estáticos (Middleware)**

Quando você separa um arquivo para dar include depois como um stylesheet o express não conseguirá entender o request das páginas para esse arquivo, por isso ele possuí uma função especial para lidar com esse tipo de situação.

```javascript
/* Toda vez que alguem entrar em qualquer página ('/') ele irá converter
o request dos includes para o browser conseguir entender */
app.use('/', express.estatic('NomePastaDosIncludes'));
```

Essa ações que acontecem entre entre um request e um response são chamadas de "Middleware" pois estão ali no meio dos dois métodos http.