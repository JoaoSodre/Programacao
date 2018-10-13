# Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), *encapsulando-os* em **Classes** que possuem o mesmo **contexto**, podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de programação.

Código Estruturado | Orientação Objeto
--- | ---
Variável | Propiedades/Atributo
Função | Método/Ação
Modelo | Classe/Objeto

Atributo -> Mesmo que propiedade simples (Serve tanto como get quanto set).<br>
Instancias -> Clones de classes (Que são inseridas dentro de uma variável).<br>

#### Exemplos (Javascript):

Criando:<br>
Objeto -> `var + (Nome do objeto) = function() {  ...  }` <br>
Propiedade -> `this.(Nome da propiedade) = (Valor);` <br>
Método -> `this.(Nome do método) = function () { ... }` <br>
Intanciar um objeto -> `var + (Nome da variável) = new (Nome do OBJETO junto com parênteses);` <br>
Atribuir valor as instâncias -> `(Nome da variável).(Nome do atributo) = (Valor);`<br>

> Nota: A palavra `var` é usada quando uma variável ainda não foi criada, caso contrário não precisa do uso dela.
<br>
<pre>
var Clientes = function() // Objeto
{
    // `this` é o mesmo que (Nome da variável), que nesse caso é `Clientes`.  

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
A.nome = "João"; // Atribuindo valores as Instâncias
A.telefone = "111";
B.nome = "José";
B.telefone = "222";
</pre>
