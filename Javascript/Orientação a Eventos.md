# Orientação a Eventos

> Também pode ser referenciado como 'Programação Assíncrona'

A orientação a eventos, diferente de programas tradicionais que seguem um fluxo de controle padronizado (como se fosse uma fila), o controle de fluxo de programas orientados a evento são guiados por indicações externas, chamados de eventos.<br><br> Ou seja, em vez de seguir um comando após o outro, um de cada vez, na programação **assíncrona** ele executa vários comandos ao mesmo tempo, todos eles dando o **call back** quando finalizados.<br><br>

Exemplo (Javascript):<br>

> [Syntax do setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

<pre>
// Método que executa uma função depois de um intervalo de tempo (Milisegundo)
setTimeout(function(){ alert ("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(function(){ alert ("Função2: Fui executado em segundo!"); }, 1000); 
</pre>

Mesmo a Função1 seja executada antes, a Função2 que irá aparecer primeiro, ou seja quem for mais rápido/ irá aparecer primeiro, isso é programação assíncrona
