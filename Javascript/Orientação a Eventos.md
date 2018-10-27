# Orientação a Eventos

> Também pode ser referenciado como 'Programação Assíncrona'

A orientação a eventos, diferente de programas tradicionais que seguem um fluxo de controle padronizado (como se fosse uma fila), o controle de fluxo de programas orientados a evento são guiados por indicações externas, chamados de eventos.<br><br> Ou seja, em vez de seguir um comando após o outro, um de cada vez, na programação **assíncrona** ele executa vários comandos ao mesmo tempo, todos eles dando o **call back** quando finalizados.<br><br>

Exemplo (Javascript):<br>

> [Syntax do setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

<pre>
// Método que executa uma função depois de um intervalo de tempo (Milisegundo)
setTimeout(function(){ alert("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(function(){ alert("Função2: Fui executado em segundo!"); }, 1000); 
</pre>

Mesmo a Função1 seja executada antes, a Função2 que irá aparecer primeiro, ou seja quem for mais rápido/ irá aparecer primeiro, isso é programação assíncrona.<br><br>

Outro exemplo:

<pre>
function A(callback) {
    callback.call (null, "Apareci em primeiro!");
}

function B(callback) {
    callback.call(null, "Apareci em segundo!");
}

// A função B vai ser executada exetamente 1 segundo depois da A
B(function(callback) { 
    setTimeout(function(){ alert(callback); }, 2000);
});

A(function(callback) {
    setTimeout(function(){ alert(callback); }, 1000);
});
</pre>

Apesar da 'B()' ter sido chamada primeiro, foi a 'A()' quem apareceu antes, logo na programação assíncrona independente de quem foi executado primeiro, quem irá fazer o `callback` sempre será o mais rápido.
