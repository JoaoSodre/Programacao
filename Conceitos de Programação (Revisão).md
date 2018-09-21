# Conceitos de Programação (Revisão)

> Todos comandos em javascript devem ser feitos dentro de um arquivo html e também dentro das tags <br> `<script></script>`.

<!-- Add algoritmo dps -->

## Básico

> **Nota:** não é necessário usar `var` antes de declarar uma variável, porém é sempre recomendável usa-lá para "good practices" e para não se perder, assim como `;` no final de todo comando.

Conceito | Exemplo (Javascript)
-------- | -----------
Variável | `var k1 = 5` <=> `k1 = 5`
Constante (Var que <br>não muda) | `const pi = 3.1415`
Condicional | If, If Else, Else e Switch (ou case).
Operadores Lógicos | ==, !=, >, <, && (e), >=, <= e &#124;&#124; (ou).
Looping | While e For.
Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2.
Hash | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp.
Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`nome = getName()` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar.
Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;k1 = (num1 * 2)<br>&nbsp;&nbsp;&nbsp;&nbsp;k2 = (num2 * 3)<br>&nbsp;&nbsp;&nbsp;&nbsp;b1 = (k1 + k2) / 7<br>&nbsp;&nbsp;&nbsp;&nbsp;return b1;<br>}</pre> `a1 = calcular(3, 5)`-> 3 , `a1`-> 3 
Função Recursiva<br>(Função que se chama) | <pre>var jkjk = 10;<br>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (jkjk == 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Olá!");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}

## Fluxograma

Exemplo de Fluxograma:<br>

<img src="https://raw.githubusercontent.com/JoaoSodre/Programacao/master/Img/Fluxograma.jpg" width="600">
