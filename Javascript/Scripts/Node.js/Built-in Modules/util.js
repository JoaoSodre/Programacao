var events = require('events');
var util = require('util');

var Pessoa = function(nome) {
	this.nome = nome;
}

// Toda vez que 'Pessoa' for instanciada, 'herdarar' 'events.EventEmitter'
util.inherits(Pessoa, events.EventEmitter);

// Note que 'events.EventEmitter' NÃO usa parenteses no final nesse caso


var joao = new Pessoa("Joao");
var Димитрис = new Pessoa("Димитрис");
var maria = new Pessoa("Maria");

var pessoas = [joao, Димитрис, maria];

// Para cada atributo em 'pessoas', coloque-as em 'A'
pessoas.forEach(function(A){
	
	// Crie um evento chamado 'Falar', que faz algo quando for chamado
	A.on('Falar', function(msg){

		/* Já que são objetos, precisa colocar o atributo 'nome',
		que foi passado pelo construtor */
		console.log(A.nome + " falou: " + msg);
	});
});

joao.emit('Falar', "Alo?!");
Димитрис.emit('Falar', "????????");
maria.emit('Falar', "Tenho vida agora!!");
Димитрис.emit('Falar', "что это такое?");