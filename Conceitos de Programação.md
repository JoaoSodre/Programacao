# Conceitos de Programação

> Todos comandos em javascript devem ser feitos dentro de um arquivo html e também dentro das tags <br> `<script></script>`.

<!-- Add algoritmo dps -->

## Básico

> **Nota:** não é necessário usar `var` antes de declarar uma variável, porém é sempre recomendável usa-lá para "good practices" e para não se perder, assim como `;` no final de todo comando.

> Toda vez que um texto `nesse estilo` significa **input** e o simbolo " -> " significa **output**

> [Mais Exemplos dos Conceitos e Syntaxes](https://github.com/JoaoSodre/Programacao/blob/master/Mais%20Exemplos%20e%20Syntaxes%20(L%C3%B3gica).md)

Conceito | Exemplo (Javascript)
-------- | -----------
Variável | `var k1 = 5;` <=> `k1 = 5`
Constante (Var que <br>não muda) | `const pi = 3.1415;`
Condicional | If, If Else, Else e Switch (ou case).
Operadores Lógicos | ==, !=, >, <, && (e), >=, <= e &#124;&#124; (ou).
Looping | While e For.
Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2.
Hash | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp.
Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`nome = getName();` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar.
Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;mmm = num1 + num2;<br>&nbsp;&nbsp;&nbsp;&nbsp;return mmm ;<br>}</pre> `a1 = calcular(3, 5);`,`a1`-> 8 
Função Recursiva<br>(Função que se chama) | <pre>var PPP = 10;<br>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (PPP == 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Olá!");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</pre><br> **Nota**: Sempre pense numa valvula de escape<br> quando estiver produzindo loopings e/ou <br>funções recursivas. 

## Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), *encapsulando-os* em **Classes** que possuem o mesmo **contexto**, podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de programação.

Código-Fonte | Orientação Objeto
--- | ---
Variável | Atributo/Propiedades
Função | Método
Modelo | Classe/Objeto

Instancias -> Clones de classes (Podem ser inseridas dentro de uma variável).<br>

<!-- [Exemplo de Orientação Objeto]() -->
<!--##FluxogramaExemplo de Fluxograma:<br><img src="https://raw.githubusercontent.com/JoaoSodre/Programacao/master/Img/Fluxograma.jpg" width="600">-->
