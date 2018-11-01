<!-- Pq o 'return' n funcionaria no metodo da classe pai e do filho ao mesmo tempo? ## Polimorfismo -->

**Nota: Os exemplos foram feitos em sua grande maioria em Javascript, mas os conceitos se aplicam para qualquer linguagem que trabalha com orientação a objeto.**

# Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), encapsulando-os em **Classes** que possuem o mesmo contexto podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de organização. Classes são modelos que estão disponiveis para serem copiados (instanciados) depois.<br><br>
Nomenclaturas:

Código Estruturado | Orientação Objeto
--- | ---
Variável | Atributo/Propiedades
Função | Método/Ação
Classe | Objeto/Instância

Atributo -> Mesmo que *propiedade simples* (Serve tanto como get quanto set).<br>
Instâncias -> Clones de classes (Objetos), que serão inseridas dentro de uma variável.<br>

* [Introdução](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#introdu%C3%A7%C3%A3o)
* [Construtores](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#construtores)
* [Métodos/Atributos de Instância](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#m%C3%A9todosatributos-de-inst%C3%A2ncia)
* [Métodos/Atributos de Classe ou Estático](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#m%C3%A9todosatributos-de-classe-ou-est%C3%A1tico)
* [Métodos/Atributos Públicos e Privados](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#m%C3%A9todosatributos-p%C3%BAblicos-e-privados)
* [Herança](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#heran%C3%A7a)
* [Polimorfismo](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orientação%20a%20Objeto.md#polimorfismo)
* [Classe de Interface](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#classe-de-interface)
* [Classe Abstrata](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#classe-abstrata)
* [Classe Singleton](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#classe-singleton)

<br>

## Introdução 

Como: | Syntax
--- | ---
Criar uma classe | `var + (NomeDaClasse) = function () {  }` 
Criar uma Propiedade<br>(Dentro da Classe) | `this.(NomeDaPropiedade) = (Valor);` 
Criar um Método<br>(Dentro da Classe) | `this.(NomeDoMétodo) = function () {  }` 
Instanciar uma classe<br>(Criar um objeto) | `var + (NomeDaInstância) = new (NomeDaClasse)();` 
Colocar valor nos<br> atributos das instancias<br>(Sem construtor) | `(NomeDaInstância).(NomeDoAtributo) = (Valor);`

<br>

```javascript
var Clientes = function() // Objeto "Cliente" 
{ 
	// Propiedade "nome"
	this.nome = ""; 

	// Método "Mostrar"
	this.Mostrar = function() 
	{
		alert("Nome: " + this.nome);
	}
}

------- Outra forma de fazer -------

function Clientes()
{
	this.nome = "";

	this.Mostrar = function()
	{
		alert("Nome: " + this.nome);
	}
}
```

```javascript
var A = new Clientes(); // Instanciando a classe "Cliente"
```

```javascript
A.nome = "João"; // Atribuindo valor ao atributo do objeto
```

<br>
<br>

## Construtores

São usados basicamente para economizar linhas de código, são acessados por deio dos parâmetros do objeto (previamente) e da instância.

```javascript
var Casas = function(_casa1, _casa2)
{
	this.casa1 = _casa1;
	this.casa2 = _casa2;
}
```

```javascript
var C = new Casas("Sobrado", "Triplex"); // Construtor 
```

O uso de **HASH** pode facilitar ainda mais na organização, ele possibilita colocar **nomes** nos contrutores.

```javascript
var Casas = function(_casas, _tamanhos)
{
	this.casa1 = _casas.casa1;
	this.casa2 = _casas.casa2;
	this.tamanho1 = _tamanhos.tamanho1;
	this.tamanho2 = _tamanhos.tamanho2;
}
```

```javascript
var C = new Casas({casa1:"Sobrado" , casa2:"Triplex"} , {tamanho1:"Grande" , tamanho2:"Pequena"});
```

<br>
<br>

## Métodos/Atributos de Instância

São usados apenas para **UMA** instância.

```javascript
var A = function(_lugar)
{
	this.lugar = _lugar;
}

var B = new A("São Paulo");
var C = new A("Campinas");
```

O atributo só serviu para cada uma das instâncias, logo atributo de INSTÂNCIA
<br>
<br>

## Métodos/Atributos de Classe ou Estático

São usados quando precisa de algum atributo/metódo que vai englobar **TODAS** as instâncias.<br><br>

Syntax para criação<br>(FORA da Classe) | Syntax para chamar
--- | ---
`(NomeClasse).(NomeAtribulo) = (Valor)` | `(NomeClasse).(NomeAtributo)`
`(NomeClasse).(NomeMétodo) = function() {  }` | `(NomeClasse).(NomeMétodo)()`

<br><br>

```javascript
var A = function(_lugar, _lugar2)
{
	// Quando instanciar, jogar o objeto no atributo de classe
	A.quantidadeInstancias.push(this);
	
	this.lugar = _lugar;
	this.lugar2 = _lugar2;
	
	this.ContarLugares = function()
	{
		/* Quando chamar o método, jogar os atributos
		da instância para o atributo de CLASSE */
		   
		A.quantidadeLugares.push({lugar1:this.lugar, lugar2:this.lugar2});
	}
}

// Criando atributo de CLASSE
A.quantidadeLugares = []; 
A.quantidadeInstancias = [];

// Criando um Método de CLASSE
A.ListarLugares = function()
{
	for (var i = 0; i < A.quantidadeLugares.length; i++)
	{
		cliente = i + 1;
		J = A.quantidadeLugares[i];
		console.log("Cliente " + cliente + ": " + J.lugar1 + " e " + J.lugar2);
	}
}
```

```javascript
var B = new A("Salvador" , "Sertãozinho");
var C = new A("Rio Branco" , "Ribeirão");

B.ContarLugares();
C.ContarLugares();
```

```javascript
// Irá mostrar 2 objetos com seus atributos/metodos, e o nome da CLASSE que eles pertencem
A.quantidadeInstancias;

// Irá mostrar 4 Atributos
A.quantidadeLugares;

// Irá monstrar no console os atributos dos objetos, usando o MÉTODO DE CLASSE para isso
A.ListarLugares(); 
```

<br>
<br>

## Métodos/Atributos Públicos e Privados

Privados: Apenas o **escopo** da classe vai usar-los, vão ser usados apenas dentro dele.<br>
Público: Variáveis que podem ser usadas tanto na classe, quanto fora dela (Para expor ou para inserir dados).<br><br>
Syntax (Dentro da classe):<br><br>

Públicos | Privados
--- | ---
Atributos: this.(Nome) = (Valor); | var (Nome) = (Valor);
Métodos: this.(Nome) = function( ){  } | var (Nome) = function( ){  }

<br><br>

```javascript
var CalcularMedia = function(_nota1 , _nota2)
{
	// Atributos Públicos
	this.nota1 = _nota1;
	this.nota2 = _nota2;

	// Atributo e Método PRIVADOS
	var notas = [];
	var Media = function()
	{
		console.log((_nota1 + _nota2)/notas.length)
	}

	// Ações quando a classe for instanciada
	notas.push(_nota1 , _nota2);
	Media();
}
```

<br><br>

## Herança

Herança é usada para reaproveitar os atributos e métodos de uma classe já existente, colocando-los dentro de outra CLASSE, evitando assim ter que copiar os mesmos códigos quando eles já estão escritos. <br><br>A herança **APENAS** herdar atributos e métodos **PÚBLICOS**.<br><br>

Syntax: `(ClasseFilho).prototype = new (ClassePai);`<br><br>
Depois basta apenas **instanciar** a classe filha, que o objeto ficará com os atributos/métodos da classe pai E classe filho.<br><br>

```javascript
var A1 = function()
{
	this.nome = "Joao";
}

var B1 = function ()
{
	this.numero = 555;
}

// 'B1' herdando de 'A1', não confundir com INSTANCIANDO A1
B1.prototype = new A1();

// Não mostrará NADA, pois 'B1' não possuí o ATRIBUTO "nome", caso fosse um OBJETO ai sim mostraria.
B1.nome

// Mostrará "Joao", pois o mesmo é a propiedade "nome" da classe herdada.
B1.prototype.nome
```

```javascript
/* INSTANCIANDO 'B1', logo 'C1' ficará com as propiedades/métodos
de ambos 'A1' e 'B1' (Já que 'B1' herdou de 'A1'). */

var C1 = new B1();

// Mostrará "João"
C1.nome

// Mostrará 555
C1.numero
```

<br><br>

## Polimorfismo 

É usado basicamente para sobrescrever métodos da classe pai na classe filho, ou seja o mesmo método nas duas classes porém de formas diferentes.<br><br>

Polimorfismo só funciona para reescrever **Métodos**, em atributos e propiedades não é possível.<br><br>
Syntax para **injetar** na classe pai: `(ClassePai).prototype.(NomeMétodo) = function ( ) { ... }`<br>
Syntax para instanciar a classe pai na classe filho: `this.super = (ClassePai).prototype;`

```javascript
var A = function() 
{
	this.Calcular = function(_num1) 
	{
		a = _num1 * 2;
		console.log(a);
	}
}

// Sobreescrevendo o método da classe pai ('A')
var B = function() 
{
	this.Calcular = function(_num1) 
	{
		a = _num1 * 10;
		console.log(a);
	}
}
```

```javascript
B.prototype = new A();
var J = new B();

// Ira aparecer 50
J.Calcular(5);
```

Em javascript para que tenha a possibilidade de chamar o método do **pai** sobrescrito na classe filha, é necessário **injetar** o método previamente, em outras linguagens isso pode ser diferente.

```javascript
var A = function() { }

// Injetando atributo na classe pai
A.prototype.nome = "";

// Injetando o método na classe pai
A.prototype.Calcular = function(_num1) 
{
	a = _num1 * 2;
	console.log(a);
}
```

O nome 'super' é como se fosse uma referência a algo 'superior' (Ou seja o **pai**) , em outras linguagens como C# é chamado de 'base'.

```javascript
var B = function() 
{
	/* Herda de tudo que estiver em 'prototype' que
	foi injetado ou seja 'nome' e 'Calcular()' */
	
	this.super = A.prototype;

	this.Calcular = function(_num1) 
	{
		a = _num1 * 10;
		console.log(a);
		
		/* Chamando o método da classe pai 
		(Método precisa estar injetado) */
		
		this.super.Calcular(_num1);
	}
}

var J = new B();

// Ira aparecer 50 e 10
J.Calcular(5)
```

<br><br>

# Classe de Interface 

A interface seria basicamente uma classe sem conteúdo algum, apenas com as assinaturas (nomes) dos métodos para que você coloque dados neles quando for herdar-los em outra classe. Logo você obriga a classe filho a sobrescrever a classe pai (*implementação*), já que em linguagens compiladas dacontece erro ao não fazer isso.

> * Interface não funciona em js, apens funciona em linguagens compiladas pois é obrigatório a **implementação**.
> * Por causa da obrigadoriedade da implementação, não é possivel gerar uma instância da interface.

Exemplo em **C#**:

```csharp
// Interface 'IPessoa'
public interface IPessoa
{
	// Toda vez que for herdada, irá ter que reescrever esses métodos
	void SetTelefone(string telefone)
	void Gravar()
}

// Classe 'Base' herdando de 'IPessoa'
public class Base : IPessoa
{
	this.Telefone = telefone;
	
	// Reescrevendo os métodos da interface
	void SetTelefone(string telefone) { this.Telefone = telefone; } 
	public virtual void Gravar() { /* Algum código reescrito */ }
}
```

<br><br>

# Classe Abstrata

Muito parecida com a interface, porém a classe abstrata tem mais "poderes". Ela é usada para gerar ideias ou para reaproveitar métodos (e atributos) já existentes e também para disponibilizar métodos vazios (Que são **obrigatórios** de completar em linguagens compiladas). 

> * Assim como a interface, não é possivel instanciar a classe abstrata.

```javascript
var Abstracao = function ()
{
	// Proibindo de instanciar essa classe, atravez do construtor
	if (this.constructor == Abstracao)
	{
		throw new Error("Não pode instanciar classe abstrata, apenas herdar!");
	}
}

Abstracao.prototype.nome = "";
Abstracao.prototype.Gravar = function()
{
	// Irá dar erro caso NÃO sobrescrever o método
	throw new Error("Você precisa sobrescrever o método nas classes filhas");
}
```

Logo quando for herdar 'Abstracao', necessáriamente vai ter que sobrescrever 'Gravar( )'.

```javascript
var Pessoa = function() {}

// Herdando tudo que estiver no 'prototype', ou seja 'nome' e 'Gravar()'
Pessoa.prototype = Abstracao.prototype;

// Sobrescrita (Se o método original foi escrito em 'prototype', a sobrescrita também será)
Pessoa.prototype.Gravar = function() { // Algum código }
```

<br><br>

# Classe Singleton

Com a classe Singleton é possível criar uma **unica** instância atraves do seu contrutor.

> Ela pode ser usada por exemplo para organizar arquivos separados de um projeto como endereços, emails, banco de dados em tudo em um só lugar

Syntax: `(NomeClasse) = { [Atributos] [Método que vai criar a instância]() } `

```javascript
var Single =
{
	// Vai ser aqui que a instância única vai ficar armazenada
	instancia0: null,
	
	// Método para criar a instância única
	iniciar: function()
	{
		// Quando o 'iniciar' for chamado, ele vai criar essa classe 
		function Sgln()
		{
			this.nome = "";
		}
		
		/* O atributo 'instancia0' irá instanciar da classe 'Sgln' caso
		não possuir nenhuma instância dentro dele */
		
		if (Single.instancia0 == null)
		{
			Single.instancia0 = new Sgln();
		}
		
		/* Caso contrário ira retorna a instância que eu ja foi criado,
		ou seja, ele nunca vai criar outras instâncias caso já existir uma */
	}

}
```

```javascript
// Chamando o método e atribuindo valor a instância criada
Single.iniciar();
Single.instancia0.nome = "João";

// Caso eu tente chamar método 'iniciar()' novamente, ele não mudará o atributo

Single.iniciar();

/* E continuará mostrando "João", ou seja ficará com 
apenas uma instância unica para toda a aplicação */

Single.instancia0.nome;
```

Só é possível "Zerar" a classe singleton se o atributo 'instancia0' for igual a null novamente, dessa forma o 'iniciar()' irá fazer todo o processo de classe e de instância novamente.

```javascript
Single.instancia0 = null;
```

<br><br>
