# Node.js

* [Node.js](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#nodejs)
	* [Modules e require()](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#nodejs)
	* [Built-in Modules](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#built-in-modules)
		* [Module: 'events'](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#module-events)
		* [Module: 'util'](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#module-util)
		* [Module: 'fs'](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#module-fs)


[Site do Node.js](https://nodejs.org/en/)<br>

O Node.Js foi escrito na linguagem C++ para que possa permitir o Javascript interagir com a sua máquina/server. Com ele não é preciso aprender outras linguagens para interagir com os arquivos do pc. Outro aspecto dele é de que ele é excelente para fazer comunicações com databases.<br><br>

Para ter um bom entendimento sobre o Node.js, é necessário compreender a [Orientação a Objeto](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md) e a [Orientação a Eventos (Programação Assíncrona)](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Eventos.md#orienta%C3%A7%C3%A3o-a-eventos).

**Por que Node.js?**

* Node.js útiliza a engine v8 do google (O que o deixa incrivelmente rápido).
* Possuí um enorme ecosistema de packages open source (npm).
* Muito bom para serviços em tempo real (Como chats).

**V8 Engine**

Como já mencionado os computadores não entendem o Javascript (Apenas browsers) e para que isso aconteça é útilizado a v8 engine. Ou seja ele converte código javascript para código de máquina (Por isso é escrito com o C++).

**Instalação**

Para instala-lo basta baixa a versão recente mais **instável** (ou seja a que tiver o LTS no nome), pois a outra versão apesar de possuír mais features, pode acabar tendo bugs e erros horríveis no seu algoritmo.<br>

Com ele instalado primeira coisa a se fazer depois é testar no **command-line** a versão dele. Caso aparecer a versão dele signifca que foi instalado com sucesso.

```cmd
node -v
```

Com o node instalado também é possivel executar arquivos.js direto no computador, sem precisar usar o console do browser ou salvar dentro de tags html.

```cmd
node (Arquivo.js)
```

<br><br>

## Modules e require()

Quando nós escrevemos um código, normalmente nós deixamos partes do algoritmo em arquivos separados, esses arquivos em node são chamados de "Logical Modules", e fazem exatamente a mesma coisa que as tags  `<script scr="">` e `<link href="">` do Html.
Basicamente vai ser o método `require()` quem vai referenciar esses arquivos.<br><br>

Porém em Node.js nós precisamos explicificar exatamente quais elementos estamos exportando quando o require() for usado. Para isso usamos o `module.exports`.

```javascript
// functions.js
var ContarArray = function(arr) {
	return "Existem " + arr.length + " elementos nesse array";
};

// Elementos que queremos exportar
module.exports = ContarArray;


--------------- Ou ---------------


module.exports = function(arr) {
	return "Existem " + arr.length + " elementos nesse array";
};
```

O que o `module.exports` faz é nos retornar o que nós colocarmos como valor, nesse caso o `ContarArray` foi exportado e para que ele consiga usar, obrigatoriamente devemos a **injetar** em uma variável.<br><br>

Syntax require(): `var (Nome) = require('String com o path');`<br>
Nota: o path usa de referência o arquivo em que está sendo usado o require().

```javascript
// main.js

// Injetando o elemento nessa variável
var contar = require('./functions');

// Usando a variável para chamar a função
console.log(contar(["joao","daniel","fernando",13,"66",'555']))
```

<br><br>

**Require de vários Métodos/Propiedades**

Para dar require de vários elementos, basicamente adicione uma propiedade ao `module.export`.

```javascript
// coisas.js

var Msg = function(msg) {
	return msg;
};

var Somar = function(a,b) {
	return "A soma deu: " + (a+b);
};

var pi = 3.141;

// Exportando vários elementos
module.exports.Msg = Msg;
module.exports.Somar = Somar;
module.exports.pi = pi;



--------------- Ou ---------------
 


module.exports.Msg = function(msg) {
	return msg;
};

module.exports.Somar = function(a,b) {
	return "A soma deu: " + (a+b);
};

module.exports.pi = 3.141;
```

Enquanto isso no arquivo principal:

```javascript
// main.js
var coisas = require('./coisas');

console.log(coisas.Somar(5,7));
console.log(coisas.Msg("Minha Mensagem Aqui!"));

console.log(coisas.Somar(coisas.pi, 5));
```

Nota: Tanto o "funtions.js" e "contar.js" são **Custom modules** ou seja são módulos que criamos a partir de uma necessidade, já os **Built-in modules** são módulos já criados e instalados pelo Node.js e não necessitam de um path.
<br><br><br>


## Built-in Modules

[Lista com **todos** os Built-in modules do Node.js (Sem intalações adicionais)](https://www.w3schools.com/nodejs/ref_modules.asp)<br>

Built-in Modules como já mencionado são módulos que o própio node cria e instala e não necessitam de um path, esse modules permitem solucionar as mais diversas necessidades.<br>
<br><br>


#### **[Module: 'events'](https://www.w3schools.com/nodejs/ref_events.asp)**

O módulo 'events' nós permite criar eventos usando javascript, da mesma forma que na programação assíncrona.<br>

Sintax do events: `intancia.ação('NomeEvento', function() {*Algum código*})`

```javascript
// Build-In Module
var moduloEventsNode = require('events');

// Todos os eventos são uma instância do objeto "EventEmitter".
var meuEmissor = new moduloEventsNode.EventEmitter();


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
```

<br><br>

#### **[Module: 'util'](https://www.w3schools.com/nodejs/ref_util.asp)**

Com o 'util' é possivel acessar algumas funções para coisas úteis, como por exemplo eu posso querer herdar o módulo 'events.EventEmitter()' toda vez que eu instanciar uma classe, sendo assim não precisarei criar várias variáveis com o mesmo `var (Nome) = new (Nome).EventEmitter()` para cada elemento que irei usar, economizando assim muitas linhas de código.

```javascript
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
```

<br><br>

#### **[Module: 'fs'](https://www.w3schools.com/nodejs/ref_fs.asp)**