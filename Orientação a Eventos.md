# Orientação a Eventos

> Também pode ser referenciado como 'Programação Assíncrona'

A orientação a eventos, diferente de programas tradicionais que seguem um fluxo de controle padronizado (como se fosse uma fila). Programas orientados a evento são guiados por indicações externas chamadas de eventos.<br><br> Ou seja, em vez de seguir um comando após o outro, um de cada vez (da maneira **blocante**), na programação assíncrona ele executa vários comandos ao mesmo tempo, todos eles dando um **callback** (Ação) quando finalizados.<br><br>

Exemplo (Em Javascript):

```javascript
setTimeout(() => { console.log("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(() => { console.log("Função2: Fui executado em segundo!"); }, 1000); 
```

Mesmo que um dos setTimeout seja executado antes, pelo fato dele ser assíncrono não significa que será o primeiro a mandar a mensagem.<br><br>

Outro Exemplo:

```javascript
function A(cb){

    // *Código Blocante*
    setTimeout(() => { 

    // Callback
        cb();
    }, 10);
}

console.log("Antes");

// Função (nos parâmetros) que irá executar quando receber o callback
A(function() {
    console.log("Durante");
});

console.log("Depois");
```

Espera-se a sequência "Antes Durante Depois" porém o que aparece no console é "Antes Depois Durante" isso se deve por causa do `A()` ser assíncrono.