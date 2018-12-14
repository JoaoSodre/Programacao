# Orientação a Eventos

> Também pode ser referenciado como 'Programação Assíncrona'

A orientação a eventos, diferente de programas tradicionais que seguem um fluxo de controle padronizado (como se fosse uma fila),  programas orientados a evento são guiados por indicações externas, chamados de eventos.<br><br> Ou seja, em vez de seguir um comando após o outro, um de cada vez (da maneira **blocante**), na programação assíncrona ele executa vários comandos ao mesmo tempo, todos eles dando um **callback** (Ação) quando finalizados.<br><br>

Exemplos em Javascript:

O método 'setTimeout()' é uma das funções assíncronas do javascript, por isso é possível passar uma função como parâmetro (callback).

```javascript
setTimeout(function(){ alert("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(function(){ alert("Função2: Fui executado em segundo!"); }, 1000); 
```

Mesmo a Função1 seja executada antes, a Função2 que aparecerá primeiro, ou seja quem for mais rápido aparecerá primeiro, isso é programação assíncrona.<br><br>

Syntax para função que receberá o CALLBACK: `(NomeFunção)(function() { ... } )`

```javascript
function A(dados) {
    /* Quando terminar os comandos da função, 
    ele vai mandar a string como return */
    dados("Escolha o que você vai mandar de volta aqui");
}

function B() {}

/* Executando a função, quando ele finalizar
irá executar o que está dentro do parâmetro */

// A string será recebida na variável 'dados'
A(function (dados) {
    setTimeout(function(){ console.log(dados); }, 2000);
});

B(console.log("Finalizei em Primeiro"));
```

Mudando o tempo do `setTimeout()`, nota-se claramente que a ordem não importa na programação assíncrona, apenas importa o retorno do callback quando a função for executada. <br><br>