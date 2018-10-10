## Orientação a Objeto

É usado para organizar variáveis e funções soltas no código-fonte e fora dele (Como Arquivos .js), *encapsulando-os* em **Classes** que possuem o mesmo **contexto**, podendo assim clona-la dentro de uma varíavel para usa-la depois, facilitando todo o processo de programação.

Código Estruturado | Orientação Objeto
--- | ---
Variável | Propiedades/Atributo
Função | Método/Ação
Modelo | Classe/Objeto

Atributo -> Mesmo que propiedade simples (Serve tanto como get quanto set).<br>
Instancias -> Clones de classes (Que são inseridas dentro de uma variável).<br>

Exemplo (Javascript):

> Nota: A palavra `var` é usada quando uma variável ainda não foi criada, caso contrário não precisa do uso dela.

<pre>
// Como criar um objeto -> var + (Nome do objeto) = function() {  ...  }
var Clientes = function()
{
    // `this` é o mesmo que (Nome da variável), que nesse caso é `Clientes`.  
    
    // Como criar uma propiedade -> this.(Nome da propiedade) = (Valor);
    this.nome = "";
    this.telefone = "";
    
    // Como criar um método -> this.(Nome do método) = function () { ... }
    this.Mostrar = function()
    {
        alert("Nome: " + this.nome);
        alert("Telefone: " + this.telefone);
    }
}
</pre>

<pre>
// Como intanciar um objeto -> var + (Nome da variável) = new (Nome do objeto junto com parênteses)
var A = new Clientes();
var B = new Clientes();
</pre>

<pre>
// Como atribuir valor as propiedades dentro das instâncias -> (Nome da variável).(Nome do atributo) = (Valor);
A.nome = "João";
A.telefone = "111";
B.nome = "José";
B.telefone = "222";
</pre>
