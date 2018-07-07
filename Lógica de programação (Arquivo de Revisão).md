# Lógica de programação (Arquivo de Revisão)

> **Nota**: Todos comandos em javascript devem ser feitos dentro de um arquivo html e também dentro das tags <br> `<script></script>`.

## Básico

Conceito | Exemplo (Javascript)
-------- | -----------
Variável | `var k1 = 5` <=> `k1 = 5`
Condicional | If, If Else, Else e [Switch (ou case)](https://youtu.be/csGFRErhmAU?t=33m2s).
[Operadores Lógicos](https://www.youtube.com/watch?v=8yeJf1Uq4J0&index=8&list=PLEdPHGYbHhle3ZM7xZaEnPF7RF3d2sUJU) | ==, !=, >, <, && (e), >=, <= e Double <br> pipe (ou).
[Looping](https://www.youtube.com/watch?v=cmf0M-u1EMU&index=11&list=PLEdPHGYbHhle3ZM7xZaEnPF7RF3d2sUJU) | While e For.
Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2.
Hash | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp.
[Função](https://youtu.be/uoVmrI24M90) (Sem parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`a1 = getName()` , `a1` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para a função funcionar.
Função (com parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;k1 = (num1 * 2)<br>&nbsp;&nbsp;&nbsp;&nbsp;k2 = (num2 * 3)<br>&nbsp;&nbsp;&nbsp;&nbsp;b1 = (k1 + k2) / 7<br>&nbsp;&nbsp;&nbsp;&nbsp;return b1;<br>}</pre> `a1 = calcular(3, 5)`-> 3 , `a1`-> 3 
