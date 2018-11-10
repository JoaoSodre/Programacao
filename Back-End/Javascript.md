# Javascript (Back-End)

## Node.Js

[Site do Node.js](https://nodejs.org/en/)

A primeira coisa a se fazer depois de ter instalado o Node.js é testar no command-line a versão dele. Caso aparecer a versão dele signifca que foi instalado com sucesso.

```cmd
node --version
```

Com o node instalado é possivel executar arquivos.js direto no computador, sem precisar usar o console do browser ou salvar dentro de tags html. 

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

(o comando 'npm' irá buscar via internet no própio site deles o framework para o download)

<br>

4. Depois para criar a aplicação backend (Com o template ejs) digite esse comando:

```cmd
express install --ejs (NomeDesejado)
```

<br>

Agora, antes de tudo basta conferir o que ele pede no command-line e quando quiser iniciar o server simplesmente:

```cmd
npm start
```

Quando quiser parar: `^C`
