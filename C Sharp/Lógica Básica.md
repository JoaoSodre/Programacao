<!-- Não esquecer de colocar get/set no obj do javascript-->

# C#

* [Variáveis]()

<!--
## Collections 
## Loopings 
## Funções
-->

## Variáveis

Em C# é obrigatório declarar qual o tipo de variável que está sendo criada, logo para cria-la ficaria da seguinte forma:<br>

```csharp
(TipoVariável) (NomeVariável) = (Valor);
(TipoVariável) (NomeVariável);
(TipoVariável) (NomeVariável) , (Nome de outra Variável) , ... ;
```

> Nota: A partir da versão 4 (aproximadamente) do framework .NET , o C# começou a trabalhar com tipagem dinâmica, ou seja para declarar uma variável basta escrever `var (NomeVariável) = (Valor);`

Tipos de Var | Significado | Exemplo
--- | --- | ---
string | Texto | "Cidade"
int | Número inteiro **sem**<br> Casas Decimais | 50
float | Número com Casas Decimais<br>(Precisa do "f" no final) | 50.57845f
bool | Verdadeiro ou Falso | Lâmpada Acesa?
double | Mesmo que o 'float', porém<br> tem capacidade para mais<br>casas de numeros | 3123.44

[Outros tipos de variáveis que existem](http://www.tutorialsteacher.com/csharp/csharp-data-types)<br>
Conversão de variáveis:<br>
```csharp
// Usado para todas as variáveis primitivas.
(Tipo) Convert.toTipo();

//Usado para converter uma **string** para o valor desejado.
Tipo.Parse()

/* Nota: Usa-se o ToSingle() para converter para float. */

int A = 5;
string B = "5444";

double C = (double) Convert.ToDouble(A);
double D = double.Parse(B);
```

<br><br>

## Collections

Tipo[] Nome = new Tipo[Quantidade];
a[0] =
a.Length;


List<tipo> Nome = new List<Tipo>();
A.Add("Joao")
a.Count;



<pre>
a[0]
</pre>

<br><br>

## Loopings

[Exemplos em Javascript (Quase mesma syntax)](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/L%C3%B3gica%20B%C3%A1sica.md#loopings)

o `break` é usado para encerar o looping e ir para o proximo comando do algoritmo if (a) {break;}<br>
o `continue` é usado para **pular** uma repetição

while = enquanto tal condição, execute o bloco.<br>
do..while = faça a operação primeiro e depois entra no looping.<br>
for = já determina a quantidade de repetições.<br>
foreach = para cada elemento de um array.

<br><br>

## Funções
