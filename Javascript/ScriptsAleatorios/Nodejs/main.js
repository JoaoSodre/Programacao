var contar = require('./contar');
var coisas = require('./coisas');

// Usando o require "contar"
console.log(contar(["joao","daniel","fernando",13,"66",'555']))

// Usando o require "coisas", muito parecido com a orientação objeto
console.log(coisas.Somar(5,7));
console.log(coisas.Msg("Minha Mensagem Aqui!"));
console.log(coisas.Somar(coisas.pi, 5));