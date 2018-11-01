# Lógica Básica

> Toda vez que um texto `nesse estilo` significa **input** e o simbolo " -> " significa **output**

> Em Html, para chamar os scripts de outros arquivos, basta eles estarem salvos em `.js` e serem referenciados atravez das tags `<script src="url"></script>`

Conceito | Exemplo (Javascript)
-------- | -----------
Variável | `var k1 = 5;` <=> `k1 = 5`
Constante (Var que <br>não muda) | `const pi = 3.1415;`
Condicional | If, If Else, Else e Switch (ou case).
Operadores Lógicos | ==, !=, >, <, && (e), >=, <= e &#124;&#124; (ou).
Looping | While, For, Do..While e Foreach.
Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2.
Hash | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp.
Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;var a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`var nome = getName();` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar.
Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;var mmm = num1 + num2;<br>&nbsp;&nbsp;&nbsp;&nbsp;return mmm ;<br>}</pre> `a1 = calcular(3, 5);`,`a1`-> 8 
Função Recursiva<br>(Função que se chama) | <pre>var PPP = 10;<br>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (PPP == 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Seu pc vai crashar!!!");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</pre><br> **Nota**: Sempre pense numa válvula de escape<br> quando estiver produzindo loopings e/ou <br>funções recursivas.<br><br>
[Orientação Objeto](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#orienta%C3%A7%C3%A3o-a-objeto) | É usado basicamente para organização,<br> utilizando o método de classes, <br>encapsulamento e objetos.

<br><br>

# Mais Exemplos

## Array

>Lembrete: Em programação a contagem de collection começará em **0**

```javascript
var media = 8;
var nota1 = 7;

var w = []; // Criando o array sem atributos.

w.push(5);   // Ficara no slot 0 do array.
w.push(media); // Ficara no slot 1 do array.
w.push(nota1); // Ficara no slot 2 do array.
```

`alert(w)` -> `5,8,7` (Posições dos valores no Array em ordem)

<br><br>

## Hash

```javascript
var g = {};
g.nome = "joao";
g.nota = 8;
```

`alert(g.nota + 10)` -> `18`   &nbsp;&nbsp;&nbsp;&nbsp;  alert(g) não funcionaria nesse caso pois é necessário definir o **atributo**.

<br><br>

## Loopings

Calculo de Tabuada:

```javascript
var deQual = prompt("De qual número você quer saber a tabulada?");
var deVezes = prompt("Até qual número você deseja repetir?");
var daBase = prompt("De qual número você deseja começar?");
var resultados = []; // Caso precise, os resultados estaram aqui

for (var J = daBase; J <= deVezes; J++) 
{ 
    var multiplicacao = deQual * daBase;
    alert(deQual + " * " + daBase + " = " + multiplicacao);
    resultados.push(multiplicacao);
    daBase++;
}
```

Looping sem válvula de escape

```javascript
var A = 1;
while (A < 2)
{
    alert("Seu pc vai crashar");
}
```

Do...While

```javascript
a = 1;
do 
{
    alert(a)
    a++
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

<br><br>
