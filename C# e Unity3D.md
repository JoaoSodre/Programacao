# C#

### Alguns Tipos de Variáveis

Tipos de Var | Significado | Exemplo
------------ | ----------- | --------
string | Texto | "Cidade"
int | Número inteiro sem<br> Casas Decimais | 50
float | Número com Casas Decimais | 50.0
double | Mesmo que float, Porém <br>com mais casas decimais | 3.1415
bool | Verdadeiro ou Falso | Lâmpada Acesa?
Vector3 | Vetor em 3 Dimensões | (0, 10, 5) `x, y, z`

### Syntax

`(Tipo de Variável) + (Nome da Variável) = (Valor);`<br>
ou<br>
`(Tipo de Variável) + (Nome da Variável);`<br>
e até mesmo `var AA3 = 5`, que o programa automáticamente irá reconhecer que é inteiro ou qualquer tipo de variável<br><br>

Exemplos :<br>`public float peso;` <br>`bool running = true;`<br> `int idade = 30;`<br>`var x = false`<br><br>
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


### _Alguns_ Códigos Unity

`Vector3 A1 = transform.position` -> Irá pegar as cordenadas do objeto (x, y, z) e colocar na variável `A1` (Do Tipo Vector 3)<br>
`Time.deltaTime` = Calcula quanto que é 1 segundo baseado nos frame rates.<br><br>
**É SEMPRE Recomendável usar Time.deltaTime no Update() devido aos frames de diferentes computadores**<br><br>

Exemplo de Algoritmo:
<pre>
void Update()
{
    Vector3 pos = transform.position;
    pos.z = pos.z + (1.0f * Time.deltaTime);
    transform.position = pos;      
}
</pre>
O Objeto irá pra direção Z uma unidade (1.0f) por segundo.<br>
**Nota:** `pos.z += (1.0f * Time.deltaTime);` também funcionaria nesse caso.
