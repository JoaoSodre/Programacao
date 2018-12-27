var http = require('http');



// Criando um server com a própia máquina

/* Método do módulo para criar um server */
http.createServer((req, res) => {
	console.log("Um request foi feito em: http://localhost:8080" + req.url);

	/* Response Header com o tipo de informação que estamos 
	passando (Uma string, por isso 'text'), e o STATUS html */

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Servidor Levantado com Sucesso!');

	// Termina os processos do response
	res.end();
}).listen(8080); // Porta que ele vai escutar




// Enviando dados via streams

var fs = require('fs');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	// Criando readable stream
	var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');

	// Usando pipe para mandar os dados e renderizar na página
	minhaReadStream.pipe(res);
	// Não é mais necessário o res.end() pois o pipe() faz exatamente a mesma coisa

}).listen(8080);




// Enviando outros tipos de dados

// Html
res.writeHead(200, {'Content-Type': 'text/html'});
fs.createReadStream(__dirname + '/index.html');
RStream.pipe(res);

// Json
res.writeHead(200, {'Content-Type': 'application/json'});
res.end(JSON.stringify(algumObj));




// Criando e Definindo Rotas

if (req.url === '/index') {
	// renderize o documento .html 'index'
} else if (req.url === '/contact') {
	// rederize o documento .html 'contact'
} else {
	// renderize a página 'erro 404'
}