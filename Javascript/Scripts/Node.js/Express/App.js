/* Necessário instalar o express localmente para funcionar */
var express = require('express');
var app = express();



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



// Escutando a porta 3000
app.listen(3000);