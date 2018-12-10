// Custom Modules
var contar = require('./contar');
var coisas = require('./coisas');

// Usando a variável "contar"
console.log(contar(["joao","daniel","fernando",13,"66",'555']))

/* Usando a variável "coisas", já que são vários elementos exportados 
a syntax fica muito parecida com a orientação objeto */
console.log(coisas.Somar(5,7));
console.log(coisas.Msg("Minha Mensagem Aqui!"));
console.log(coisas.Somar(coisas.pi, Math.PI));