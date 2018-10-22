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
* [Métodos/Atributos de Classe ou Estático](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#m%C3%A9todosatributos-de-classe-ou-est%C3%A1tco)
* [Métodos/Atributos Públicos e Privados](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#m%C3%A9todosatributos-p%C3%BAblicos-e-privados)
* [Herança](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#heran%C3%A7a)
* [Polimorfismo](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orientação%20a%20Objeto.md#polimorfismo)
<!-- * [Interface](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#interface)
* [Abstração]()
* [Classe Singleton](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Objeto.md#classe-singleton) -->

<br>

## Introdução

Como: | Syntax
--- | ---
Criar uma classe | `var + (NomeDaClasse) = function () {  }` 
Criar uma Propiedade<br>(Dentro da Classe) | `this.(NomeDaPropiedade) = (Valor);` 
Criar um Método<br>(Dentro da Classe) | `this.(NomeDoMétodo) = function () {  }` 
Intanciar uma classe<br>(Criar um objeto) | `var + (NomeDaVariável) = new (NomeDaClasse)();` 
Atribuir valor as instâncias<br>(Sem construtor) | `(NomeDaVariável).(NomeDoAtributo) = (Valor);`

<br>

<pre>
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


// Outra forma de fazer
function Clientes()
{
	this.nome = "";

	this.Mostrar = function()
	{
		alert("Nome: " + this.nome);
	}
}
</pre>

<pre>
var A = new Clientes(); // Instanciando a classe "Cliente"
</pre>

<pre>
A.nome = "João"; // Atribuindo valor ao atributo do objeto
</pre>

<br>
<br>

## Construtores

São usados basicamente para economizar linhas de código, são acessados por deio dos parâmetros do objeto (previamente) e da instância.

<pre>
var Casas = function(_casa1, _casa2)
{
	this.casa1 = _casa1;
	this.casa2 = _casa2;
}
</pre>

<pre>
var C = new Casas("Sobrado", "Triplex"); // Construtor 
</pre>

O uso de **HASH** pode facilitar ainda mais na organização, ele possibilita colocar **nomes** nos contrutores.

<pre>
var Casas = function(_casas, _tamanhos)
{
	this.casa1 = _casas.casa1;
	this.casa2 = _casas.casa2;
	this.tamanho1 = _tamanhos.tamanho1;
	this.tamanho2 = _tamanhos.tamanho2;
}
</pre>

<pre>
var C = new Casas({casa1:"Sobrado" , casa2:"Triplex"} , {tamanho1:"Grande" , tamanho2:"Pequena"});
</pre>

<br>
<br>

## Métodos/Atributos de Instância

São usados apenas para **UMA** instância.

<pre>
var A = function(_lugar)
{
	this.lugar = _lugar;
}

var B = new A("São Paulo");
var C = new A("Campinas");
</pre>

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

<pre>
var A = function(_lugar, _lugar2)
{
	this.lugar = _lugar;
	this.lugar2 = _lugar2;
	
	this.ContarLugares = function()
	{
		A.quantidadeLugares.push({lugar1:this.lugar, lugar2:this.lugar2});
	}
	A.quantidadeIntancias.push(this);
}
</pre>

<pre>
// Criando atributo de CLASSE
A.quantidadeLugares = []; 
A.quantidadeIntancias = [];

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
</pre>

<pre>
var B = new A("Salvador" , "Sertãozinho");
var C = new A("Rio Branco" , "Ribeirão");

B.ContarLugares();
C.ContarLugares();
</pre>

<pre>
// Irá mostrar 2 objetos com seus atributos/metodos, e o nome da CLASSE que eles pertencem
A.quantidadeIntancias;

// Irá mostrar 4 Atributos
A.quantidadeLugares;

// Irá monstrar no console os atributos dos objetos, usando o MÉTODO DE CLASSE para isso
A.ListarLugares(); 
</pre>

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

<pre>
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
</pre>

<br><br>

## Herança

Herança é usada para reaproveitar os atributos e métodos de uma classe já existente, colocando-los dentro de outra CLASSE, evitando assim ter que copiar os mesmos códigos quando eles já estão escritos. <br><br>A herança **APENAS** herda atributos e métodos **PÚBLICOS**.<br><br>

Syntax: `(NomeClasse).prototype = new (ClasseASerHerdada);`<br><br>
Depois é apenas **instanciar** a classe filha, que o objeto ficará com ambos os atributos/métodos<br><br>

<pre>
var A1 = function()
{
	this.nome = "Joao";
}

var B1 = function ()
{
	this.numero = 555;
}

// B1 herdando de A1, não confundir com INSTANCIANDO A1
B1.prototype = new A1();

// Não mostrará NADA, pois B1 não possuí o ATRIBUTO "nome", caso fosse um OBJETO mostraria o nome.
B1.nome

// Mostrará "Joao", pois o mesmo é a propiedade "nome" da classe herdada.
B1.prototype.nome
</pre>

<pre>
// INTÂNCIANDO B1, logo C1 ficará com as propiedades/métodos de ambos A1 e B1 (Já que B1 herdou de A1).
var C1 = new B1();

// Mostrará "João"
C1.nome

// Mostrará 555
C1.numero
</pre>

## Polimorfismo 

> Nota: Polimorfismo não é muito utilizado em Javascript devido as limitações da linguagem.

É usado basicamente para sobrescrever métodos da classe pai na classe filho, ou seja o mesmo método nas duas classes porém de formas diferentes.<br><br>

Polimorfismo só funciona para reescrever **Métodos**, em atributos e propiedades não é possível.<br><br>
<!-- Pq o 'return' n funcionaria no metodo da classe pai e do filho ao mesmo tempo? -->
Syntax para **injetar** na classe pai: `(NomeClassePai).prototype.(NomeMétodo) = function ( ) { ... }`

<pre>
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

B.prototype = new A();
</pre>

<pre>
var J = new B();

// Ira aparecer 50
J.Calcular(5);
</pre>

Em javascript para que tenha a possibilidade de chamar o método do **pai** sobrescrito na classe filha, é necessário **injetar** o método previamente, em outras linguagens isso pode ser diferente.

<pre>
// *Refazendo o método de cima*
var A = function() { }

// Injetando o método na classe pai
A.prototype.Calcular = function(_num1) 
{

	a = _num1 * 2;
	console.log(a);
}
</pre>

O nome 'super' é como se fosse uma referência a algo 'superior' (Ou seja o **pai**) , em outras linguagens como C# é chamado de 'base'.

<pre>
var B = function() 
{

	// Criando uma instância do Pai dentro da classe
	this.super = A.prototype;

	this.Calcular = function(_num1) 
	{
	
		a = _num1 * 10;
		console.log(a);

		// Quando o método da classe filho for chamdo, ele vai executar a da classe pai também
		this.super.Calcular(_num1);
	}
}

var J = new B();

// Ira aparecer 50 e 10
J.Calcular(5)
</pre>

# Interface 
 
<!--
# Abstração 
# Classe Singleton -->
