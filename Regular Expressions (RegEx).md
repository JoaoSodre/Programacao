# Regular Expressions (RegEx)

## O que são Regular Expressions? 

> Será utilizado os termos 'palavra' e 'palavras' em vez dos termos 'digito' e 'grupo de digitos' em algumas partes para que o texto fique mais compreensível. Também o termo 'texto' será usado tendo em vista que o termo correto seria 'string'.

Regular Expression (RegEx) é um mecânismo que nos permite checar uma série de caracteres em uma string por matches com as combinações que nós criamos usando o própio RegEx. Por exemplo: Checar se um e-mail é valido (Se possui o @ ou se termina em .com), checar se uma senha é forte, filtar uma frase exata em um texto, etc.

<br><br>

## Como usar

[Referência RegEx](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)<br>

Todo regular expression é escrito dentro de duas barras laterais (No caso do Javascript) e o match que queremos encontrar irá no meio dessas barras.<br>

Irá retornar 1 match, mesmo se for a parte de uma palavra maior.

```js
"sakjJasondds" 
/Jason/ //-> 1 Match
```

Se houver mais de uma palavra com o mesmo match ele retornará apenas a primeira. O RegEx considerará o espaço como caractere também.

```js
"  Carlos  Carlos" 
/  Carlos/ //-> 1 Match
```

<br><br>

### Flags

Para selecionar mais palavras iguais será necessário uma das **flags** que são uma especie de configuração adicional para o RegEx, eles são representados por letras depois da segunda barra.

```js
"kLEIin klsd kLein kleINsd kleiN" 
/klein/gi //-> 4 Matches, Flag 'Global' e 'Insensetive'
```

No caso de uma quantidade impar de matches feitos em sequência, o RegEx conciderá apenas os dois primeiros digitos mesmo com a flag acionada.

```js
"333"
/33/g // -> 1 match, os dois primeiros digitos de "333"
```

<br><br>

### Character Set

Supondo que queira-se dar match em duas palavras semelhantes que possuem apenas uma letra diferente (Ex: Gato, Rato), como seria possível fazer isso usando RegEx? Se observarmos apenas a primeira letra está sendo mudada, logo com os **colchetes** será possível permitir que ambas estejam no match. Esses caracteres nos colchetes são chamados de **Characters Set**.

```js
"Um gato estava perseguindo um rato, depois de um tempo ele estava grato"
/[gr]ato/gi //-> 2 Matches (Gato e Rato), note que 'grato' não está no match
```

Também é possível fazer o efeito contrário (Negativo) com o **acento circunflexo**.

```js
"gato rato grato hiato jato"
/[^gh]ato/gi // -> 4 matches

/* Todas as palavras que terminam em 'ato' exceto as que começam com 'g' ou 'h' */
```

**Ranges** são usados para selecionar um conjunto de caracteres sem precisar de ficar escolhendo um a um.

```js
"ninja oinga winga ainga"
/[a-z]inja/gi //-> 4 matches
/[o-z]inja/gi //-> 2 matches
```

Também é possivel alterar o case sensitive **apenas** para um conjuntos de caracteres específicos e não na RegEx inteira (A flag "i" pode dar match em palavras que não deviam).

```js
"ninja Oinga Winga Ainga 725 625 776 517"
/[a-zA-Z]inja/g //-> 4 matches
/[a-z]inja/g //-> 1 match
/[0-9]7/g //-> 2 matches
```

(A syntax pode parecer um pouco confusa, o que está acontecendo é que os ranges 'A-Z', '0-9' e 'a-z' são considerados apenas como um caractere, assim como quaisquer outros, por essa razão são colocados um do lado do outro da mesma forma que as letras ou números.)

<br><br>

### Repetindo Caracteres

Para evitar escrever vários ranges em sequência, exite as **chaves**. O que elas fazem é pegar o caractere ou range antes delas e repeti-los n vezes (Valor dentro das chaves). Para definir os ranges usa-se o seguinte modelo: `{valor inicial , valor final}`.

```js
"88542 662 11 33 9877"
/[0-9]{1,3}/g //-> 3 matches 662, 11 e 33. (De um (minímo possível) até três caracteres)
/[0-9]{3,}/g //-> 3 matches 662, 88542 e 9877 (De quatro até ao infinito de caracteres)
```

O **sinal de mais** é simplesmente usado como se fosse `{1,}`.

```js
"Living the dream in America"
/i+/g // -> 4 matches.
```

Em resumo:

```js
                 // Dará match em...
                     
/n{2,5}/g        // todos os 'n' de dois à cinco digitos.
/[a-z]{7,}/g     // quaisquer palavras que possuam de sete ao infinito de digitos.
/[0-9]{8}/g      // apenas números com exatos oito digitos.  
/n+/g            // todos os 'n' do texto.
/[nkj]+/g        // todos os 'n', 'k' e 'j' do texto.
```

<br><br>

### Metacharacters

Existem certos tipos de caracteres que possuem significados especiais e esses são os **Metacharacters**. Eles são representados por uma **barra inversa** seguida de um caractere.

Metacharacter | Dará Match nos...
------ | ------
| \d | digitos numéricos [0-9]. |
| \w | caracteres de palavras [A-Za-z0-9 _]. |
| \s | espaços em branco (Tabs, spaces, etc). |
| \t | caracteres 'tab'. |

<br>

```js
"k 8 P 9 3 3"
/\w\s\d/g // -> 3 Matches ("k 8" , "P 9" e "3 3").

/*  
    O que esse RegEx está procurando é qualquer tipo de combinação de 
    caracteres que comecem com uma letra/número/_ , em seguida um tipo  
    de espaço e que por fim termine com algum número.
*/ 
```

<br><br>

### Special Characters

Além dos caracateres 'diferentes' que já foram mostrados ({}, [], +, etc) existem outros adicionais:

Special<br>Character | Explicação
------ | ------
| . | Dará match em qualquer digito (incluindo simbolos),<br> exceto os enters. |
| ? | Fará o caractere anterior a ele ser opcional. |
| * | Dará match caso o caractere anterior não aparecer,<br> aparecer uma ou várias vezes. |
| $ | Match em qualquer string que possuirem aqueles <br>caracteres no final. |
| ^ | (Quando usado no começo) Fará o mesmo que o $ porém<br> para o inicio das expressões. |

```js
"carros"

/ca./ // -> 1 match (Também funcionaria 'caa', 'cab', 'cat', 'ca4', etc)
/ca?rros?/g // -> 1 match (Fará match em ambos 'carro', 'carros', 'crro' e 'crros')
/car*/ // -> 1 match ('carr', porém poderia ser 'ca', 'car', 'carrrrr', etc)
/ros$/ // -> 1 match (Também funcionaria 'dros', 'ros', '@ros', 'yrrsros', etc)
/^car/ // -> 1 match (Também funcionaria 'car12', 'car54534', 'carfgs', etc)

/.+/ // -> 6 matches (Qualquer string que tenha pelo menos 1 digito.)
```

Para dar match nos símbolos especiais literalmente utilize a barra inversa e em seguida o caractere (assim como nos metacharacters).

```js
"*Are you ok?*"

/k\?/ // -> 1 Match
/\*A/ // -> 1 Match
```

Os specials caracters também são considerados como um caractere normal, logo é possível usa-los nas expressões como qualquer outro.

```js
"*?*?*?"
/[\*\?]+/ // -> 6 Matches
```

Imagine que num form precisa-se de dar match em uma string de exatos três caracteres, porém no caso de um palavra maior o que fazer? Usar os caracteres especiais.

```js
"akl ewqhteheh jkl"

/[a-z]{3}/gi // -> 5 matches, sendo que eu queria apenas dois deles
/^[a-z]{3}$/gi // -> 2 matches, os que eu precisava
```

<br><br>

### RegEx com Javascript 

Para conseguir utilizar o RegEx no javascript utilize o modelo:

```js
var resultado = "String Aqui".match(/ExpressaoAqui/);
```

O resultado sempre será um array com os matches da tipagem string, mesmo se apenas um match for feito o resultado será um array com 1 item.

Há também a possíbilidade de usar strings como variáveis para as expressões.

```js
// new RegExp("touhou", "ig") ---> /touhou/ig

var match = "cool";
var flags = "gi";
var cool = "You're so cool man, so cool...";
var expression = new RegExp(match, flags);

// Array com 2 values.
var result = cool.match(expression);
```