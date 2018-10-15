# Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), encapsulando-os em **Classes** que possuem o mesmo contexto podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de organização. Classe é o mesmo que um modelo que você deixou disponivel para ser copiado.<br><br>
Nomenclaturas:<br><br>

Código Estruturado | Orientação Objeto
--- | ---
Variável | Atributo/Propiedades
Função | Método/Ação
Classe | Objeto/Instância

Atributo -> Mesmo que propiedade simples (Serve tanto como get quanto set).<br>
Instâncias -> Clones de classes (Objetos), que são inseridas dentro de uma variável.<br>

<br>
<br>

## Introdução (Javascript):

Como: | Syntax
--- | ---
Criar uma classe | `var + (NomeDaClasse) = function () {  ...  }` 
Criar uma Propiedade<br>(Dentro da Classe) | `this.(NomeDaPropiedade) = (Valor);` 
Criar um Método<br>(Dentro da Classe) | `this.(NomeDoMétodo) = function () { ... }` 
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

Syntax para criação (FORA da Classe) | Syntax para chamar
--- | ---
`(NomeDaClasse).(NomeAtribulo) = (Valor)` | `(NomeDaClasse).(NomeAtribulo)`
`(NomeDaClasse).(NomeMétodo) = function() { ... }` | `(NomeDaClasse).(NomeMétodo)()`

<pre>
var A = function(_lugar)
{
    this.lugar = _lugar;
    A.quantidadeLugares.push(this) // Jogando o OBJETO no array
}

A.quantidadeLugares = []; // Criando um atributo de CLASSE
A.ListarLugares = function() // Criando um método de CLASSE
{
	for (var Y1 = 0; Y1 < A.quantidadeLugares.length; Y1++)
	{
		places = A.quantidadeLugares[Y1];
		console.log(places.lugar);
		
		// Não esquecer da SYNTAX (AtributoDeCLASSE).(NomeAtributo);
	}
}
</pre>

<pre>
var B = new A("Salvador");
var C = new A("Rio Branco");

A.quantidadeLugares; // Irá mostrar 2 atributos (Como no hash), e o nome da CLASSE que eles pertencem
A.ListarLugares(); // Irá listar todos os atributos com o método de CLASSE
</pre>
<br>
<br>
### Métodos/Atributos Públicos e Privados
