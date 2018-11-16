# Lógica Básica

> Toda vez que um texto `nesse estilo` significa **input** e o simbolo " -> " significa **output**

Conceito | Exemplo (Javascript)
-------- | -----------
Variável | `var k1 = 5;` <=> `k1 = 5`
Constante (Var que <br>não muda) | `const pi = 3.1415;`
Condicional | If, If Else, Else e Switch (ou case).
Operadores Lógicos | ==, !=, >, <, && (e), >=, <= e &#124;&#124; (ou).
Looping | While, For, Do..While e Foreach.
Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2.
Hash (Objeto) | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp.
Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;var a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`var nome = getName();` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar.
Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;var mmm = num1 + num2;<br>&nbsp;&nbsp;&nbsp;&nbsp;return mmm ;<br>}</pre> `a1 = calcular(3, 5);`,`a1`-> 8 
| Utilizando funções<br> nos parametros | <pre>function One(A) {<br>&nbsp;&nbsp;&nbsp;&nbsp; A();<br>}<br>var Two = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp; console.log("Fui chamado de outra função");<br>}<br><br>One(Two);<br><br>É necessário seguir a sintaxe <br>`function expression` para funcionar </pre> |
Função Recursiva<br>(Função que se chama) | <pre>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Cuidado com essas funções");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</pre><br> **Nota**: Sempre pense numa válvula de escape<br> quando estiver produzindo loopings e/ou <br>funções recursivas.<br><br>
Orientação a Funções | Termo usado quando se da o ato de separar<br> várias funções em arquivos diferentes (.js)<br> com o objetivo de resolver um problema,<br> usando a OF faz o código ficar mais legivel<br> e organizado.
[Orientação a Objeto](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#orienta%C3%A7%C3%A3o-a-objeto) | Usado príncipalmente para organização<br> utilizando os conceitos de classes, <br>encapsulamento e objetos (instâncias).

<br><br>

## Outros Exemplos

## Array

>Lembrete: Em programação a contagem de collections começará em **0**

```javascript
var notas = []; // Criando o array sem atributos.
var media = ((nota1 + nota2)/(notas.length));

var nota1 = 8;
var nota2 = 6;

notas.push(nota1); // Ficara no slot 0 do array.
notas.push(nota2); // Ficara no slot 1 do array.
```

`console.log(notas)` -> `8,6` (Posições dos valores no Array em ordem)
`console.log(media)` -> `7`

<br><br>

## Hash

```javascript
var g = {};
g.nome = "joao";
g.nota = 8;
```

`console.log(g.nota + 10)` -> `18`   &nbsp;&nbsp;&nbsp;&nbsp;  console.log(g) não funcionaria nesse caso pois é necessário definir o **atributo**.

<br><br>

## Loopings

Calculo de Tabuada:

```javascript
var deQual = prompt("De qual número você quer saber a tabulada?");
var deVezes = prompt("Até qual número você deseja repetir?");
var daBase = prompt("De qual número você deseja começar?");
var resultados = []; // Caso precise, os resultados vão estar aqui

for (var J = daBase; J <= deVezes; J++) 
{ 
    var multiplicacao = deQual * daBase;
    console.log(deQual + " * " + daBase + " = " + multiplicacao);
    resultados.push(multiplicacao);
    daBase++;
}
```

Looping sem válvula de escape

```javascript
var A = 1;
while (A < 2)
{
    console.log("Seu pc vai crashar");
}
```

Do...While

```javascript
a = 1;
do 
{
    console.log(a);
    a++;
}
while(a <= 5);
```

Foreach (Exemplo em **C#**):

```csharp
int[] A = { 0, 2, 5, 8, 93 };

// Para cada 'inteiro' em A (Ou seja 5)
foreach (int x in A)
{
    // Faça isso
    Console.WriteLine("Olá");
}

------------- Outro exemplo -------------

foreach (int x in A)
{
    // Irá Mostrar todos os números do Array
    Console.WriteLine(x);
}
```