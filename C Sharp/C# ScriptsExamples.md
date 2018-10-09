### Variables
<pre>
bool running = true;
int idade = 30;
public float A1, A2, A3;
</pre>
### Looping
<pre>
int a = 1;

while (a < 10) 
{
    if (a == 5) 
    {
        break;  
    }
    a++
}
console.writeline(a) // A tela ira mostrar 5 como resultado, devido ao break.
</pre>
<br>

<pre>
int b = 1;

while (b < 10)
{
    if (b == 5)
    {
        continue;
    }
    console.writeline(b)
    b++
}
// Irá mostrar todos os números de 1 á 10, exceto o 5 devido ao continue
</pre>
