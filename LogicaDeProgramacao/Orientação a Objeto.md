# Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), encapsulando-os em **Classes** que possuem o mesmo contexto podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de organização. Classes são modelos que estão disponiveis para serem copiados (instânciados) depois.<br><br>
Nomenclaturas:<br><br>

Código Estruturado | Orientação Objeto
--- | ---
Variável | Atributo/Propiedades
Função | Método/Ação
Classe | Objeto/Instância

Atributo -> Mesmo que *propiedade simples* (Serve tanto como get quanto set).<br>
Instâncias -> Clones de classes (Objetos), que serão inseridas dentro de uma variável.<br>

<br>
<br>

## Introdução (Javascript):

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
    this.nome = ""; // Propiedade "nome"
    this.Mostrar = function() // Método "Mostrar"
    {
        alert("Nome: " + this.nome);
    }
}
</pre>

<pre>
var A = new Clientes(); // Instânciando a classe "Cliente"
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
<br>
<br>

## Hash nos Contrutores

O uso de hash pode facilitar ainda mais na organização, ele possibilita colocar **nomes** nos contrutores.

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

### Métodos/Atributos de Classe ou Estátco

São usados quando precisa de algum atributo/metódo que vai englobar **TODAS** as instâncias.<br>

> Lembrando que pertence ao Javascript, NÃO repetir nas outras linguagens.

Syntax para criação<br>(FORA da Classe) | Syntax para chamar
--- | ---
`(NomeClasse).(NomeAtribulo) = (Valor)` | `(NomeClasse).(NomeAtribulo)`
`(NomeClasse).(NomeMétodo) = function() {  }` | `(NomeClasse).(NomeMétodo)()`

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

### Métodos/Atributos Públicos e Privados

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
