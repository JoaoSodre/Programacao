var http = require('http');

http.createServer(function (pedido, resposta) {
  resposta.writeHead(200, {'Content-Type': 'text/plain'});
  resposta.write('Servidor Levantado com Sucesso!');
  resposta.end();
}).listen(8080);

// Agora entre em http://localhost:8080/