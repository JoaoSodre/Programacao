/* =================== Modules e require() =================== */

// Custom Modules -- Modulos customizados que criamos
var contar = require('./contar');
var coisas = require('./coisas');

// Usando a variável "contar"
console.log(contar(["joao","daniel","fernando",13,"66",'555']))

/* Usando a variável "coisas", já que são vários elementos exportados 
a syntax fica muito parecida com a orientação objeto */
console.log(coisas.Somar(5,7));
console.log(coisas.Msg("Minha Mensagem Aqui!"));
console.log(coisas.Somar(coisas.pi, Math.PI));



/* =================== Build-In Module =================== */

// Build-In Module
var moduloEventsNode = require('events');

// Todos os eventos são uma instância do objeto "EventEmitter".
var meuEmissor = new moduloEventsNode.EventEmitter();


// Criando os eventos usando o método "on()"
meuEmissor.on('Chamei', function(msg1, msg2) {
	console.log(msg1 + ", e adicionei um " + msg2);
});

meuEmissor.on('TbmChameiEsse', function(msg1) {
	console.log(msg1);
});

meuEmissor.on('Gritar', function() {
	console.log("AAAAAAHHHHH!!!!");
});

// Chamando os Eventos usando o método "emit()"
meuEmissor.emit('Chamei', "Chamei esse evento", "segundo parâmetro!");
meuEmissor.emit('TbmChameiEsse', "Eu também chamei esse evento");
meuEmissor.emit('Gritar');
