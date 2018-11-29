# Orientação a Eventos

> Também pode ser referenciado como 'Programação Assíncrona'

A orientação a eventos, diferente de programas tradicionais que seguem um fluxo de controle padronizado (como se fosse uma fila),  programas orientados a evento são guiados por indicações externas, chamados de eventos.<br><br> Ou seja, em vez de seguir um comando após o outro, um de cada vez (da maneira **blocante**), na programação assíncrona ele executa vários comandos ao mesmo tempo, todos eles dando um **callback** (Ação) quando finalizados.<br><br>

Exemplos em Javascript:

> [Syntax do setTimeout( )](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```javascript
// Método que executa uma função depois de um intervalo de tempo (Milisegundo)
setTimeout(function(){ alert("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(function(){ alert("Função2: Fui executado em segundo!"); }, 1000); 
```

Mesmo a Função1 seja executada antes, a Função2 que irá aparecer primeiro, ou seja quem for mais rápido irá aparecer primeiro, isso é programação assíncrona.<br><br>

Syntax para função que irá receber o CALLBACK: `(NomeFunção)(function() { ... } )`

```javascript
function A(callback) {
    // Quando a resposta estiver pronta, ele vai dar esse CALLBACK
    callback("Apareci em primeiro!");
}

function B(callback) {
    callback("Apareci em segundo!");
}

B(function (callback) {
    // Quando estiver pronto, irá executar o "alert()"
    setTimeout(function(){ alert(callback); }, 2000);
});

A(function (callback) {
    setTimeout(function(){ alert(callback); }, 1000);
});
```

Mudando o tempo do `setTimeout()`, nota-se claramente que a ordem não importa na programação assíncrona, apenas importa o retorno do callback quando a função for executada. <br><br>