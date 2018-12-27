# AJAX

> Veja antes [Aplicações Back-End](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#aplica%C3%A7%C3%B5es-back-end) para conseguir entender o AJAX

AJAX (Asynchronous JavaScript & XML) é um conjunto de tecnologias do própio Javascript comum que é usado para enviar e receber dados de maneira[**assíncrona**](https://github.com/JoaoSodre/Programacao/blob/master/Orienta%C3%A7%C3%A3o%20a%20Eventos.md#orienta%C3%A7%C3%A3o-a-eventos), ele não interfere com o conteúdo da página web atual. Apesar de XML está includo no nome, ele é bastante raro de se usado. Na maior parte das aplicações irá ser usado [JSON](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JSON.md#json) no lugar do XML.

**Javascript Assíncrono**

Tipos de fluxos assíncronos:<br><br>

Js Comum:

Passando uma segunda função pelos parâmetros e executando ela na primeira função.

```javascript
function One(fun2){

    // 'setTimeout()' é uma função assíncrona 
    setTimeout(() => {
        console.log("Função One chamada, bloqueando o fluxo");
    }, 3500);

    fun2();
}

function Two(){
    console.log("Função Two chamada de forma assíncrona");
    // Ou seja, não precisa de esperar a One() por completo
}

One(Two);
```

> Nota: O símbolo "=>" é uma arrow function, mais detalhes aqui: [Arrow Functions](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

<br><br>

Callbacks:

Assim como no Js Comum, os callbacks são basicamente funções que são passadas atravez de um parâmetro quando a função príncipal for chamada. Sendo assim a função callback pode ser chamada a qualquer momento apenas executando o parâmetro do construtor.

```javascript
function One(cb){

    // *Algum Código Blocante*

    // Callback
    cb();
}

// Função (nos parâmetros) que irá executar quando receber o callback
One(() => {
    console.log("Executando depois do callback");
});
```

Também funciona com parâmetros

```javascript
function One(cb) {

    // *Código Blocante*

    var msg1 = "Mandando o callback";
    var msg2 = "De forma Assíncrona";
    cb(msg1, msg2);
}

One((m1, m2) => {
    console.log(`Mensagens recebidas:\n${m1}\n${m2}`);
});
```

Também é possível fazer vários callbacks

```javascript
function One(cb1, cb2, cb3){
    cb1("Mensagem 1");
    setTimeout(() => {
        cb2("Mensagem 2");
        setTimeout(() => {
            cb3("Mensagem 3");
        }, 1250);
    }, 2250);
}

One(msg => {
    console.log(`${msg}`);
}, msg => {
    console.log(`${msg}`);
}, msg => {
    console.log(`${msg}`);
});
```

<br><br>

Promises


**Como o AJAX funciona?**

O Client (Browser) faz um tipo de 'Ajax request' para o server e depois que ele fazer o que tem que fazer com o request irá retornar um tipo de dado no formato de XML, JSON ou texto comum. Esse request pode ser feito pelo objeto `XMLHttpRequest()` do própio browser.

**O objeto XMLHttpRequest (XHR)**

O XHR é basicamente uma API no formato de um objeto, com ele é possível ter métodos e atributos que são fornecidos pelo própio ambiente Js browser. Seus métodos conseguem transferir dados do Cliente para o server e com esse objeto é possível usar outros [protocols](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#como-que-fazem-isso-protocols) além do HTTP.