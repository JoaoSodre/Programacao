* [Tutorials Teache - C# (Parecido com W3Schools)](http://www.tutorialsteacher.com/csharp/csharp-tutorials)
* [Dotnetperls (Exemplos e exercícios de C#)](https://www.dotnetperls.com/)

# C#

<!-- Não esquecer de colocar get/set no obj do javascript-->

### Variáveis

Em C# é obrigatório declarar qual o tipo de variável que está sendo criada, logo a Syntax fica:<br><br>
`(TipoVariável) + (NomeVariável) = (Valor);`<br>
`(TipoVariável) + (NomeVariável);`<br>
`(TipoVariável) + (NomeVariável) , (Nome de outra Variável) , ... ;`<br><br>

> Nota: A partir da versão 4 (aproximadamente) do framework .NET , o C# começou a trabalhar com tipagem dinâmica, ou seja para declarar uma variável basta escrever `var (NomeVariável) = (Valor);`

Tipos de Var | Significado | Exemplo
--- | --- | ---
string | Texto | "Cidade"
int | Número inteiro **sem**<br> Casas Decimais | 50
float | Número com Casas Decimais<br>(Precisa do "f" no final) | 50.57845f
bool | Verdadeiro ou Falso | Lâmpada Acesa?
double | Mesmo que o 'float', porém<br> tem capacidade para mais<br>casas de numeros | 3123.44

[Outros tipos de variáveis que existem](https://docs.microsoft.com/pt-br/previous-versions/visualstudio/visual-studio-2008/ms228360(v=vs.90)#tipos-de-dados-internas)<br><br>
Conversão de variáveis<br>
`({TipoVar}) Convert.to{TipoVar}()` = Usado para todas as variáveis primitivas.<br>
`{TipoVar}.Parse()` = Irá converter uma **string** para o valor desejado.<br>
> Nota: Usa-se o ToSingle() para converter para float.

<pre>
int A = 5;
string B = "5444";

double C = (double) Convert.ToDouble(A);
double D = double.Parse(B);
</pre>

<br><br>

### Collections

Hash
Array

<br><br>

### Loopings

o `break` é usado para encerar o looping e ir para o proximo comando do algoritmo if (a) {break;}<br>
o `continue` é usado para **pular** uma repetição

while = enquanto tal condição, execute o bloco.<br>
do..while = faça a operação primeiro e depois entra no looping.<br>
for = já determina a quantidade de repetições.<br>
foreach = para cada elemento de um array.

<br><br>
