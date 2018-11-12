# Javascript (Back-End)

* [Node.js]()
  * [Express]()
  * [Aplicação backend com Express]()

## Node.js

[Site do Node.js](https://nodejs.org/en/)

O Node.Js foi desenvolvido para permitir usar a linguagem Javascript nos servers, ele desenvolve métodos como `request()` que facilita muito dos processos de back-end. Para instalar apenas siga os passos do instalador no site oficial.<br><br>

Depois que instalado primeira coisa a se fazer depois é testar no **command-line** a versão dele. Caso aparecer a versão dele signifca que foi instalado com sucesso.

```cmd
node --version
```

Com o node instalado também é possivel executar arquivos.js direto no computador, sem precisar usar o console do browser ou salvar dentro de tags html.

```cmd
node (Arquivo.js)
```

[Referência de comandos Node.js (Cmd)](https://nodejs.org/dist/latest-v10.x/docs/api/cli.html)

### Express

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

### Aplicação backend com Express

Dentro dos vários diretórios que o Express criou, um deles foi o 'public' que vai ser tudo o que vai ser os arquivos **estáticos** que serão exibidos no site, ou seja arquivos como imagens, stylesheets e funções. Ela também vai ser a pasta referência para armazenar arquivos separados (Includes).<br>
Ex: http://localhost:3000/stylesheets/style.css <br>
Já a pasta 'views' é onde irá ficar o html de suas páginas como index, erros, rotas novas, etc.
<br>
