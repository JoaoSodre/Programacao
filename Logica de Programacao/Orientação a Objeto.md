# Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), *encapsulando-os* em **Classes** que possuem o mesmo **contexto**, podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de organização. Classe é o mesmo que um **modelo** que você fez.<br><br>
Nomenclatura:<br><br>

Código Estruturado | Orientação Objeto
--- | ---
Variável | Atributo/Propiedades
Função | Método/Ação
Classe | Objeto/Intância

Atributo -> Mesmo que propiedade simples (Serve tanto como get quanto set).<br>
Instancias -> Clones de classes (Que são inseridas dentro de uma variável).<br>

#### Exemplos (Javascript):

Como | Syntax
--- | ---
Criar um Objeto | `var + (Nome do objeto) = function () {  ...  }` 
Criar uma Propiedade | `this.(Nome da propiedade) = (Valor);` 
Criar um Método | `this.(Nome do método) = function () { ... }` 
Intanciar um objeto | `var + (Nome da variável) = new (Nome do OBJETO)();` 
Atribuir valor as instâncias | `(Nome da variável).(Nome do atributo) = (Valor);`

> Nota: A palavra `var` é usada quando uma variável ainda não foi criada, caso contrário não precisa do uso dela.

<br>
<pre>
// this é o mesmo que o nome do objeto, nesse caso é Clientes.
var Clientes = function() // Objeto "Cliente"
{
    this.nome = ""; // Propiedade "nome"
    this.telefone = ""; // Propiedade "telefone"
    this.Mostrar = function() // Método "Mostrar"
    {
        alert("Nome: " + this.nome);
        alert("Telefone: " + this.telefone);
    }
}
</pre>

<pre>
var A = new Clientes(); // Instânciando o objeto "Cliente"
var B = new Clientes(); // Instânciando o objeto "Cliente", numa variável diferente
</pre>

<pre>
A.nome = "João"; // Atribuindo valores aos atributos das instâncias
A.telefone = "111";
B.nome = "José";
B.telefone = "222";
</pre>

### Métodos/Atributos de Instância
São usados apenas para **UMA** instância.<br>

Exemplo:
<pre>
var A = function()
{
    this.lugar = "";
}

var B = new A();
var C = new A();

B.lugar = "São Paulo";
C.lugar = "Campinas";

// O atributo só serviu para cada uma das instâncias, logo atributo de instância
</pre>

<!-- 
### Métodos/Atributos de Classe

São usados quando precisa de algum atributo/metódo que vai englobar **TODAS** as instâncias.<br>

Exemplo:
<pre>
var A = function()
{
    this.lugar = "";
}
</pre> 
-->

### Construtores

São usados basicamente para economizar linhas de código, são acessados por deio dos parâmetros do objeto (previamente) e da instância.
<pre>
var Casas = function(casa1, casa2)
{
    this.casa1 = "";
    this.casa2 = "";
}
</pre>

Construtor atuando nos parâmentros da instância.

<pre>
var C = new Casas("Sobrado", "Triplex");
</pre>
