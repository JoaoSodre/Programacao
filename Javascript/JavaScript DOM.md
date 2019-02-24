# JavaScript DOM

#### Introdução ao Javascript DOM

Com o Javascript DOM (Document Object Model), o JavaScript consegue acessar e mudar todos os elementos de um documento HTML.

> [Referência para o Js Dom](https://www.w3schools.com/js/js_htmldom_document.asp)

```javascript
document.getElementbyId("");    // Procura um elemento pela tag
document.getElementbyClass(""); // Procura um elemento pela class
document.getElementbyName("");  // Procura um elemento pelo atributo name
document.querySelector("");     // Procura o elemento pelo seletor css
```

<br>

Com esses métodos é possivel colocar-los numa variável e fazer alterações no Html usando o javascript.<br>
Exemplo:

```html
<!-- Html -->

<table border="1" id="Tabela1">
  <tr>
    <td> Nome </td>
    <td> Sobrenome </td>
    <td> Endereço </td>
  </tr>
</table>
```

```javascript
/* Javascript */

// O 'innerHTML' retornará exatamente o que está dentro da tag, em forma de STRING.
// Colocando o elemento na váriavel 'A'
var A = document.getElementById("Tabela1").innerHTML;

// Para checar, basta apenas usá-lo no console
console.log(A);
```

Com isso é possível fazer as alterações desejadas.

```javascript
document.getElementbyId("Tabela1").innerHtml += "<p> Olá </p>"

// ou

A += "<p> Olá </p>"
```

```html
<!-- Enquanto isso no html -->

<table border="1" id="Tabela1">
  <tr>
    <td> Nome </td>
    <td> Sobrenome </td>
    <td> Endereço </td>
  </tr>
</table><p> Olá </p>
```

 Já para um elemento que fecha em si mesmo, atributo `value` retornará o valor que está dentro do mesmo

```html
<input type="text" id="nome" placeholder="Coloque seu nome" /> <br>
<input onclick="Cadastrar()" type="button" value="Me pressione!" />
```

```javascript
// Console
function Cadastrar() {
  alert(document.getElementById("nome").value);
}

// Alertará o valor que está dentro do input com o id "nome"
Cadastrar();
```