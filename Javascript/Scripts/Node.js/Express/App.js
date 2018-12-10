// Necessário instalar o express localmente para funcionar
var express = require('express');
var app = express();

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



// Rota inexistente
app.get('/:anything', function(req, res){
    res.send('Error 404: Essa página não existe.');
});



// Escutando a porta 3000
app.listen(3000);