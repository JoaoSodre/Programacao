# Features

* [Template Strings]()
* [Arrow Function]()
* [Callbacks]()
* [Promises]()
* [Função IIFE]()
* [Ternário]()
* [Definindo Argumentos]()
* [Generators]()
* [Spread Operator]()
* [Currying]()

### Template Strings

Além das aspas duplas e simples existe agora uma nova maneira de fazer strings: Usando as **Crases**

```javascript
var idadeCao = 2;
var nomeCao = "Jesse";

/*  
	Com os acentros graves é possível adicionar
	as variáveis de uma nova forma mais fácil.
	Syntax: ${variável}
*/

const frase = `Meu cão "${nomeCao}" possui ${idadeCao * 7} anos de idade.`;
```

### Arrow Function

A **Arrow Function** é simplesmente uma maneira mais curta de escrever uma função.

```javascript
// Função tradicional
const A = function(x, y) {
	let mult = x * y;
	return mult;
};

// Arrow Function
const A = (x, y) => {
	let mult = x * y;
	return mult;
};
```

Alem desse feature, com a arrow function não é preciso de parênteses no caso de um argumento nos parâmetros, não é preciso tanto de chaves no caso de uma linha de retorno como também não é preciso da keyword 'return' na mesma situação (implicit return), fazendo com que o código fique drásticamente reduzido.

```javascript
// Função tradicional (47 caracteres)
const Triplo = function(x) {
	return x * 3;
};

// Arrow Function (25 caracteres)
const Triplo = x => x * 3;
```

Porém caso a função não precise de um `return` e mesmo assim só tenha um comando irá ser necessário as chaves.

```javascript
const A = () => {
	console.log("Nesse caso será necessário as chaves");
};

// Se não a arrow function entende como
// 'return console.log("...")'
```

Para retornar um objeto usando arrow functions, usa-se os parênteses.

```javascript
// Função tradicional
const Quadrado = function(n) {
	return { quadrado: n * n };
};

// Arrow Function
const Quadrado = n => ({ quadrado: n * n });
```

**NÃO UTILIZE A ARROW FUNCTION QUANDO HOUVER `this` DENTRO DO ESCOPO**

```javascript
// Orientação Objeto: Forma Antiga
var Classe = _name => {
	this.name = _name;
};

var Objeto = new Classe("Terry");
// -> Error
```

Isso ocore pois quando a keyword `this` está dentro de uma arrow function, a mesma irá herdar o pai daquele escopo e não o própio escopo, no exemplo assima se houvesse um método `console.log(this)` dentro da classe ele iria mostrar o objeto `windown` (caso fosse em algum browser).

<br><br>

### Callbacks

Assim como no Js Comum, os callbacks são basicamente funções que são passadas atravez de um parâmetro quando a função príncipal for chamada. Sendo assim a função callback pode ser chamada a qualquer momento apenas executando o parâmetro do construtor.

```javascript
const One = cb => {

    // *Algum Código Blocante*

    // Callback
    cb();
}

// Função (nos parâmetros) que irá executar quando receber o callback
One(() => {
    console.log("Executando depois do callback");
});
```

Também funciona com parâmetros

```javascript
const One = cb => {

    // *Código Blocante*

    var msg1 = "Mandando o callback";
    var msg2 = "De forma Assíncrona";
    cb(msg1, msg2);
}

One((m1, m2) => {
    console.log(`Mensagens recebidas:\n${m1}\n${m2}`);
});
```

Também é possível fazer vários callbacks

```javascript
function One(cb1, cb2, cb3){
    cb1("Mensagem 1");
    setTimeout(() => {
        cb2("Mensagem 2");
        setTimeout(() => {
            cb3("Mensagem 3");
        }, 1250);
    }, 2250);
}

One(msg => {
    console.log(`${msg}`);
}, msg => {
    console.log(`${msg}`);
}, msg => {
    console.log(`${msg}`);
});
```

<br><br>

### Promises

As `Promises` funcionam a base de dois parâmetros que são chamado de `resolve` e `reject`. O resolve é usado para quando algo no algoritmo deu certo e o reject para quando deu errado.

Syntax: `new Promise((res, rej) => { ... }`

```javascript
var a = true;

new Promise((res, rej) => {
    if(a){
        res("Algo deu certo");
    } else { 
        rej("Algo deu errado");
    }
});
// -> Promise {<resolved>: "Algo deu certo"}
```

Para de fato conseguir usar os dados que vão nos objetos `res` e `rej` é necessário utilizar o `.then()` e o `.catch()` sendo o primeiro para o resolve e o segundo para o reject.

Syntax: `promise.then/catch( parâmetros => { ... })`

```javascript
var a = true;

var promise1 = new Promise((res, rej) => {
    if(a){
        res("Algo deu certo");
    } else { 
        rej("Algo deu errado");
    }
});

/* Chamando a Promise (Nesse caso não
se usa parenteses apenas o nome) */

promise1
    .then(msg => {
        console.log(msg);
        // -> "Algo deu certo"
    })
    .catch(msg => {
        console.log(msg);
        // -> "Algo deu errado"
    });
```

> Só é possível passar um parâmetro pelo .res()/.catch(), caso precise de dois ou mais será necessário um objeto ou um array.

<br>

Demonstração de como a Promise consegue ser assíncrona

```javascript
var promise1 = new Promise(res => {
    res();
});

console.log("Antes");

promise1
    .then(() => {
        console.log("Durante");
    });

console.log("Depois");

/* Espera-se "Antes Durante Depois" 
mas o que aparace no console é 
"Antes Depois Durante" */
```

É possível usar vários `.then()` em sequência apenas utilizando um returno de outra Promise dentro do própio .then()

```javascript
var A = new Promise(res => { res(); });

A
    .then(() => {
        console.log("Primeiro .then()");
        return new Promise(res => { res(); });
    })
    .then(() => {
        console.log("Segundo .then()");
        // ...
    });
    
// ----- Outra Meneira de escrever o mesmo código -----

var A = new Promise(res => { res(); });

var Fun1 = () => {
    console.log("Primeiro .then()");
    return new Promise(res => { res(); });
}

var Fun2 = () => {
    console.log("Segundo .then()");
    // ...
}

A
    .then(Fun1)
    .then(Fun2);
```

```javascript
var A = () => {
    return new Promise((res,rej) => {
        console.log("Promise A executada");
        res();
    });
}

var B = () => {
    return new Promise((res,rej) => {
        console.log("Promise B executada");
        res();
    });
}

var C = () => {
    return new Promise((res,rej) => {
        console.log("Promise C executada");
        res();
    });
}

A()
    .then(B)
    .then(C);
```

É possível integra-los com o Node.js também

```javascript
const fs = require('fs');

var ReadFile = _path => {
    return new Promise((res,rej) => {
        fs.readFile(_path, 'utf8', (err,data) => {
            if (err) {
                rej(err);
            } 
            else {
                res(data);
            }
        });
    });
}

ReadFile("./texto.txt")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
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

/* A é maior que 60 ? Caso sim : Caso não */

A > 60 
? (A = "Sou maior") 
: (A = "Sou menor");

console.log(A); // -> "Sou Menor"
```

Também é possível usar funções nas respostas

```javascript
function Mostrar(n) {
	console.log(n);
}

A = {};
typeof A === "object" 
? Mostrar("Objeto") 
: Mostrar("Não Objeto");
```

```javascript
var CriarID = nome => {
	// id é igual a nome? caso não ('||') atribua "Carlos"
	let id = nome || "Carlos";
	return id;
};

console.log(CriarID()); // -> Carlos
console.log(CriarID("Daniel")); // -> Daniel
```

<br><br>

### Definindo Argumentos

É possível definir o valor dos argumentos na definição da função, removendo a necessidade da syntax `a = b || c`.<br>

Exemplo de função comum:

```javascript
// v -> Valor pago no produto
// Tr -> Taxa para a revenda (Porcentagem)
const CalcularLucro = (v, Tr) => v * Tr

var Tenis = CalcularLucro(90, 1.25);
console.log(Tenis); //-> 112.5
```

Com o argumento definido é possível reescreve-lo quando for fazer a chamada da função.

```javascript
const CalcularLucro = (v, Tr = 1.25) => v * Tr

var Tenis = CalcularLucro(90, 1.5);
var Camiseta = CalcularLucro(90);

console.log(Tenis); //-> 135
console.log(Camiseta); //-> 112.5
```

<br><br>

### Generators

Generators se parecem muito como uma função normal mas na verdade eles não executam todo o código em uma única chamada como na função normal, o que eles fazem é pausar entre intervalos de códigos e esperar até que eu permitir atraves de outro comando que eles continuem. Ou seja os generators são basicamente uma função com checkpoints. Eles são representados por `function* () {}`. e retornam um objeto com dois parâmetros `value` e `done` toda vez que pararem no `yield` (Checkpoint), sendo o value o valor que está no yield e done um booleano indicando de já acabaram os yields.

```javascript
function* GeneratorFunc() {
    yield "Primeiro Yield";
    yield "Segundo Yield";
    console.log("Indo para o terceiro Yield");
    yield "Terceiro Yield";
}

var gen = GeneratorFunc();

console.log(gen.next().value); // Primeiro Yield
console.log(gen.next()); // {value: "Segundo Yield", done: false}
console.log(gen.next().done); // "Indo para o terceiro Yield" false;
console.log(gen.next().done); // true;
```

<br><br>

### Spread Operator

O Spread Operator (...) é muito utilizado para lidar com situações de arrays no qual os colchetes são um problema como combinar dois arrays e passar dados de um array individualmente. Basicamente o que o Spread Operator faz é **remover os colchetes**.

Syntax: `...(Array/Objeto)`

```javascript
var sum = (x, y, z) => x + y + z;
var numbers = [1, 2, 3];

var soma = sum(...numbers);
// É o mesmo que 'sum(1, 2, 3)'

console.log(soma); // -> 6
```

```javascript
var arr1 = [[1, 2, 3], [1, 2, 3]];

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
var obj1 = { Fst: "Primeiro", Snd: "Segundo", Trd: "Terceiro" };
var obj2 = { Forth: "Quarto", Fifth: "Quinto" };

var obj3 = { ...obj1, ...obj2 };
// -> { Fst:"Primeiro" ... Fifth:"Quinto" };
```

<br><br>

### Currying

**Currying** é o feature usado quando uma função retorna outra função dentro dela, fazendo assim que quando for chama-la tenha que colocar outro parênteses na mesma linha.

```javascript
var Curry = function() {
	return function() {
		console.log("Currying!");
	};
};

Curry()();
// -> Currying!
```

Sendo assim com o currying não é preciso usar todos os parâmetros em um só parênteses, eles irão ser "distribuidos" nos outros em seguida.

```javascript
var Curry = function(a) {
	return function(b) {
		return function(c) {
			console.log(a + b + c);
		};
	};
};
Curry("Não é preciso ")("todos os valores ")("em apenas um dos parênteses");
```

Com as Arrows Functions o currying fica extremamente simplificado (No começo é bastante confuso de entender, com o tempo fica mais clara a lógica).

```javascript
// Função tradicional (141 caracteres)
// Arrow function (49 caracteres)

var Curry = a => b => c => console.log(a + b + c);
Curry("Não é preciso ")("todos os valores ")("em apenas um dos parênteses");
```
