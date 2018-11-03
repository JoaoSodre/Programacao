# Javascript (Front-end)

* [Introdução](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/Javascript%20(Front-end).md#introdu%C3%A7%C3%A3o)
* [jQuery](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/Javascript%20(Front-end).md#jquery)
* [Node.js](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/Javascript%20(Front-end).md#nodejs)

## Introdução

> Em Html, para chamar os scripts de outros arquivos, basta eles estarem salvos em `.js` e serem referenciados atravez das tags `<script src=".js"></script>`

O javascript possui várias maneiras de se interligar com o Html, algumas delas são

```javascript
document.getElementbyId(""); // Procura um elemento pela tag
document.getElementbyClass(""); // Procura um elemento pela class
document.getElementbyName(""); // Procura um elemento pelo atributo name
etc..
```

<br>

Com esse método é possivel colocar numa variável e fazer alterações no Html usando o javascript.<br>
Exemplo:

```html
<table border="1" id="Par1">
  <tr>
    <td> Nome </td>
    <td> Sobrenome </td>
    <td> Endereço </td>
  </tr>
</table>
```

```javascript
// O 'innerHTML' irá retornar exatamente o que está dentro da tag, em forma de STRING.
// Colocando o elemento na váriavel 'A'
var A = document.getElementById("Par1").innerHTML;

// Para checar, basta apenas usá-lo no console
console.log(A);
```

Com isso é possível fazer as alterações desejadas.

```javascript
document.getElementbyId("Par1").innerHtml += "<p> Olá </p>"

// ou
A += "<p> Olá </p>"
```

```html
<!-- Enquanto isso no html -->
<table border="1" id="Par1">
  <tr>
    <td> Nome </td>
    <td> Sobrenome </td>
    <td> Endereço </td>
  </tr>
</table><p> Olá </p>
```





<!-- 
#### _Outros comandos importantes_ 

.fucus = foca o mouse em algum espaço em branco

## jQuery

[Site Original](https://jquery.com/)

## Node.js

[Site Original](https://nodejs.org/en/)
-->
