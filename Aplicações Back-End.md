# Aplicações Back-End

* Como os servers e clients funcionam?
* Como que fazem isso? (Protocols)
* Ports
* Header
* Métodos HTTP
* Status HTTP
* Sessions e Cookies
* Buffers e Streams
* Pipes

## Como os servers e clients funcionam?

Quando nós navegamos num website, nós podemos acabar pedindo algum tipo de dado para usar. Ou seja o browser faz um **request** (pedido) para o server num **socket** (caminho) e o server terá que lidar com o pedido dando o **response** (resposta) para o cliente assim que necessário, que é o que nós vemos. Quando o browser entra numa página ele faz um request **http** em algum lugar.

<br><br>

## Como que fazem isso? (Protocols)

É aqui que os protocols (em português 'protocolos') entrão em ação! O protocol basicamente é um conjunto de regras que os dois lados concordam quando estão se comunicando, pegue por exemplo um alemão e italiano que falam inglês, eles não se entendem nas suas línguas primárias, logo o inglês é usado como protocol aqui para que ambos consigão falar entre si.<br>

O Node.js por exemplo possíbilita a transferência de dados via FTP (File Transfer Protocol) ou seja, se tivermos o Node.js no server nós conseguimos mandar responses ou requests de files para o cliente.<br>

A Internet utiliza o protocolo HTTP, que é basicamente um protocolo de perguntas e respostas entre o servidores e os browsers.

<br><br>

## Ports

Quando nós fazemos um request para o server, como que sabemos que o pedido foi feito pelo Node.js e não por outro programa rodando no server? O que acontece é que o Node.js **listen to** (escuta) um número de porta, ou seja se o cliente faz um request para uma porta particular naquele IP, o Node.js estará escutando-a, portanto ele responderá o request feito, caso contrário não irá. É dessa maneira que fazemos requests via server.<br>

Uma porta se parece com isso num número de IP: (NúmeroIP):(NúmeroPorta)

<br><br>

## Header

Quando nós fazemos um request ou response para um server, além dos dados, nós também enviamos os headers. Assim como a tag `<head>` do html, não mostra nada no browser, porém define muitas características dela. O header funciona de maneira parecida mandando características a mais do request/response como o **content-type**, **status** para o browser saber com quais dados está lidando ou até mesmo ver qual tipo de browser o client está usando ou qual o tipo de device. (É possível ver essas informações na aba 'network' do inspecionar caso estiver no google chrome)

<br><br>

## Métodos do Protocolo HTTP

Em uma página html existem diferentes tipos de requests para **auxiliar** com as necessidades da aplicação, os chamados de métodos (ou verbos) do protocolo HTTP, são eles: **Post, Get, Delete e Put**. Esses requests são enviados para o server, que vai analisar o tipo de cada um e trata-los de uma certa forma.

Método Get:

* Parâmetros ficam na Url (Chamados "Query String").
* Usado para fazer buscas no documento (Ex: falar em qual página estamos, se existe algum dado nele).
* Já que ficam na url, sua largura máxima é limitada (Cerca de 2000 caracteres).
* Posse ser "cacheado" (Salva muito esforço das máquinas caso a página não foi mudada).
* Já que os parâmetros ficam na Url, é possível fazer os requests por lá em vez nos inputs do html.
* Não consegue mudar o server.

Método Post:

* Parâmetros ficam no body.
* Usado para adicionar dados.
* Não possui limite de largura (O server pode ser configurado para suportar mais quando necessário).
* Quase nunca são cacheados (Isso por causa que provavelmente está-se alterando/adicionando algum dado do server com ele).
* Consegue mudar algo no server.

Método Put:

* Request para que o server altere algum dado do Database. 

Método Delete:

* Request para que o server delete algum dado do Database.

Basicamente para se usar o mais adequado usa-se a seguinte conclusão: o método POST é quando se queira pegar algum dado da aplicação e usar na mesma e o método POST e quando se queira pegar algum dado e mandar para o server.

Existem outros métodos porém estes são pouco usados pois são muito específicos e até mesmo complexos. Os quatro métodos príncipais conseguem resolver a grande maioria das dificuldades comuns.

<br><br>

## Status HTTP

Os Status HTTP são uma forma de resposta do server a um **request do client**. Essas respostas são dividas em cinco categorias de acordo com o [IANA (Internet Assigned Numbers Authority)](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml):<br>

* 1xx (Informativo): O request foi recebido, dando continuidade ao processo.
* 2xx (Bem sucedido): O request foi recebido, entendido e aceitado.
* 3xx (Redirecionamento): Precisa de procedimentos adicionais para concluir o request.
* 4xx (Erro no Cliente): Syntax invalida ou o cliente não conseguiu lidar com o request. (Muito usado para lidar com sistema de cadastro de logins e de páginas não encontradas)
* 5xx (Erro no Server): O server não conseguiu executar com um request aparentemente válido.

[Lista com os Status HTTPs mais comuns](https://www.smartlabsoftware.com/ref/http-status-codes.htm)

<br><br>

## Cookies e Sessions

* Cookie - Funciona no Server e no Browser.

O cookie é um "pedaço" de informação que é mandado de um site e armazenado no computador do usuário no web browser enquanto estiver navegando. Cookies foram feitos para serem um mecânismo para websites lembrarem de informações (como intens adicionados num carrinho numa loja online) ou para gravar a atividade de navegação do usuário (incluindo cliques em botões específicos, loggins, gravar quais páginas o usuário visitou antes etc). Eles também são usados para preencher forms como nomes, endereços, senhas e números de cartão de credito. 

1. Com o cookie é possível determinar a quantidade de tempo que ele ficará live, desde semanas até anos.
2. Possuí algumas falhas de segurança devido ás comunicações dos header dos requests com o HTTP, é preciso ter cuidado redobrado quando for usa-los. (Recomenda-se encriptações para informações importantes, porém isso irá utilizar o processamento do server).

<br>

* Session - Funciona apenas no Server

Session, assim como os cookies, é usado para guardar informações do usuário, porém apenas no servidor. Por ser usado em server, muitas das vezes acabou ficando em desuso, pois dependendo da quantidade de pessoas que estiverem utilizando o serviço, podem superlotar o servidor, logo tendo maiores chances de cair ou ficar muito caro, pois precisaria de escalar (interligar) vários servidores para lidar com tantos usuários. 

1. O session expira quando o browser é fechado. 
2. O servidor será quem determinará o tempo da Session, ou seja os operadores de infraestrutura são responsáveis por isso.
3. É mais seguro pois as informações estão no server e não trafegam no header do browser.

<br><br>

## Buffers e Streams

Quando nós temos muitos dados para serem transferidos do ponto A ao ponto B, o que podemos fazer é ir transferindo de pouco em pouco, ou seja em vez de esperarmos todos aqueles dados serem processados para irem apenas de uma vez, eles irão ser armazenados em pequenos pedaços de memória que serão enviados assim que completos, esses pedacinhos são chamados de **Buffers**.<br>

Já a **Stream** é o caminho no qual os buffers vão percorrer ao longo do tempo, melhorando assim e muito o desempenho da aplicação (já que não é necessário esperar pelo processo inteiro de uma grande quantidade de dados).<br>

Ambas as funções podem também serem usadas para lidar com requests e responses do cliente, também com o objetivo de **melhorar o desempenho do CPU**.<br>

Tipos de Streams:

* Writable Streams - Permite que o sistema escreva dados a uma stream.
* Readable Streams - Permite que o sistema leia dados de uma stream.
* Duplex - Consegue ler e escrever dados numa stream.

<br><br>

## Pipes

Pelo fato das streams lerem muitos dados e escreve-los em outros lugares, o **Pipe** foi criado para basicamente agilizar esse processo, sem precisar de manualmente configurar a writable stream para que pegue cada buffer envie para algum lugar, com o pipe faz isso fica mais fácil de ler e economiza muitas linha de código. Exemplo: `(ReadStream).pipe(WriteStream);`