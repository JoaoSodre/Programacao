
# Lógica Básica

> [Guia para a linguagem Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide#Chapters)

Conceito | Exemplo (Javascript)
-------- | -----------
| Variável | `var k1 = 5;` <=> `k1 = 5` |
| Constante (Var que <br>não muda) | `const pi = Math.PI;` |
| [Condicionais](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Statements) | if, if else, else, ..., throw, etc. |
| Looping | while, for, do..while, for..in. |
| [Operadores Lógicos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Expressions_and_operators) | &equals;&equals;, !&equals;, >, <, && (e), ... (spread), >=, <=, &#124;&#124; (ou).<br>Não esquecer do !== e === |
| Ternário | Substitui a expressão `if()` para apenas uma linha<pre>(Condição) ? (Faça caso for true):(Faça caso for false)<br>( (Se isso for true) && (Faça isso))<br>( (Se isso for false) &#124;&#124; (Faça isso)) </pre> |
| Array | `w = [3, 5, 6, 2, 3];` , `w[3]` -> 2. |
| Hash [(JSON)](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JSON.md#json) | `g = {nome:"João", cidade:"Rp", ...};`<br>`g.nome` -> João  ,  `g.cidade` -> Rp. |
| Função (Sem <br>parâmetro) | <pre>function getName() {<br>&nbsp;&nbsp;&nbsp;&nbsp;var a1 = prompt("Qual seu nome?");<br>&nbsp;&nbsp;&nbsp;&nbsp;return a1;<br>}</pre>`var nome = getName();` , `nome` -> Resultado. <br><br> **Nota**: É obrigatório usar o `return` <br> para uma função com **retorno** funcionar. |
| Função (Com <br>parâmetro) | <pre>function calcular(num1, num2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return num1 + num2;<br>}</pre> `a1 = calcular(3, 5);` , `a1`-> 8 |
| Utilizando funções<br> nos parametros | <pre>function One(A) {<br>&nbsp;&nbsp;&nbsp;&nbsp; A();<br>}<br>var Two = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp; console.log("Fui chamado de outra função");<br>}<br><br>One(Two);</pre>É necessário seguir a sintaxe `"function expression"` para funcionar |
| Função Recursiva<br>(Função que se chama) | <pre>function callItSelf() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert("Cuidado com essas funções");<br>&nbsp;&nbsp;&nbsp;&nbsp;callItSelf();<br>}</pre><br> **Nota**: Sempre pense numa válvula de escape<br> quando estiver produzindo loopings e/ou <br>funções recursivas. <br><br> |
| [Função IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) | <pre>(function(){<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Executado no mesmo momento") <br>})();   </pre><br>Esse tipo de função é usado para ser executado<br> apenas uma vez no exato momento em que é<br> declarada. É possível colocar o retorno numa<br> variável mas não é possível chama-lá de volta.<br><br> |
| Orientação a Funções | Termo usado quando se da o ato de separar<br> várias funções em arquivos diferentes (.js)<br> com o objetivo de resolver um problema,<br> usando a OF faz o código ficar mais legivel<br> e organizado. <br><br> |
| [Orientação a Objeto](https://github.com/JoaoSodre/Programacao/blob/master/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#orienta%C3%A7%C3%A3o-a-objeto) | Usado príncipalmente para organização<br> utilizando os conceitos de classes, <br>encapsulamento e objetos (instâncias). <br><br> |
| [Programação Assíncrona](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/AJAX.md#tipos-de-fluxos-ass%C3%ADncronos-em-javascript) | Termo usado para quando o algoritmo<br>não usa a forma síncrona (um de cada vez)<br> para executar os comandos do algoritmo,<br> ou seja de forma **assícrona**. <br><br> |

<br><br>

## Outros Exemplos

#### Função IIFE

```javascript
var Identificacao = (() => { 
    var name = "John";
    return name; 
})();

/* Criará o output imediatamente e 
retorná para a variável */

console.log(Identificacao); // -> John
```

#### Ternário

```javascript
var AAA = 55;
// AAA é maior que 60? Caso sim : Caso não
AAA > 60 ? AAA = "Sou maior" : AAA = "Sou menor";

console.log(AAA);
```

```javascript
function MesmoFooDeSempre(_nome) {
    // id é igual a _nome ? caso não atribua "Carlos"
    var id = _nome || "Carlos";
    return id;
}

console.log(MesmoFooDeSempre()); // -> Carlos
console.log(MesmoFooDeSempre("Daniel")); // -> Daniel
```

#### Array

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

#### Hash (JSON)

```javascript
var g = {};
g.nome = "joao";
g.nota = 8;
```

`console.log(g.nota + 10)` -> `18`   &nbsp;&nbsp;&nbsp;&nbsp;  console.log(g) não funcionaria nesse caso pois é necessário definir o **atributo**.

<br><br>

#### Spread Operator

O Spread Operator (...) é muito utilizado para lidar com situações de arrays no qual os colchetes são um problema como combinar dois arrays e passar dados de um array individualmente. Basicamente o que o Spread Operator faz é **remover os conchetes**

Syntax: `...(Array/Objeto)`

```javascript
function sum(x, y, z) {
  return x + y + z;
}

var numbers = [1, 2, 3];

var soma = sum(...numbers);
// É o mesmo que 'sum(1, 2, 3)'

console.log(soma); // -> 6
```

```javascript
var arr1 = [[1,2,3], [1,2,3]];

var arrReduzido = [...arr1];
// -> [[1,2,3], [1,2,3]]

/*  É necessário os conchetes no arrReduzido pois 
    se não daria erro de syntax depois da execução:
    arrReduzido = [1,2,3], [1,2,3] */
```

Adicionando arrays dentro de outros arrays.

```javascript
// Também pode ser usado o método '.apply()' nesses casos

var carnes = ["bacon", "picanha", "frango"];
var frutas = ["maçã", "laranja", "uva"];
var alimentos = [...carnes, ...frutas]; 
// -> ["bacon", "picanha" ... "laranja", "uva"];

var inicio = [1, 2, 3];
var meio = [4, 5];
var fim = [6, 7, 8];
var ordem = [...inicio, ...meio, ...fim]; 
// -> [1, 2 ... 7, 8]
```

Copiando outros arrays.

```javascript
var arr1 = ["a", "b", "c"];
var arr2 = [...arr1]; 
/* -> ["a", "b", "c"], exatamente como se
fosse na syntax comum (var arr2 = arr1) */

var arr3 = [["a"], ["b"], ["c"]];
var arr4 = [...arr3];
// -> [["a"], ["b"], ["c"]]

var arr5 = ...arr3;
/* -> Error, não é possível a syntax 
'arr5 = ["a"], ["b"], ["c"]' */

var mergeArrays = (...obj) => [...obj]
mergeArrays(arr1, arr2);
// -> [["a", "b", "c"], ["a", "b", "c"]]
```

Também funciona com objetos.

```javascript
var obj1 = { Fst:"Primeiro", Snd:"Segundo", Trd:"Terceiro" };
var obj2 = { Forth:"Quarto", Fifth:"Quinto" };

var obj3 = {...obj1, ...obj2};
// -> { Fst:"Primeiro" ... Fifth:"Quinto" };
```

<br><br>

#### Loopings

Calculo de Tabuada:

```javascript
var deQual = prompt("De qual número você quer saber a tabulada?");
var deVezes = prompt("Até qual número você deseja repetir?");
var daBase = prompt("De qual número você deseja começar?");
var resultados = []; // Caso precise, os resultados vão estar aqui

for (var J = daBase; J <= deVezes; J++) { 
    var multiplicacao = deQual * daBase;
    console.log(deQual + " * " + daBase + " = " + multiplicacao);
    resultados.push(multiplicacao);
    daBase++;
}
```

Looping sem válvula de escape

```javascript
var A = 1;
while (A < 2) {
    console.log("Seu pc vai crashar");
}
```

Do...While, executa direto na primeira vez depois checa se precisa repetir 

```javascript
a = 1;
do {
    console.log(a);
    a++;
} while(a != 5);
```

For...In

```javascript
var arr = ["Danilo", "Camões", 25]; 

// Para cada elemento do array arr,
// ou seja o total de elementos
for (var x in arr) {

    // Mostre os valores do
    console.log(arr[x])

    /* Automáticamente x vai transformar em x++, e 
    repetirá o processo até terminar o array */
}
```

Nota: O Javascript reconhece automáticamente o valor de um atributo do hash, sem precisar de colocar o nome do mesmo.

```javascript
var pessoa = {nome1:"Danilo", sobrenome:"Camões", idade:25}; 

for (var x in pessoa) {

    /* Funcionará da mesma forma que o array, sem precisar
    explicificar o atributo, como 'idade' */

    console.log(pessoa[x]);
}
```