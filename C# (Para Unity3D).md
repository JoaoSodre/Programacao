# C#

### Alguns Tipos de Variáveis

Tipos de Var | Significado | Exemplo
------------ | ----------- | --------
string | Texto | "Cidade"
int | Número inteiro sem<br> Casas Decimais | 50
float | Número com Casas Decimais | 50.0
bool | Verdadeiro ou Falso | Lâmpada Acesa?
Vector3 | Vetor em 3 Dimensões | (0, 10, 5) `x, y, z`

### Syntax

`(Tipo de Variável) + (Nome da Variável) = (Valor);`<br>
ou<br>
`(Tipo de Variável) + (Nome da Variável);`<br><br>

Exemplos :<br>`public float peso;` <br>`bool running = true;`<br> `int idade = 30;`<br><br>
public + var = da acesso ao dev ou programa colocar valores nela.<br>
protected + var = só pode ser acessada pelo própio algoritmo.
 
### Estrutura basica do Unity
<pre>
using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {

    void Start ()
    {
    }

    void Update ()
    {
    }
}
</pre>

Onde `Start ()` seria o método que só vai funcionar **UMA VEZ** quando o código for ativado.<br>
E `Update ()` irá funcionar de tempos em tempos baseado no clock do processador.

### Códigos Unity

`Vector3 A1 = transform.position` -> Irá pegar as cordenadas do objeto (x, y, z) e colocar na variável `A1` (Do Tipo Vector 3)<br>
`Time.deltaTime` = Calcula quanto que é 1 segundo baseado nos clocks do processador.<br><br>

Exemplo de Algoritmo:
<pre>
void Update()
{
    Vector3 pos = transform.position;
    pos.z = pos.z + (1.0f * Time.deltaTime);
    transform.position = pos;      
}
</pre>
o Objeto irá pra direção z uma unidade (1.0f) por segundo
