# JSON

**O que é JSON?**

JSON (JavaScript Object Notation) é tipo de formato de dados leve que é usado para enviar e receber dados do server em forma de texto. Ele é baseado nos objetos do Javascript. Também é facil de ler e escrever, e pode ser usado com o [AJAX](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/AJAX.md#ajax).<br>

A simplicidade do JSON resultou no seu uso global, especialmente como um substituto do XML no AJAX. Uma vantagem de usar JSON em vez de XML é que os formatos de data são muito mais fáceis de escrever com o JSON parser.

**Tipos de dados que podem ser usados com JSON**

* Números.
* String.
* Booleano.
* Null.
* Array e Objetos.

Dados JSON NÃO podem ser:

* Funções.
* Datas.
* Undefined.

**Regras de Syntax JSON**

Quando se trata de objetos, a "key" (nome da variável) precisa de aspas duplas, enquando o "value" (valor da variável) não precisa, com excessão das strings que precisam em ambos as aspas. Além das aspas duplas as keys precisam de começar com a primeira letra minúscula.

> No caso de strings de aspas simples, também será preciso aspas duplas.

```json
{
    "nome": "João",
    "area": "TI",
    "isMember" : true,
    "favgames": ["IWBTB", "Touhou"]   
}
```

A extensão para esse tipo de arquivo se chama ".json".<br>
A extensão MIME para esse tipo de arquivo é "Application/json".

**Métodos JSON**

`JSON.stringify(obj)` = Irá colocar as aspas duplas em todos os keys e values (no caso de strings) de um objeto criado no ambiente Javascript.<br>
`JSON.parse(obj)` = Irá remover as aspas duplas de todos os keys de um objeto JSON.

```javascript
var obj = { name: "John", age: 31, likeCoffee: true, city: "New York" };

var json = JSON.stringify(obj);
console.log(json);
// -> {"name":"John", "age":31, "likeCoffee": true, "city":"New York"}

var objComum = JSON.parse(json);
console.log(objComum);
// -> {name:"John", age:31, likeCoffee: true, city:"New York"}
```
