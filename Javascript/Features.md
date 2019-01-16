# Features

* Arrow Function
* Função IIFE
* Ternário
* Spread Operator
* Currying
 

### Arrow Function

A **Arrow Function** é simplesmente uma maneira mais curta de escrever uma função.

```javascript
// Função tradicional
var A = function(x, y) {
  let mult = x * y
  return mult;
} 

// Arrow Function
var A = (x,y) => {
    let mult = x * y
    return mult;
}
```

Alem desse feature, com a arrow function não é preciso de parênteses no caso de um argumento nos parâmetros, não é preciso tanto de chaves no caso de uma linha de retorno como também não é preciso da keyword 'return' na mesma situação (implicit return), fazendo com que o código fique drásticamente reduzido.

```javascript
// Função tradicional (45 caracteres)
var Triplo = function(x) {
  return x * 3
}

// Arrow Function (23 caracteres)
var Triplo = x => x * 3
```

Porém caso a função não precise de um `return` e mesmo assim só tenha um comando irá ser necessário as chaves.

```javascript
var A = () => { console.log("Nesse caso será necessário as chaves") }

// Se não a arrow function entende como
// 'return console.log("...")'
```

Para retornar um objeto usando arrow functions, usa-se os parênteses.

```javascript
// Função tradicional
var Quadrado = function(n) {
  return {quadrado: n * n}
}

// Arrow Function
var Quadrado = n => ({quadrado: n * n})
```

**NÃO UTILIZE A ARROW FUNCTION QUANDO HOUVER `this` DENTRO DO ESCOPO**

```javascript
AA = () => {
  this
}
```

<br><br>

### [Função IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

A **Função IIFE** é usado para ser executada apenas uma vez no exato momento em que é declarada. Ela é muito utilizada em frameworks e packages.

```javascript
(() => console.log("Executada na declaração"))();
```

É possível colocar o retorno numa variável mas não é possível chama-lá de volta.

```javascript
var Identificacao = (() => { 
    var name = "John";
    return name; 
})();

/* Criará o output imediatamente e 
retorná para a variável */

console.log(Identificacao); // -> John
console.log(name); // -> Error
```

<br><br>

### Ternário

```javascript
var A = 55;

// A é maior que 60 ? Caso sim : Caso não

A > 60 
? A = "Sou maior"; 
: A = "Sou menor";

console.log(A);
```

```javascript
var Ex = nome => {

    // id é igual a nome? caso não ('||') atribua "Carlos"
    let id = nome || "Carlos";
    return id;
}

console.log(Ex()); // -> Carlos
console.log(Ex("Daniel")); // -> Daniel
```

<br><br>

### Spread Operator

O Spread Operator (...) é muito utilizado para lidar com situações de arrays no qual os colchetes são um problema como combinar dois arrays e passar dados de um array individualmente. Basicamente o que o Spread Operator faz é **remover os colchetes**.

Syntax: `...(Array/Objeto)`

```javascript
var sum = (x, y, z) => x + y + z
var numbers = [1, 2, 3];

var soma = sum(...numbers);
// É o mesmo que 'sum(1, 2, 3)'

console.log(soma); // -> 6
```

```javascript
var arr1 = [[1,2,3], [1,2,3]];

var arrReduzido = [...arr1];
// -> [[1,2,3], [1,2,3]]

/*  É necessário os colchetes no arrReduzido pois 
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

### Currying 

**Currying** é o feature usado quando uma função retorna outra função dentro dela, fazendo assim que quando for chama-la tenha que colocar outro parênteses na mesma linha. 

```javascript
var Curry = function () {
    return function () {
        console.log("Currying!")
    }
}

Curry()()
// -> Currying!
```

Sendo assim com o currying não é preciso usar todos os parâmetros em um só parênteses, eles irão ser "distribuidos" nos outros em seguida.

```javascript
var Curry = function (a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c)
        }
    }
}
Curry("Não é preciso ")("todos os valores ")("em apenas um dos parênteses");
```

Com as Arrows Functions o currying fica extremamente simplificado (No começo é bastante confuso de entender, com o tempo fica mais clara a lógica).

```javascript
// Função tradicional (141 caracteres)
// Arrow function (49 caracteres)

var Curry = a => b => c => console.log(a + b + c)
Curry("Não é preciso ")("todos os valores ")("em apenas um dos parênteses");
```