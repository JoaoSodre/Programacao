<!-- Não esquecer de colocar get/set no obj do javascript-->

# C#

* [Variáveis](https://github.com/JoaoSodre/Programacao/blob/master/C%20Sharp/L%C3%B3gica%20B%C3%A1sica.md#vari%C3%A1veis)
* [Collections](https://github.com/JoaoSodre/Programacao/blob/master/C%20Sharp/L%C3%B3gica%20B%C3%A1sica.md#collections) 
* [Loopings](https://github.com/JoaoSodre/Programacao/blob/master/C%20Sharp/L%C3%B3gica%20B%C3%A1sica.md#loopings) 
* [Função](https://github.com/JoaoSodre/Programacao/blob/master/C%20Sharp/L%C3%B3gica%20B%C3%A1sica.md#fun%C3%A7%C3%A3o)
* [Funções Recursivas](https://github.com/JoaoSodre/Programacao/blob/master/C%20Sharp/L%C3%B3gica%20B%C3%A1sica.md#fun%C3%A7%C3%A3o-recursiva)

## Variáveis

Em C# é obrigatório declarar qual o tipo de variável que está sendo criada, logo para cria-la ficaria da seguinte forma:

```csharp
(TipoVariável) (NomeVariável) = (Valor);
(TipoVariável) (NomeVariável);
(TipoVariável) (NomeVariável) , (Nome de outra Variável) , ... ;
```

> Nota: A partir da versão 4 (aproximadamente) do framework .NET , o C# começou a trabalhar com tipagem dinâmica, ou seja para declarar uma variável basta escrever `var (NomeVariável) = (Valor);`

Tipos de Var | Significado | Exemplo
--- | --- | ---
string | Texto (Precisa estar entre aspas) | "Cidade"
int | Número inteiro **sem**<br> Casas Decimais | 50
float | Número com Casas Decimais<br>(Precisa do "f" no final) | 50.57845f
bool | Verdadeiro ou Falso | true/false
double | Mesmo que o 'float', porém<br> tem capacidade para mais<br>casas de numeros | 3123.44

[Outros tipos de variáveis que existem](http://www.tutorialsteacher.com/csharp/csharp-data-types)<br><br>

Conversão de variáveis:

```csharp
// Usado para todas as variáveis primitivas.
(Tipo) Convert.toTipo();

//Usado para converter uma **string** para o valor desejado.
Tipo.Parse()

// Nota: Usa-se o ToSingle() para converter para float.

int A = 5;
string B = "5444";

double C = (double) Convert.ToDouble(A);
double D = double.Parse(B);
```

<br><br>

<!--## Collections

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
-->

## Loopings

[Exemplos em Javascript (Muda poucas coisas na syntax)](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/L%C3%B3gica%20B%C3%A1sica.md#loopings)

o `break` é usado para encerar o looping e ir para o proximo comando do algoritmo.<br>
o `continue` é usado para **pular** para o próximo passo da repetição.

while = enquanto tal condição, execute o bloco.<br>
do..while = faça a operação primeiro e depois entra no looping.<br>
for = já determina a quantidade de repetições.<br>
foreach = para cada elemento de um array.

<!--
int[] A = { 0, 2, 5, 8, 93 };

// Para cada 'inteiro' em A (Ou seja 5)
foreach (int x in A)
{
    // Faça isso
    Console.WriteLine("Olá");
}

------------- Outro exemplo -------------

foreach (int x in A)
{
    // Irá Mostrar todos os números do Array
    Console.WriteLine(x);
}
```
-->
<br><br>

## Função

<!--
* O 'local' e se ela é 'estática', não é obrigatório quando for criar uma função

Local static TipoRetorno nome (TipoVar NomeVar, TipoVar NomeVar, ...) {}
-->

```csharp
int Calcular(int _num1, int _num2)
{
    return _num1 + _num2 ;
}
```
<br><br>

## Função Recursiva

Funções recursivas são basicamente funções que se chamam.

> Nota: Sempre pense numa válvula de escape quando estiver produzindo loopings e/ou funções recursivas.

```csharp
void Calcular()
{
    Console.WriteLine("Cuidado com esse tipo de looping!");
    Calcular();
}
```
