# Node.js

* [Node.js]()
	* [Express]()

[Site do Node.js](https://nodejs.org/en/)<br>

O Node.Js foi escrito na linguagem C++ para que possa permitir o Javascript interagir com a sua máquina/server. Com ele não é preciso aprender outras linguagens para interagir com os arquivos do pc. Outro aspecto dele é de que ele é excelente para fazer comunicações com [databases]().

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

**Modules e require()**

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


// --------------- Ou ---------------

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


// --------------- Ou ---------------
 
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

// A injeção é muito usado na orientação a objeto também
console.log(coisas.Somar(5,7));
console.log(coisas.Msg("Minha Mensagem Aqui!"));

console.log(coisas.Somar(coisas.pi, 5));
```

[Exemplos na prática]()


## Express

É um framework que ajuda a criar aplicações web a base Node.js. Com o Express é possível iniciar um servidor para front-end usando a própia máquina.<br><br>

Para instalar o express basta seguir os passos abaixo:

1. Instale o Node.js

2. Crie uma pasta onde você quer deixar os arquivos da sua **aplicação**  e entre no diretório pelo CMD.<br>
(Nome de aplicação de Exemplo: "Meu app")

3. No cmd digite esse comando para instalar o express:

```cmd
npm install express-generator -g
```

(O comando 'npm' já vem junto com o node.js, ele irá buscar via internet no site npmjs.com (que é usado como um repositório para packages js) o framework 'express' para fazer o download)

<br>

4. Depois escolha um template para seu projeto, aqui eu escolhi o 'ejs' e depois siga o próximo comando.<br>
(Para saber os templates disponiveis, use o `express -h`)<br><br>
[Site do ejs](https://ejs.co/)

```cmd
> express install --ejs
> npm install
```

(O template 'ejs' nós possibilitar criar além de uma aplicação html, nós permite usar o javascript [dinâmico]())<br>

<br>

Fonte: [Express application generator](https://expressjs.com/en/starter/generator.html)

<br>

Quando quiser iniciar (Levantar) o servidor basta simplesmente:

```cmd
npm start ou node ./bin/www
```

(Nota: É **necessário** estar no diretório onde se encontra o arquivo **package.json**)<br><br>

Para entrar na página, digite no browser: `http://localhost:(NúmeroDaPorta)/` ou `http://127.0.0.1:(NúmeroDaPorta)/`<br>
(Por padrão o número é '3000')<br><br>

Quando quiser desligar o servidor (Derrubar): `ctrl + c`<br><br>

**Aplicação Back-End com Express**

Dentro dos vários diretórios que o Express criou, um deles foi o "public" que são os arquivos **estáticos** que serão exibidos no site, ou seja arquivos como imagens, stylesheets e funções, ou seja os includes. <br><br>

No endereço do browser é possivel ver esses includes. (Ex: http://localhost:3000/stylesheets/style.css) <br><br>

Já a pasta 'views' é onde irá ficar o html de suas páginas como index, erros, **rotas** etc.
<br>
