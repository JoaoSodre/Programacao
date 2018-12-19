var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var url = bodyParser.urlencoded({ extended: false })


// Método 'set()', usado para configurar eventos e outros features do express
app.set('view engine','ejs');




// Quando entrar numa das rotas, ativará a função
app.get('/', function(req, res) {
    res.send('Essa é a home page!');
});

app.get('/contact', function(req, res) {
    res.send('Essa é uma página de contatos');
});




// Resposta dinâmica
app.get('/users/:id', function(req, res) {
	res.send('Você fez um request para ver a página do usuário: ' + req.params.id);
});




// Enviando uma página Html (Não funciona se existir res.send() no mesma rota)
app.get('/:anything', function(req, res){
    res.sendFile(__dirname + '/Error404.html');
});




// ----- Renderizando templates -----
app.get('/', function(req,res){
	res.render('index');
});




// Fazendo algo com POST
app.post('/cadastro', function(req,res){

	/* Quando um post for feito na rota '/cadastro', 
	irá renderizar esse template */

	res.render('cadastro-sucesso');
});




// Mandando dados dinâmicos (Ejs)
app.get('/users/:nome', function(req,res){
	res.render('perfilUsuario', { pessoa: [ req.params.nome, "Eduardo", "Gabriel" ]});
});



// Usando middleware para lidar com POSTS de objetos
app.post('/', url, function(req,res){
	console.log(req.body);
});




// Escutando a porta 3000
app.listen(3000);