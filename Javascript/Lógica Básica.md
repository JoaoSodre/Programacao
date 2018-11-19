
# Lógica Básica

Conceito | Exemplo (Javascript)
-------- | -----------
| Variável | `var k1 = 5;` <=> `k1 = 5` |
| Constante (Var que <br>não muda) | `const pi = Math.PI;` |
| [Condicionais](https://www.w3schools.com/jsref/jsref_statements.asp) | if, if else, else, switch, throw, etc. |
| Looping | while, for, do..while e for..in. |
| [Operadores Lógicos](https://www.w3schools.com/jsref/jsref_operators.asp) | &equals;&equals;, !&equals;, >, <, && (e), >=, <=, &#124;&#124; (ou).<br>Não esquecer do !== e === |
| Ternário | Substitui a expressão `if()` para apenas uma linha<pre>(Condição) ? (Faça caso for true):(Faça caso for false)<br>( (Se isso For true) && (Faça isso))<br>( (Se isso for false) &#124;&#124; (Faça isso)) </pre> |
| Array <br>[(Métodos)](https://www.w3schools.com/jsref/jsref_obj_array.asp) | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2. |
| Hash (Json) | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp. |
| Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;var a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`var nome = getName();` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar. |
| Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return num1 + num2;<br>}</pre> `a1 = calcular(3, 5);` , `a1`-> 8 |
| Utilizando funções<br> nos parametros | <pre>function One(A) {<br>&nbsp;&nbsp;&nbsp;&nbsp; A();<br>}<br>var Two = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp; console.log("Fui chamado de outra função");<br>}<br><br>One(Two);</pre>É necessário seguir a sintaxe `"function expression"` para funcionar |
| Função Recursiva<br>(Função que se chama) | <pre>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Cuidado com essas funções");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</pre><br> **Nota**: Sempre pense numa válvula de escape<br> quando estiver produzindo loopings e/ou <br>funções recursivas.<br><br> |
| [Função IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Declara<br>e em seguida executa) | <pre>(function(){<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Executado no mesmo momento") <br>})();   </pre> |
| Orientação a Funções | Termo usado quando se da o ato de separar<br> várias funções em arquivos diferentes (.js)<br> com o objetivo de resolver um problema,<br> usando a OF faz o código ficar mais legivel<br> e organizado. |
| [Orientação a Objeto](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#orienta%C3%A7%C3%A3o-a-objeto) | Usado príncipalmente para organização<br> utilizando os conceitos de classes, <br>encapsulamento e objetos (instâncias). |

<br><br>

## Outros Exemplos

## Função IIFE

```javascript
var identificacao = (function () { 
    var name = "John"; 
    return name; 
})();

/* Cria o output imediatamente, e também 
não usa parenteses no final da variável */

console.log(identificacao); // -> John
```

## Ternário

```javascript
var AAA = 55;
// AAA é maior que 60? Caso sim : Caso não
AAA > 60 ? AAA = "Sou maior" : AAA = "Sou menor";

console.log(AAA);
```

```javascript
function MesmoFooDeSempre(_nome) {
    // _nome é igual a _nome ? caso não atribua "James"
    _nome = _nome || "James";
    return _nome;
}

console.log(MesmoFooDeSempre()); // -> James
console.log(MesmoFooDeSempre("Daniel")); // -> Daniel
```

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

## Hash (JSON)

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

For...In

```javascript
var pessoa = ["Danilo", "Camões", 25]; 

// Para cada elemento do objeto pessoa
for (var x in pessoa) {

    // Mostre os valores de 'pessoa'
    console.log(pessoa[x])

    /* Automáticamente x vai transformar em x++, e depois repete
    o processo até terminar o array */
}
```

Nota: O Javascript reconhece automáticamente o valor de um atributo do hash, sem precisar de colocar o nome do mesmo.

```javascript
var pessoa = {nome1:"Danilo", sobrenome:"Camões", idade:25}; 

for (var x in pessoa) {

    /* Irá funcionar da mesma forma que o array, sem precisar
    explicificar o atributo, como 'idade' */

    console.log(pessoa[x]);
}
```