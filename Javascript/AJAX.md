# AJAX

> Veja antes [Aplicações Back-End](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#aplica%C3%A7%C3%B5es-back-end) para conseguir entender o AJAX

AJAX (Asynchronous JavaScript & XML) é um conjunto de tecnologias do própio Javascript comum que é usado para enviar e receber dados de maneira[**assíncrona**](https://github.com/JoaoSodre/Programacao/blo'b/master/Orienta%C3%A7%C3%A3o%20a%20Eventos.md#orienta%C3%A7%C3%A3o-a-eventos), ele não interfere com o conteúdo da página web atual. Apesar de XML está includo no nome, ele é bastante raro de se usado. Na maior parte das aplicações irá ser usado [JSON](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JSON.md#json) no lugar do XML.

## Tipos de fluxos assíncronos em Javascript

### [High-Order Function]():

Passando uma segunda função pelos parâmetros e executando ela na primeira função.

```javascript
const Fun1 = fun => {

    // 'setTimeout()' é uma função assíncrona 
    setTimeout(() => {
        console.log("Função Fun1 chamada, bloqueando o fluxo");
    }, 10);

    fun();
}

// Ou seja, não precisa de esperar a Fun1() por completo
const Fun2 = () => console.log("Função Fun2 chamada de forma assíncrona");

Fun1(Fun2);
```

> Nota: O símbolo "=>" é uma arrow function, mais detalhes aqui: [Arrow Functions](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

<br><br>

### Callbacks:

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

<br>

### Promises

As `Promises` funcionam a base de dois parâmetros que são chamado de `resolve` e `reject`. O resolve é usado para quando algo no algoritmo deu certo e o reject para quando deu errado.

Syntax: `new Promise((res, rej) => { ... }`

```javascript
var a = true;

new Promise((res, rej) => {
    if(a){
        res("Algo deu certo");
    } else { 
        rej("Algo deu errado");
    }
});
// -> Promise {<resolved>: "Algo deu certo"}
```

Para de fato conseguir usar os dados que vão nos objetos `res` e `rej` é necessário utilizar o `.then()` e o `.catch()` sendo o primeiro para o resolve e o segundo para o reject.

Syntax: `promise.then/catch( parametros => { ... })`

```javascript
var a = true;

var promise1 = new Promise((res, rej) => {
    if(a){
        res("Algo deu certo");
    } else { 
        rej("Algo deu errado");
    }
});

/* Chamando a Promise (Nesse caso não
se usa parenteses apenas o nome) */

promise1
    .then((msg) => {
        console.log(msg);
        // -> "Algo deu certo"
    })
	.catch((msg) => {
        console.log(msg);
        // -> "Algo deu errado"
	});
```

> Só é possível passar um parâmetro pelo .res()/.catch(), caso precise de dois ou mais será necessário um objeto ou um array.

<br>

Demonstração de como a Promise consegue ser assíncrona

```javascript
var promise1 = new Promise((res) => {
    res();
});

console.log("Antes");

promise1
    .then(() => {
        console.log("Durante");
    });

console.log("Depois");

/* Espera-se "Antes Durante Depois" 
mas o que aparace no console é 
"Antes Depois Durante" */
```

É possível usar vários `.then()` em sequência apenas utilizando um returno de outra Promise dentro do própio .then()

```javascript
var A = new Promise((res) => { res(); });

A
    .then(() => {
        console.log("Primeiro .then()");
        return new Promise((res) => { res(); });
    })
    .then(() => {
        console.log("Segundo .then()");
        // ...
    });
    
// ----- Outra Meneira de escrever o mesmo código -----

var A = new Promise((res) => { res(); });

var Fun1 = () => {
    console.log("Primeiro .then()");
    return new Promise((res) => { res(); });
}

var Fun2 = () => {
    console.log("Segundo .then()");
    // ...
}

A
    .then(Fun1)
    .then(Fun2);
```

```javascript
var A = () => {
    return new Promise((res,rej) => {
        console.log("Promise A executada");
        res();
    });
}

var B = () => {
    return new Promise((res,rej) => {
        console.log("Promise B executada");
        res();
    });
}

var C = () => {
    return new Promise((res,rej) => {
        console.log("Promise C executada");
        res();
    });
}

A()
    .then(B)
    .then(C);
```

É possível integra-los com o Node.js também

```javascript
const fs = require('fs');

var ReadFile = (_path) => {
    return new Promise((res,rej) => {
        fs.readFile(_path, 'utf8', (err,data) => {
            if (err) {
                rej(err);
            } 
            else {
                res(data);
            }
        });
    });
}

ReadFile("./texto.txt")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```

<br><br>

## Como o AJAX funciona?

O Client (Browser) faz um tipo de 'Ajax request' para o server e depois que ele fazer o que tem que fazer com o request irá retornar um tipo de dado no formato de XML, JSON ou texto comum. Esse request pode ser feito pelo objeto `XMLHttpRequest()` do própio browser.

## O objeto XMLHttpRequest (XHR)

O XHR é basicamente uma API no formato de um objeto, com ele é possível ter métodos e atributos que são fornecidos pelo própio ambiente Js browser. Seus métodos conseguem transferir dados do Cliente para o server e com esse objeto é possível usar outros [protocols](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#como-que-fazem-isso-protocols) além do HTTP.