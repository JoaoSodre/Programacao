## AJAX

AJAX (Asynchronous JavaScript & XML) é um conjunto de tecnologias do própio Javascript comum que é usado para enviar e receber dados de maneira[**assíncrona**](https://github.com/JoaoSodre/Programacao/blob/master/Orienta%C3%A7%C3%A3o%20a%20Eventos.md#orienta%C3%A7%C3%A3o-a-eventos), ele não interfere com o conteúdo da página web atual. Apesar de XML está includo no nome, ele é bastante raro de se usado. Na maior parte das aplicações irá ser usado [JSON](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JSON.md#json) no lugar do XML.

Exemplos:

> O método 'setTimeout()' é uma das funções assíncronas do javascript, por isso é possível passar uma função como parâmetro (callback).

> O símbolo "=>" é uma arrow function, mais detalhes aqui: [Arrow Functions](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

```javascript
setTimeout(() => {alert("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(() => {alert("Função2: Fui executado em segundo!"); }, 1000); 
```

Mesmo a Função1 seja executada antes, a Função2 que aparecerá primeiro, ou seja quem for mais rápido aparecerá primeiro, isso é programação assíncrona.<br><br>

Syntax para função que receberá o CALLBACK: `(NomeFunção)(function() { ... } )`

```javascript
function A(dados) {
    /* Quando terminar os comandos da função, ele 
    vai mandar a string como se fosse um return */
    dados("Escolha o que você vai mandar de volta aqui");
}

function B() {}

/* Executando a função, quando ele finalizar
irá executar o que está dentro do parâmetro */

// A string será recebida na variável 'dados'
A((dados) => {
    setTimeout(() => { console.log(dados); }, 2000);
});

B(console.log("Finalizei em Primeiro"));
```

Mudando o tempo do `setTimeout()`, nota-se claramente que a ordem não importa na programação assíncrona, apenas importa o retorno do callback quando a função for executada. <br><br>
