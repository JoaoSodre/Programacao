
# Lógica Básica

> [Guia para a linguagem Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide#Chapters)

Conceito | Exemplo (Javascript)
-------- | -----------
| Variável | `var k1 = 5;` <=> `k1 = 5` |
| Constante (Var que <br>não muda) | `const pi = Math.PI;` |
| [Condicionais](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Statements) | if, if else, else, ..., throw etc. |
| Looping | while, for, do..while, for..in. |
| [Operadores Lógicos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Expressions_and_operators) | &equals;&equals;, !&equals;, >, <, && (e), ... (spread), >=, <=, &#124;&#124; (ou).<br>Não esquecer do !== e === |
| Ternário | Substitui a expressão `if()` para apenas uma linha<pre>(Condição) ? (Faça caso for true):(Faça caso for false)<br>( (Se isso for true) && (Faça isso))<br>( (Se isso for false) &#124;&#124; (Faça isso)) </pre> |
| Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2. |
| Hash [(JSON)](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JSON.md#json) | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp. |
| Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;var a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`var nome = getName();` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar. |
| Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return num1 + num2;<br>}</pre> `a1 = calcular(3, 5);` , `a1`-> 8 |
| Utilizando funções<br> nos parametros | <pre>function One(A) {<br>&nbsp;&nbsp;&nbsp;&nbsp; A();<br>}<br>var Two = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp; console.log("Fui chamado de outra função");<br>}<br><br>One(Two);</pre>É necessário seguir a sintaxe `"function expression"` para funcionar |
| Função Recursiva<br>(Função que se chama) | <pre>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Cuidado com essas funções");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>}</pre><br> **Nota**: Sempre pense numa válvula de escape<br> quando estiver produzindo loopings e/ou <br>funções recursivas. <br><br> |
| Orientação a Funções | Termo usado quando se da o ato de separar<br> várias funções em arquivos diferentes (.js)<br> com o objetivo de resolver um problema,<br> usando a OF faz o código ficar mais legivel<br> e organizado. <br><br> |
| [Orientação a Objeto](https://github.com/JoaoSodre/Programacao/blob/master/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#orienta%C3%A7%C3%A3o-a-objeto) | Usado príncipalmente para organização<br> utilizando os conceitos de classes, <br>encapsulamento e objetos (instâncias). <br><br> |
| [Programação Assíncrona](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/AJAX.md#tipos-de-fluxos-ass%C3%ADncronos-em-javascript) | Termo usado para quando o algoritmo<br>não usa a forma síncrona (um de cada vez)<br> para executar os comandos do algoritmo,<br> ou seja de forma **assícrona**. <br><br> |
