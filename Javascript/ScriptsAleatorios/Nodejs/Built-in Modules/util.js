var eventos = require('events');
var utilidades = require('util');

var Pessoa = function(nome) {
	this.nome = nome;
}

// Toda vez que 'Pessoa' for instanciada, 'herdarar' 'eventos.EventEmitter'
utilidades.inherits(Pessoa, eventos.EventEmitter);

// Note que 'eventos.EventEmitter' NÃO usa parenteses no final nesse caso


var joao = new Pessoa("Joao");
var fernando = new Pessoa("Fernando");
var maria = new Pessoa("Maria");

var pessoas = [joao, fernando, maria];

// Para cada atributo em 'pessoas', coloque-as em 'A'
pessoas.forEach(function(A){
	
	// Crie um evento chamado 'Falar', que faz algo quando for chamado
	A.on('Falar', function(msg){

		/* Já que são objetos, precisa colocar o atributo 'nome',
		que foi passado pelo construtor */
		console.log(A.nome + " falou: " + msg);
	});
});

joao.emit('Falar', "Oi gente!");
fernando.emit('Falar', "To perdido...");
maria.emit('Falar', "Tenho vida agora rs");
fernando.emit('Falar', "Estamos em que mundo?");