# Aplicação Back-End com Node.js

Antes de mais nada é preciso ter conhecimento de [Node.js](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#nodejs) para entender a aplicação back-end usada aqui.<br><br>

Exemplo de Aplicação usando Node.js [(Referência para o Module 'http')](https://www.w3schools.com/nodejs/obj_http_serverresponse.asp):

```javascript
var http = require('http');

http.createServer(function (pedido, resposta) {
  resposta.writeHead(200, {'Content-Type': 'text/plain'});
  resposta.write('Servidor Levantado com Sucesso!');
  resposta.end();
}).listen(8080);
```
Agora nós temos um servidor na porta 8080!<br><br>

# NPM

O NPM já vem instalado com o Node.js, ele é um gerenciador de packages ou módulos para o Node, ou seja com ele é possível fazer o download de milhares de libraries hospedadas do seu própio site (www.npmjs.com) para o seu computador, usando o command-line.<br><br>

## Express (Instalação)

Express é um dos packages do www.npmjs.com, ele fornece e auxilia vários features na criação de aplicações web e mobile, como a criação da página index, página de erros, etc. <br><br>

Para instalar o express basta seguir os passos abaixo [(Fonte)](https://expressjs.com/en/starter/generator.html):

1. Crie uma pasta onde você quer deixar os arquivos da sua aplicação  e entre no diretório pelo CMD.<br>
(Nome de aplicação de Exemplo: "Meu app")

2. No cmd digite esse comando para instalar o express:

```cmd
npm install express-generator -g
```

3. Depois escolha um template para seu projeto, aqui eu escolhi o 'ejs' e depois siga o próximo comando.<br>
(Para saber os templates disponiveis, use o `express -h`)<br><br>

```cmd
> express (NomeAplicação) install --ejs
> npm install
```

O template 'ejs' também já vem instalado junto com o express, ele auxilia na organização da aplicação html, e também possíbilita usar o javascript dinâmico. [(Site do ejs)](https://ejs.co/) <br><br>

## Levantando e Derrubando o Server

Dentro dos arquivos onde foi instalado o express, é possível iniciar (Levantar) um servidor, usando o comando:

```cmd
npm start 

ou 

node ./bin/www
```

(Nota: Ambos os comandos executam o arquivo www, porém um deles útiliza o atalho do "package.json")<br><br>

Para entrar na página, digite no browser: `http://localhost:(NúmeroDaPorta)/` ou `http://127.0.0.1:(NúmeroDaPorta)/`<br>
(Por padrão o número é '3000')<br><br>

Quando quiser desligar o servidor (Derrubar): `ctrl + c`<br><br>

## Aplicação Back-End

Depois de ter escolhido o ejs como template, nota-se que uma das pastas que ele criou foi a 'public', é nela que vai ficar os arquivos **estáticos** que serão exibidos no site, ou seja arquivos como imagens, stylesheets, funções e comandos javascript (ou seja os includes), etc.<br><br> 

No endereço do browser é possivel ver esses includes. (Ex: http://localhost:3000/stylesheets/style.css) <br><br>

Já a pasta 'views' é onde irá ficar o html de suas páginas como o index, páginas de erros, rotas para outras partes do site, etc.