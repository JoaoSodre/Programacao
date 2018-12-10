var events = require('events');

// Todos os eventos são uma instância do objeto "EventEmitter".
var meuEmissor = new events.EventEmitter();


// Para declarar um evento se usa o método "on()"
meuEmissor.on('Chamei', function(msg1, msg2) {
	console.log(msg1 + ", e adicionei um " + msg2);
});

meuEmissor.on('TbmChameiEsse', function(msg1) {
	console.log(msg1);
});

meuEmissor.on('Gritar', function() {
	console.log("AAAAAAHHHHH!!!!");
});


// Para chamar um evento se usa o método "emit()"
meuEmissor.emit('Chamei', "Chamei esse evento", "segundo parâmetro!");
meuEmissor.emit('TbmChameiEsse', "Eu também chamei esse evento");
meuEmissor.emit('Gritar');