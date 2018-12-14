# Aplicações Back-End

#### Como os servers e clients funcionam?

Quando nós navegamos num website, nós podemos acabar pedindo algum tipo de dado para usar. Ou seja o browser faz um **request** (pedido) para o server num **socket** (caminho) e o server terá que lidar com o pedido dando o **response** (resposta) para o cliente assim que necessário, que é o que nós vemos.

<br><br>

#### Como que fazem isso? (Protocols)

É aqui que os protocols entrão em ação! O protocol basicamente é um conjunto de regras que os dois lados concordam quando estão se comunicando, pegue por exemplo um alemão e italiano que falam inglês, eles não se entendem nas suas línguas primárias, logo o inglês é usado como protocol aqui para que ambos consigão falar entre si.<br>

O Node.js possíbilita a transferência de dados via FTP (File Transfer Protocol) ou seja, se tivermos o Node.js no server nós conseguimos mandar responses para os requests do cliente via javascript.

<br><br>

#### Ports

Quando nós fazemos um request para o server, como que sabemos que o pedido foi o Node.js e não para outro programa rodando no server? O que acontesse é que o Node.js **listen to** (escuta) um número de porta, ou seja se você faz um request para uma porta particular naquele IP e o Node.js está escutando aquela porta, ele responderá caso contrário não irá. É dessa maneira que fazemos pedidos via Node.js.<br>

Uma porta se parece com isso num número de IP: (NúmeroIP):(NúmeroPorta)

<br><br>

#### Response Header

Quando nós fazemos um request ou response para um server, além dos dados, nós também enviamos os response headers. Assim como a tag `<head>` do html não mostra nada no browser porém define muitas características dela, o response header funciona de maneira parecida mandando características a mais do request/response como o **Content-Type** e o **Status** para o browser saber com quais dados está lidando. (É possível ver essas informações na aba 'network' do inspecionar)

<br><br>

#### Métodos HTTP.

Em uma página html existem diferentes tipos de requests para lidar com a necessidade da aplicação, são chamados de métodos (ou verbos) HTTP, são eles: **Post, Get, Delete e Put**. Esses requests são enviados para o server que vai analisar o tipo de cada um e trata-los de uma certa forma.

Método Get:

* Parâmetros ficam na Url (Chamados "Query String").
* Usado para fazer buscas no documento (Ex: falar em qual página estamos, se existe algum dado nele).
* Já que ficam na url, sua largura máxima é limitada (Cerca de 2000 caracteres).
* Posse ser "cacheado" (Salva muito esforço das máquinas caso a página não foi mudada).
* Já que os parâmetros ficam na Url, é possível fazer os requests por lá em vez nos inputs.
* Não consegue mudar o server.

Método Post:

* Parâmetros ficam no body.
* Usado para fazer mudanças em dados.
* Não possui limite de largura (O server pode ser configurado para suportar mais quando necessário).
* Quase nunca são cacheados (Isso por causa que provavelmente está-se alterando algum dado do server com ele).
* Consegue mudar algo no server.

Basicamente para se usar o mais adequado usa-se a seguinte conclusão: o método POST é quando se queira pegar algum dado da aplicação e usar na mesma e o método POST e quando se queira pegar algum dado e mandar para o server.<br>

Syntax para pegar os dados via métodos GET ou POST (Node.js):

GET: `request.query`.<br>
POST: `request.body`.<br>

(Ambos são objetos)

<br><br>


#### Buffers e Streams

Quando nós temos muitos dados para serem transferidos do ponto A ao ponto B, o que podemos fazer é ir transferindo de pouco em pouco, ou seja em vez de esperarmos todos aqueles dados serem processados, eles irão ser armazenados em pequenos pedaços de memória que serão enviados assim que completos, isso é um **Buffer**.<br>

Já a **Stream** é o caminho no qual os buffers vão percorrer ao longo do tempo, melhorando assim e muito o desempenho da aplicação (já que não é necessário esperar pelo processo inteiro de uma grande quantidade de dados).<br>

Ambas as funções podem também serem usadas para lidar com requests e responses do cliente, também com o objetivo de melhorar o desempenho.<br>

Tipos de Streams:

* Writable Streams - Permite que o Node.js escreva dados a uma stream.
* Readable Streams - Permite que o Node.js leia dados de uma stream.
* Duplex - Consegue ler e escrever dados numa stream.

<br><br>

#### Pipes

Pelo fato das streams lerem muitos dados e escreve-los em outros lugares, o ***Pipe** foi criado para basicamente agilizar esse processo, sem precisar de manualmente configurar a writable stream para que pegue cada buffer envie para algum lugar, com o pipe faz isso fica mais fácil de ler e economiza muitas linha de código. Exemplo: `(ReadStream).pipe(destino);`

<br><br>
