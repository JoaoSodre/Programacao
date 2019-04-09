# [Node.js](https://nodejs.org/en/)

* [Node.js](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#nodejs)
	* [Modules e require()](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#modules-e-o-require)
	* [Built-in Modules](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#built-in-modules)
		* [Module: 'events'](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#module-events)
		* [Module: 'fs'](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#module-fs)
		* [Module: 'util'](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#module-util)
		* [Module: 'http'](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#module-http)
	* [Npm](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#npm)
		* [O Arquivo package.json](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#o-arquivo-packagejson)
		* [Packages Populares](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#packages-populares)
		

[Awesome Node.js (Lista com muitos recursos e packages relacionados ao Node.js)](https://github.com/sindresorhus/awesome-nodejs#readme)<br>

O Node.js foi escrito na linguagem C++ para que possa permitir o Javascript interagir com a sua máquina/server. Com ele não é preciso aprender outras linguagens para interagir com os arquivos do pc. Outro aspecto dele é de que ele é excelente para fazer comunicações com databases.<br>

> Para aprender Node.js, é recomendável ter conhecimento sobre [Orientação a Objeto](https://github.com/JoaoSodre/Programacao/blob/master/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#orienta%C3%A7%C3%A3o-a-objeto) e [AJAX (Programação Assíncrona)](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/AJAX.md#ajax).

 ### Por que Node.js?

* Node.js útiliza a engine v8 do google (O que o deixa incrivelmente rápido).
* Possuí um enorme ecosistema de packages open source (Npm).
* Muito bom para serviços em tempo real (Como chats).

 ### V8 Engine

Como já mencionado os computadores não entendem o Javascript (apenas browsers) e para que isso aconteça é utilizado a v8 engine. Ou seja ele converte código javascript para código de máquina (Por isso é escrito com o C++).

 ### Instalação

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

## Modules e o require()

Quando nós escrevemos um código, normalmente nós deixamos partes do algoritmo em arquivos separados, esses arquivos em node são chamados de "Logical Modules", e fazem exatamente a mesma coisa que as tags  `<script scr="">` e `<link href="">` do Html.
Basicamente vai ser o método `require()` quem vai referenciar esses arquivos.<br><br>

Porém em Node.js nós precisamos explicificar exatamente quais elementos estamos exportando quando o require() for usado. Para isso usamos o `module.exports`.

```javascript
// functions.js
var ContarArray = function(arr) {
	return "Existem " + arr.length + " elementos nesse array";
}

// Elementos que queremos exportar
module.exports = ContarArray;
```

-------- Outra forma de escrever --------

```javascript
module.exports = function(arr) {
	return "Existem " + arr.length + " elementos nesse array";
}
```

O que o `module.exports` faz é nos retornar o que nós colocarmos como valor, nesse caso o `ContarArray` foi exportado e para que ele consiga usar, obrigatoriamente devemos a **injetar** em uma variável.<br><br>

Syntax require(): `var (Nome) = require('Módulo');`<br>
Nota: o path usa de referência o arquivo em que está sendo usado o require().

```javascript
// main.js

// Injetando o elemento na variável
var contar = require('./functions');

// Usando a variável para chamar a função
console.log(contar(["joao","daniel","fernando",13,"66",'555']))
```

<br><br>

**Require de vários Métodos/Propiedades**

Para dar require de vários elementos, basicamente adicione uma propiedade ao `module.exports`.

```javascript
// coisas.js

var Msg = function(msg) {
	return msg;
}

var Somar = function(a,b) {
	return "A soma deu: " + (a+b);
}

var pi = Math.PI;

// Exportando vários elementos
module.exports.Msg = Msg;
module.exports.Somar = Somar;
module.exports.pi = pi;
```

----- Outra maneira de escrever a mesma coisa -----

```javascript
module.exports.Msg = function(msg) {
	return msg;
}

module.exports.Somar = function(a,b) {
	return "A soma deu: " + (a+b);
}

module.exports.pi = Math.PI;
```

Enquanto isso no arquivo principal:

```javascript
// main.js
var coisas = require('./coisas');

console.log(coisas.Msg("Minha Mensagem Aqui!"));
console.log(coisas.Somar(coisas.pi, 5));
```

Nota: Tanto o "funtions.js" e "contar.js" são **Custom modules** ou seja são módulos que criamos a partir de uma necessidade, já os **Built-in modules** são módulos já criados e instalados pelo Node.js e não necessitam de um path.<br><br><br>



## Built-in Modules

[**Todos** os Built-in modules do Node.js (Sem instalações adicionais)](https://www.w3schools.com/nodejs/ref_modules.asp)<br>

Built-in Modules assim como os Custom, são como libraries e não necessitam de um path para dar o include como os Custom Modules, apenas seu nome.<br><br>



### **Module: 'events'**

O módulo 'events' nós permite criar eventos usando javascript, da mesma forma que na programação assíncrona.<br>

Sintax do events: `intancia.ação('NomeEvento', function() {*Algum código*})`<br> Por convenção o nome da variável e o mesmo que a do módulo.

```javascript
// Build-In Module
var events = require('events');

// Todos os eventos são uma instância do objeto 'EventEmitter'.
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
```

<br><br>

### **Module: 'fs'**

Com esse módulo é possível gerenciar arquivos do sistema, como escrever em .txt (útil para databases) ou deletar arquivos e diretórios. O módulo 'fs' pode tanto funcionar de forma blocante como de forma **assícrona**.<br><br>

#### Lendo os dados de um arquivo

```javascript
var fs = require('fs');

/* Armazenando numa variável os dados de
'BaseDados.txt', de forma SINCRONA */

/* Já que só existem zeros e uns no arquivo,
o método utiliza utf-8 como parametro para
traduzir esses bytes em letras */

var txt = fs.readFileSync('./BaseDados.txt', 'utf8');
console.log(txt);
```

----------- Modo Assíncrono -----------

```javascript
/* Dessa vez é necessário uma função no terceiro parametro, 
que vai executar (disparar) quando ele terminar a ação */

/* Na função é necessário 2 parametros, um para caso der
erro e outro que vai ser os dados do arquivo */

fs.readFile('./meLeia.txt' , 'utf8', function(error, txt) {
    console.log("Terminei de ler o arquivo: " + txt);
});
```

<br><br>

#### Escrevendo dados num arquivo (Armazenar)

(Também funciona de modo assíncrono, assim como o read.File):

```javascript
/* Cuidado! Dependendo dos comandos do código, 
ele vai apagar e substituir os dados do arquivo */

for (let i = 0; i < 10; i++) {
	fs.readFile('./EscrevaAqui.txt', 'utf8', function(err, data) {

		// Se o arquivo não existir, dará ERRO
		if (err) {
			fs.writeFileSync('./EscrevaAqui.txt', "");
			i--;
		}
		else {
			data += Math.E + "\n";
			fs.writeFileSync('./EscrevaAqui.txt' , data);
		}
	});
}
```

----------- Modo Assíncrono -----------

```javascript
fs.writeFile('./EscrevaAqui.txt' , txt, function(err) {
    if (err) { console.log(err); }
	console.log("Acabei de escrever no arquivo");
});
```

<br><br>

#### Adicionando ou removendo diretórios e arquivos

O node não consegue criar subdiretórios como no command-line, apenas uma pasta de cada vez.

```javascript
// mkdir = make directory
fs.mkdirSync('./pasta1');

// rmdir = remove directory
fs.rmdirSync('./pasta1');

// Criando várias pastas de forma assíncrona
fs.mkdir('./pasta1', function() {
    fs.mkdir('./pasta1/pasta2', function() {
        fs.mkdir('./pasta1/pasta2/pasta3', function() {
            // etc ....
        });
    });
});
```

<br><br>

#### Criando uma [Readable Streams](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#buffers-e-streams)

A diferença de usar Readable e Writable streams para escrever ou ler dados de arquivos, é que as streams separam eles em pequenos pedaços de dados (buffers) e mandando assim que estiverem completos, fazendo assim com que a aplicação melhore seu desempenho.<br>

As streams só funciona com caminhos absolutos, ou seja é obrigatório usar o `__dirname`.

```javascript

// Criando uma stream que le os buffers
var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');

// __dirname = Caminho até a pasta atual, ou seja, o mesmo que o ponto (.)

/* É possível usar o 'utf8' como segundo parâmetro 
para os caracteres serem renderizados depois */

/*/ *Toda vez que um buffer passar pela stream ele emitirá o evento 
'data', com ele é possível ver os chunks sendo passados */

minhaReadStream.on('data', function(dados){
    console.log(dados);
});
```

Nota: O módulo fs já herda a classe 'EventEmmiter' do 'events', por isso é possivel usar o método 'on()'<br><br>

#### Criando Writable Streams

```javascript
var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');
var meuWriteStream = fs.createWriteStream(__dirname + '/escrevaAqui.txt')

// Toda vez que receber um pedaço dos dados... 
minhaReadStream.on('data', function(data){

    console.log("Novo pedaço de data recebido");

    // Escreva-os num arquivo da WriteStream
    meuWriteStream.write(data);
    // Método 'write()' da stream funciona da mesma forma que o 'fs.writeFile()'
});
```

<br><br>

#### [Pipes](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#pipes)

O pipe ajuda a economizar linhas de código já que essa prática é bastante comum em Node.js.<br>

Syntax (Pipe): `(ReadStream).pipe(WriteStream)`.

```javascript
var fs = require('fs');

var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');
var meuWriteStream = fs.createWriteStream(__dirname + '/escrevaAqui.txt');

minhaReadStream.pipe(meuWriteStream);
```

<br><br>

### **Module: 'util'**

Com o 'util' é possivel acessar algumas funções para coisas úteis, como por exemplo eu posso querer herdar o módulo 'events.EventEmitter()' toda vez que eu instanciar uma classe, sendo assim não precisarei criar várias variáveis com o mesmo `var (Nome) = new (Nome).EventEmitter()` para cada elemento que irei usar, economizando assim muitas linhas de código.

```javascript
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
pessoas.forEach(A => {
	
	// Crie um evento chamado 'Falar', que faz algo quando for chamado
	A.on('Falar', msg => {

		/* Já que são objetos, precisa colocar o atributo 'nome',
		que foi passado pelo construtor */
		console.log(A.nome + " falou: " + msg);
	});
});

joao.emit('Falar', "Alo?!");
Димитрис.emit('Falar', "????????");
maria.emit('Falar', "Tenho vida agora!!");
Димитрис.emit('Falar', "что это такое?");
```

<br><br>

### **Module: 'http'**

> Veja antes [Aplicações Back-End](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#aplica%C3%A7%C3%B5es-back-end) para conseguir entender o módulo Http e o Express. <br>

O módulo 'http' permite que o Node.js possa fazer transferências de dados pelo protocolo HTTP, ou seja, com ele é possível criar um server para web.<br><br>

#### Criando um server com a própia máquina

Comando para levantar o server (cmd): `node (arquivo.js)`.<br>
Comando para derrubar o server (cmd): `ctrl + c`.<br>
Entrando na porta que o server está escutando (browser): `localhost:(NúmeroPorta)` ou `127.0.0.1:(NúmeroPorta)`<br>

```javascript
var http = require('http');

http.createServer((req, res) => {
	console.log("Um request foi feito em: http://localhost:8080" + req.url);

	/* Response Header com o tipo de informação que estamos 
	passando (Uma string, por isso 'text'), e o STATUS html */

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Servidor Levantado com Sucesso!');

	/* Finalizar os processos do response, se não a página 
	não consegue renderizar (Ele não sabe quando parar) */
	res.end();

	// o .end() também SEMPRE espera um buffer ou uma string

}).listen(8080); // Porta que ele vai escutar
```

> [Response Header](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#header)<br>
> [Status Html](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#status-http)

<br><br>

#### Enviando dados via Streams

```javascript
http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');

	// Usando pipe para mandar os dados e renderizar na página
	minhaReadStream.pipe(res);

	// Não é mais necessário o res.end() pois o pipe() faz exatamente a mesma coisa

}).listen(8080);
```

<br><br>

#### Enviando outros tipos de dados

```javascript
// Html
res.writeHead(200, {'Content-Type': 'text/html'});
fs.createReadStream(__dirname + '/index.html');
RStream.pipe(res);

// Json
res.writeHead(200, {'Content-Type': 'application/json'});
res.end(JSON.stringify(algumObj)) 
```

<br><br>

#### Criando e Definindo Rotas

```javascript
if (req.url === '/') {
	// renderize o documento .html 'index'
} else if (req.url === '/contact') {
	// rederize o documento .html 'contact'
} else {
	// renderize a página 'erro 404'
}
```

<br><br><br>

## Npm

O NPM (Node Package Manager) já vem instalado com o Node.js, ele é um gerenciador de packages ou módulos para o Node, ou seja com ele é possível fazer o download de milhares de libraries hospedadas do seu própio site (www.npmjs.com) para o seu computador, usando o command-line.<br><br>

### O Arquivo package.json

Suponhamos que o código precisa ser compartilhado, como que o computador iria saber as **dependências** do projeto? É para isso que serve o package.json, é nesse que vai estar todas as informações sobre a aplicação para que funcione corretamente.<br>

Sabendo disso para instalar as dependencias de um outro projeto clonado do github por exemplo, basta usar o comando `npm install` para que ele faça isso automáticamente. (Será necessário estar no mesmo diretório que esse o arquivo para suportar esse comando e outros como o `npm start` ou `npm run (comando)` também). Caso não queira uma dependência específica basta usar o comando `npm uninstall (package) (-g)` para que ele remova do projeto e do package.json.<br>

Para criar/alterar o conteúdo do package, digite no cmd `npm init`, ele fazerá uma série de perguntas para completar os dados do arquivo.<br>

Sempre quando for instalar um package, use o commando `--save` para que a versão dele fique no package.json. (Ex: `npm install express --save`, `npm install express@4.2.0 --save` para caso a versão 4.2.0 seja necessária)<br>

No caso de que exista uma dependência que não seja necessária na aplicação mas que gostaria-se de usar-lá, usa-se o comando `--save-dev` pois ela é apenas um feature a mais no projeto.

[Outros Comandos Npm](https://gist.githubusercontent.com/bradtraversy/09177818de0f43a6e74e2cd05d1fe596/raw/26f908bfad766f7c5156de7d6d4d1c0a510e1a1a/npmcrashcourse.txt)

<br><br>

### Packages Populares

Uma pequena lista de node packages populares e como são usados.

* [Express](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/NPM%20Packages/Express.md#express): Administrar melhor o server-side do Node. 
* [Ejs](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/NPM%20Packages/Ejs.md#ejs): Javascript dinâmico usado atravez de um template.
* [Body-Parser](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/NPM%20Packages/Body-Parser.md#body-parser): Fazem os POSTs funcionarem de forma correta.
* [Mocha](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/NPM%20Packages/Mocha.md#mocha): Cria testes durante a aplicação. 
* [OAuth (em breve)](): Possibilita autenticar usuários pelo Facebook, Github, Twitter etc.
* [Outros Packages Úteis](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/NPM%20Packages/Outros%20Packages%20%C3%9Ateis.md#outros-packages-%C3%BAteis)