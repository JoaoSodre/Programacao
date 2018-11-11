# Javascript (Back-End)

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

É um framework que ajuda a criar aplicações back-end a base Node.js. Com o Express é possível iniciar um servidor usando a própia máquina.<br><br>

Para instalar o express basta seguir os passos abaixo:

1. Instale o Node.js

2. Crie uma pasta onde você quer deixar os arquivos da sua **aplicação**  e entre nela atravez do CMD.<br>
(Nome de aplicação de Exemplo: "Meu app")

3. No cmd digite esse comando para instalar o express:

```cmd
npm install express-generator -g
```

(O comando 'npm' irá buscar via internet no própio site deles o framework para o download)

<br>

4. Depois para criar a aplicação backend (Com o template ejs) digite esse comando:

```cmd
express install --ejs (NomeDesejado)
```

(O teamplate ejs nós possibilitar criar um html com javascript [dinâmico]())

<br><br>

Agora, antes de tudo basta conferir o que se pede no command-line que estará finalizada a aplicação!<br>
Fonte: [Express application generator](https://expressjs.com/en/starter/generator.html)

<br>

Quando quiser iniciar (Levantar) o servidor basta simplesmente:

```cmd
npm start   ou   node ./bin/www    
```

(Nota: É **necessário** estar no diretório onde está o arquivo **package.json**)<br><br>

Para entrar na página digite no browser: `http://localhost:(NúmeroDaPorta)/` ou `http://127.0.0.1:(NúmeroDaPorta)/`<br>
Por padrão o número é '3000'<br><br>

Quando quiser desligar o servidor (Derrubar): `ctrl + c`
