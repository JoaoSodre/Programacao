# AJAX

> Veja antes [Aplicações Back-End](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#aplica%C3%A7%C3%B5es-back-end) para conseguir entender o AJAX.

AJAX (Asynchronous JavaScript & XML) é um conjunto de tecnologias do própio Javascript comum que é usado para enviar e receber dados de maneira [**assíncrona**](https://github.com/JoaoSodre/Programacao/blob/master/Orienta%C3%A7%C3%A3o%20a%20Eventos.md#orienta%C3%A7%C3%A3o-a-eventos), ele não interfere com o conteúdo da página web atual. Apesar de XML está incluso no nome, ele é bastante raro de se usado. Na maior parte das aplicações será usado [JSON](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JSON.md#json) no lugar do XML.<br>

Alguns tipos de fluxos assíncronos em Javascript:

* [High Order Function](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Functional%20Programming.md#high-order-functions-callback-functions)
* [Callbacks](https://github.com/JoaoSodre/Programacao/blob/180d6fd2e9290166fc0cf3892cf0febe12a85b4f/Javascript/Features.md#callbacks)
* [Promises](https://github.com/JoaoSodre/Programacao/blob/180d6fd2e9290166fc0cf3892cf0febe12a85b4f/Javascript/Features.md#promises)

<br><br>

## Como funciona o AJAX?

O Client (Browser) faz um tipo de 'Ajax request' para o server e depois que o server estiver com o request pronto, irá retorna-lo em um tipo de dado no formato de XML, JSON ou texto comum. Esse request pode ser feito pelo objeto `XMLHttpRequest()` do própio browser.

### O objeto XMLHttpRequest (XHR)

O XHR é basicamente uma API no formato de um objeto, com ele é possível ter métodos e atributos que são fornecidos pelo própio ambiente 'Js browser'. Seus métodos conseguem transferir dados do cliente para os servers. Com esse objeto também é possível usar outros [protocols](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#como-que-fazem-isso-protocols) além do HTTP.

> Nem todos os browsers interpretam o XHR da mesma forma, por isso que é recomendado usar o [jQuery](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/jQuery.md#ajax-com-jquery) para solucionar esse problema. O jQuery também é extremamente útil para manipular o HTML DOM da página quando o response estiver completo.

### Usando o XHR

[Referência XHR (Surpreendentemente Curta)](https://www.w3schools.com/js/js_ajax_http.asp)

Habilitando o XHR para fazer os requests.

```js
var xml = new XMLHttpRequest();
```

O objeto possuí vários métodos e atributos. É dessa forma que funcionará.

```js
// Método 'open()' especifica o que o request vai fazer

xml.open('GET', 'algumaapiporai.com', true);

// Primeiro arg: Tipo de request (GET ou POST)
// Segundo  arg: Local do request (URL de um site ou arquivo interno)
// Terceiro arg: Caso queira que seja assíncrono ou não
```

O método 'send()' será quem fará o request, ele deve ser escrito depois que o 'open()' for declarado.

```js
xml.send();
// Caso fosse um POST: 'xml.send(string)'
```

A cada etapa do processamento do request, existe um **número de status** que mostra como o request está sendo processado. Esses status começam no número 0 (request não iniciado) e vão até o 4 (request finalizado e a resposta está pronta).<br>

Para conseguir o response, simplesmente usa-se o seguinte atributo: `xml.response;` 

```js
// Toda vez que o status mudar, essa função será chamada.
xml.onreadystatechange = function() {

    // Número de status
    console.log(xml.readyState);

    if (xml.readyState == 4) console.log(xml.response);
}

// O que os números significam

// 0: request não iniciado
// 1: conexão com o server estabelecida
// 2: request recebido
// 3: processando o request
// 4: request finalizado e a resposta está pronta
```

Agora toda vez que a sequência de métodos do XHR for chamado ele simplesmente irá fazer um request e quando recebe-lo poderá atualizar a página usando o [DOM](https://github.com/JoaoSodre/Programacao/blob/180d6fd2e9290166fc0cf3892cf0febe12a85b4f/Javascript/JavaScript%20DOM.md) dentro da função que é chamada no `onreadstage`, fazendo assim uma aplicação assíncrona que não precisa recarregar a página inteira.

[Usando AJAX com jQuery. (Economiza tempo e é muito mais intuítivo em relação aos métodos)](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/jQuery.md#ajax-com-jquery)