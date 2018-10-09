## Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), *encapsulando-os* em **Classes** que possuem o mesmo **contexto**, podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de programação.

Estruturado | Orientação Objeto
--- | ---
Variável | Propiedades/Atributo
Função | Método
Modelo | Classe/Objeto

Atributo -> Mesmo que propiedade simples (Serve tanto como get quanto set).<br>
Instancias -> Clones de classes (Podem ser inseridas dentro de uma variável).<br>

Exemplo (Javascript):

<pre>
var Clientes = function() // em javascript se cria uma classe usando o comando function dessa forma.
{
    // this = Clientes
    this.nome = ""; // propiedade
    this.telefone = ""; // propiedade
    
    this.Mostrar = function() // método
    {
        alert("Nome: " + this.nome);
        alert("Telefone: " + this.telefone);
    }
}

var A = new Clientes() // Instanciando o objeto
var B = new Clientes() // Instanciando o mesmo objeto novamente, porem outra variavel

// Atribuindo valores as propiedades
A.nome = "João"
A.telefone = "111"
B.nome = "José"
B.telefone = "222"

</pre>
## Syntax Orientação Objeto

