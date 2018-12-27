# Orientação a Eventos

> Também pode ser referenciado como 'Programação Assíncrona'

A orientação a eventos, diferente de programas tradicionais que seguem um fluxo de controle padronizado (como se fosse uma fila),  programas orientados a evento são guiados por indicações externas, chamados de eventos.<br><br> Ou seja, em vez de seguir um comando após o outro, um de cada vez (da maneira **blocante**), na programação assíncrona ele executa vários comandos ao mesmo tempo, todos eles dando um **callback** (Ação) quando finalizados.<br><br>

Exemplo (Em Javascript):

> O método 'setTimeout()' é uma das funções assíncronas do javascript, por isso é possível passar uma função como parâmetro (callback).

```javascript
setTimeout(() => {alert("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(() => {alert("Função2: Fui executado em segundo!"); }, 1000); 
```

Mesmo a Função1 seja executada antes, a Função2 que aparecerá primeiro, ou seja quem for mais rápido aparecerá primeiro, isso é programação assíncrona.<br><br>

Outro Exemplo:

```javascript
function A(cb){

    // *Código Blocante*

    // Callback
    cb();
}

// Função (nos parâmetros) que irá executar quando receber o callback
A(() => {
    console.log("Executando depois do callback");
});

/* Enquando ele executa, outros comandos iram ser executados
em sequência, sem ter que esperar o A() */
```

Mudando o tempo do `setTimeout()`, nota-se claramente que a ordem não importa na programação assíncrona, apenas importa o retorno do callback quando a função for executada.




