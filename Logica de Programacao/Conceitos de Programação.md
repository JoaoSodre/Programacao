# Conceitos de Programação

> Todos comandos em javascript devem ser feitos dentro de um arquivo html e também dentro das tags <br> `<script></script>`.

<!-- Add algoritmo dps -->

## Básico

> **Nota:** não é necessário usar `var` antes de declarar uma variável, porém é sempre recomendável usa-lá para "good practices" e para não se perder, assim como `;` no final de todo comando.

> Toda vez que um texto `nesse estilo` significa **input** e o simbolo " -> " significa **output**

> [Mais Exemplos dos Conceitos e Syntaxes](https://github.com/JoaoSodre/Programacao/blob/master/Logica%20de%20Programacao/Conceitos%20de%20Programa%C3%A7%C3%A3o.md#b%C3%A1sico)

Conceito | Exemplo (Javascript)
-------- | -----------
Variável | `var k1 = 5;` <=> `k1 = 5`
Constante (Var que <br>não muda) | `const pi = 3.1415;`
Condicional | If, If Else, Else e Switch (ou case).
Operadores Lógicos | ==, !=, >, <, && (e), >=, <= e &#124;&#124; (ou).
Looping | While, For, Do..While e Foreach.
Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2.
Hash | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp.
Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`nome = getName();` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar.
Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;mmm = num1 + num2;<br>&nbsp;&nbsp;&nbsp;&nbsp;return mmm ;<br>}</pre> `a1 = calcular(3, 5);`,`a1`-> 8 
Função Recursiva<br>(Função que se chama) | <pre>var PPP = 10;<br>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (PPP == 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Olá!");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</pre><br> **Nota**: Sempre pense numa valvula de escape<br> quando estiver produzindo loopings e/ou <br>funções recursivas. 

# Mais Exemplos e Syntaxes

> Lembrete: Em programação a contagem de collection começará em **0** na maioria das vezes


## Array

<pre>
media = 8
nota1 = 7

w = [] // Criando o array sem atributos.

w.push(5)     // Ficara no slot 0 do array.
w.push(media) // Ficara no slot 1 do array.
w.push(nota1) // Ficara no slot 2 do array.
</pre>

`alert(w)` -> `5,8,7` (Posições dos valores no Array em ordem)

## Hash

<pre>
g = {}
g.nome = "joao";
g.nota = 8;
</pre>

`alert(g.nota + 10)` -> `18`   &nbsp;&nbsp;&nbsp;&nbsp;  alert(g) não funcionaria nesse caso pois é necessário definir o **atributo**.
