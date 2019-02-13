# Function Programming

Na **Programação Funcional** funções são tratadas como valores assim como strings e números. Com esse feature o código fica muito mais limpo, com menos bugs e mais fácil de entender.

```javascript
var A = x => x * 3
var B = A;

console.log(B(30)); // -> 90
```

<br><br>

### Funções puras

Existem pelo menos dois critérios que devem ser compridos para que seja considerada uma função pura.

1. São puras aquelas que sempre vão retornar o mesmo **y** dado um mesmo **x**.

```javascript
const Pura = x => {
    return x * x 
}

Pura(2) // -> 4
Pura(2) // -> 4
Pura(2) // -> 4
```

```javascript
const NaoPura = x => {
    return x * Math.random()
}

Pura(2) // -> Valor aleatório
Pura(2) // -> Valor aleatório
Pura(2) // -> Valor aleatório
```

2. São puras aquelas que não geram *side effects* (Ou seja alteram algo fora do escopo/contexto).

```javascript
// Função Não-Pura
var contador = 0;

const Contar = () => {
	contador += 1;
	return contador
} 

Contar(); // 1
Contar(); // 2
Contar(); // 3

console.log(contador); // -> 3
```

```js
// Função Pura
var contador = 0;

const Contar = () => contador + 1

Contar(); // 1
Contar(); // 1
Contar(); // 1

console.log(contador); // -> 1
```

Em resumo funções puras trabalham apenas com as variáveis dos parâmetros e não geram nenhum efeito fora do seu escopo, fazendo assim com que o código fique com mais legibilidade e com menos bugs.

<br><br>

## High Order Functions (Callback Functions)

São basicamente funções que levam uma ou várias outras funções como parâmetros.

```javascript
var A = func => func()
var B = () => console.log("That's how High Order Functions work")

A(B);
```

As high order functions podem ser usadas de forma assíncrona.

```javascript
const Fun1 = fun => {

	// 'setTimeout()' é um método assíncrono 
	setTimeout(() => {
		console.log("Função 'Fun1' chamada, bloqueando o fluxo");
	}, 10);
	fun();
}

// Ou seja, não precisa de esperar a Fun1() por completo
const Fun2 = () => console.log("Função 'Fun2' chamada de forma assíncrona");

Fun1(Fun2);
```

A grande maioria dos [métodos para arrays](https://www.w3schools.com/jsref/jsref_obj_array.asp) utilizam High Order Functions nos seus callbacks. 

```javascript
var arr = [
	{ name: "James", specie: "dog" },
	{ name: "Karen", specie: "dog" },
	{ name: "Josh",  specie: "cat" },
];

/*  
    O método filter 'limpa' o array e depois adiciona 
    os items caso o return para o mesmo for true.

    É obrigatório o uso de uma função no parâmetro dele
    para que seja possível utiliza-lo (Os items do array
    irão para essa função para seguirem uma lógica depois)    
*/

var dogs = arr.filter(intemsArrayAqui => intemsArrayAqui.specie === "dog");
var notDogs = arr.filter(intemsArrayAqui => intemsArrayAqui.specie !== "dog");
var karen = arr.filter(intemsArrayAqui => intemsArrayAqui.name === "Karen");

console.log(dogs); 
// -> [{ name: "James", specie: "dog" }, { name: "Karen", specie: "dog" }]

console.log(notDogs); 
// -> [{ name: "Josh", specie: "cat" }]

console.log(karen);
// -> [{ name: "Karen", specie: "dog" }]
```

Suponhamos que precisamos dar a média dos alunos abaixo, poderiamos fazer isso com o map.

```javascript
var classGrades = [
	{ name: "Clarky", grades: { semester1:6, semester2:9, semester3:8, semester4:9 } },
	{ name: "James",  grades: { semester1:1, semester2:6, semester3:2, semester4:2 } },
	{ name: "Ryu",    grades: { semester1:9, semester2:2, semester3:3, semester4:7 } }
]

/*  
    O método map faz alguma alteração 
	em TODOS os itens do array e os adiciona
	em um novo array, assim como o filter 
*/

var averages = classGrades.map(x => {
	let n = 0;
	n += x.grades.semester1;
	n += x.grades.semester2;
	n += x.grades.semester3;
	n += x.grades.semester4;
	n = (n / Object.keys(x.grades).length);
	return { name: x.name, averadeGrade: n }
});

console.log(averages);
/* -> [ { name: 'Clarky', averadeGrade: 8 },
        { name: 'James',  averadeGrade: 2.75 },
        { name: 'Ryu',    averadeGrade: 5.25 } ] */

```

Supondo que tenha-se uma lista com o total de gastos em restaurantes, com o reduce é possívelé possível somar todos os values e os deixa-lo em apenas uma variável.

```javascript
var gastos = [
	{ valor:105 },
	{ valor:37 },
	{ valor:87 },
	{ valor:24 }
];   

/*
    O que o reduce está fazendo é basicamente somando 
    todos os valores e colocando na variável totalGastos, 
    por isso que não há chaves nem colchetes na variável
*/

var totalGastos = 
    gastos.reduce((totalGastos, x) => totalGastos + x.valor , 0)
// O valor inicial do totalGastos é declarado depois do escopo da função ('0')

console.log(totalGastos); // -> 253
```

Com o reduce é possível fazer um *spread operator interno*, ou seja remover os colchetes de todos os values de dentro de um único array.

```javascript
var arr = [[7, 1], [2, 7], [8], [5, 2, 7, 2]]

var arraySemColchetesInternos =
	arr.reduce((acumulador, x) => acumulador.concat(x), []);

console.log(arraySemColchetesInternos);
// -> [ 7, 1, 2, 7, 8, 5, 2, 7, 2 ]
```