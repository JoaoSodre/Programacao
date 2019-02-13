# AJAX

> Veja antes [Aplicações Back-End](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#aplica%C3%A7%C3%B5es-back-end) para conseguir entender o AJAX.

AJAX (Asynchronous JavaScript & XML) é um conjunto de tecnologias do própio Javascript comum que é usado para enviar e receber dados de maneira [**assíncrona**](https://github.com/JoaoSodre/Programacao/blob/master/Orienta%C3%A7%C3%A3o%20a%20Eventos.md#orienta%C3%A7%C3%A3o-a-eventos), ele não interfere com o conteúdo da página web atual. Apesar de XML está incluso no nome, ele é bastante raro de se usado. Na maior parte das aplicações será usado [JSON](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JSON.md#json) no lugar do XML.<br>

Alguns tipos de fluxos assíncronos em Javascript:

* [High Order Function](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Functional%20Programming.md#high-order-functions-callback-functions)----
* [Callbacks]()
* [Promises]()

<br><br>

## Como funciona o AJAX?

O Client (Browser) faz um tipo de 'Ajax request' para o server e depois que ele fazer o que tem que fazer com o request irá retornar um tipo de dado no formato de XML, JSON ou texto comum. Esse request pode ser feito pelo objeto `XMLHttpRequest()` do própio browser.

### O objeto XMLHttpRequest (XHR)

O XHR é basicamente uma API no formato de um objeto, com ele é possível ter métodos e atributos que são fornecidos pelo própio ambiente 'Js browser'. Seus métodos conseguem transferir dados do cliente para o server e também com esse objeto é possível usar outros [protocols](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#como-que-fazem-isso-protocols) além do HTTP.

> Nem todos os browsers interpretam o XHR da mesma forma, por isso que o [jQuery](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/jQuery.md#ajax-com-jquery) é usado para solucionar esse problema.

### Usando o XHR

