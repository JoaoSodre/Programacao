# JSON

**O que é JSON?**

JSON (JavaScript Object Notation) é um leve tipo de formato de dados e que é usado para enviar e receber dados para o server como texto é baseado nos objetos do Javascript. Ele também é facil de ler e escrever e pode ser usado com o [AJAX](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Eventos%20e%20AJAX.md#ajax).

**Tipos de dados que podem ser usados com JSON**

* Números (Igual ao Js, sem diferença entre decimais, inteiros, etc)
* String (String com caracteres Unicode, use aspas duplas)
* Booleano (True ou False)
* Null (Valor Vazio)
* Array e Objetos (Igual ao Js normal)

Dados JSON NÃO podem ser:

* Funções
* Datas
* Undefined

**Regras de Syntax JSON**

Quando se trata de objetos tanto a "key" quando o "value" (No caso de string) precisam de aspas duplas, no Js comum a key não precisa disso. Além das aspas duplas as keys precisam de começar com a primeira letra minúscula.

```json
{
    "nome":"João",
    "area":"TI",
    "favgames":["IWBTB","Touhou"]
}
```

A extensão para esse tipo de arquivo se chama ".json".

A extensão MIME para esse tipo de arquivo é "Application/json".

**Métodos JSON**

`JSON.stringify()` = Irá colocar as aspas duplas em todos os keys e values (No caso de strings com aspas simples) de um objeto criado no Js comum.<br>
`JSON.parse()` = Irá remover as aspas duplas de todos os keys de um objeto JSON.

```javascript
var obj = {name:"John", age:31, city:"New York"}


var json = JSON.stringify(obj);
console.log(json);
// -> {"name":"John", "age":31, "city":"New York"}


var objComum = JSON.parse(json);
console.log(objComum);
// -> {name:"John", age:31, city:"New York"}
```