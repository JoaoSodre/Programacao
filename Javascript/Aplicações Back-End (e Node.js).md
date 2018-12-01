# Aplicações Back-End (e Node.js)

#### Como os servers e clients funcionam?

Quando nós navegamos num website, nós podemos acabar pedindo algum tipo de dado para usar. Ou seja o browser faz um **request** (pedio) para o server num **socket** (caminho) e o server irá ter que lidar com o pedido dando o **response** (resposta) para o cliente assim que necessário, que é o que nós vemos.<br>

#### Como que fazem isso? (Protocols)

É aqui que os protocols entrão em ação! O protocol basicamente é um conjunto de regras que os dois lados concordam quando estão se comunicando, pegue por exemplo um alemão e italiano que falam inglês, eles não se entendem nas suas línguas primárias, logo o inglês é usado como protocol aqui para que ambos consigão falar entre si.<br>

O Node.js possíbilita a transferência de dados via FTP (File Transfer Protocol) ou seja, se tivermos o Node.js no server nós conseguimos mandar responses para os requests do cliente via javascript.<br>

#### Ports

Quando nós fazemos um request para o server, como que sabemos que o pedido foi o Node.js e não para outro programa rodando no server? O que acontesse é que o Node.js **listen to** (escuta) um número de porta, ou seja se você faz um request para uma porta particular naquele IP e o Node.js está escutando aquela porta, ele irá responder caso contrário não irá. É dessa maneira que fazemos pedidos via Node.js.<br>

Uma porta irá se parecer com isso num número de IP: (NúmeroIP):(NúmeroPorta)<br>

#### Response Header

Quando nós fazemos um request ou response para um server, além dos dados, nós também enviamos os response headers. Assim como a tag `<head>` do html não mostra nada no browser porém define muitas características dela, o response header funciona de maneira parecida mandando características a mais do request/response como o **Content-Type** e o **Status** para o browser saber com quais dados está lidando. (É possível ver essas informações na aba 'network' do inspecionar)<br>

#### Métodos Post e Get



<br><br>

# NPM (Node.js)

> É preciso conhecer o [Node.js](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Node.js.md#nodejs) para entender a aplicação back-end usada aqui.

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