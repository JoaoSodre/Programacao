# Javascript (Front-end)

* [Introdução](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/Javascript%20(Front-end).md#introdu%C3%A7%C3%A3o-ao-html-dom)
* [jQuery](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/Javascript%20(Front-end).md#jquery)
  * [Ajax](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/Javascript%20(Front-end).md#ajax)

## Introdução ao HTML DOM

O HTML Dom é basicamente como se consegue, muda, adiciona ou deleta elementos HTML usando o Javascript.

> [Referência para o HTML Dom](https://www.w3schools.com/js/js_htmldom_document.asp)

```javascript
document.getElementbyId(""); // Procura um elemento pela tag
document.getElementbyClass(""); // Procura um elemento pela class
document.getElementbyName(""); // Procura um elemento pelo atributo name
```

<br>

Com esse método é possivel colocar numa variável e fazer alterações no Html usando o javascript.<br>
Exemplo:

```html
<table border="1" id="Tabela1">
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

 Já para um elemento que fecha em si mesmo, atributo `value` irá retornar o valor que está dentro do mesmo

```html
<input type="text" id="nome" placeholder="Coloque seu nome" /> <br>
<input onclick="Cadastrar()" type="button" value="Me pressione!" />
```

```javascript
// Console
function Cadastrar() {
  alert(document.getElementById("nome").value);
}

// Irá alertar o valor que está dentro do input com o id "nome"
Cadastrar();
```

[Exemplo de site usando o '.value' e '.innerHTML'](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/SitesAleatorios/Testando_DHTML_e_Atributos.html)

<br><br>

## jQuery

[Site Original](https://jquery.com/)

O jQuery é um framework utilizado para primariamente corrigir incompatibilidades dos browsers com comandos javascript. Alem disso ele criou sua propia forma de syntax utilizando a escrita do css para encontrar os elementos.<br><br>
Syntax do jQuery: `$(SeletorCss).Ação()`

```javascript
/* Em vez de usar "document.getElementBy..." o jQuery 
substitui todos esses comandos pelo simbolo de sifrão ($).

É necessário declarar o parâmetro da mesma forma que no css, 
além do mais ele os retornará em um array os elementos */
 
$("#nome") <=> document.getElementbyId("nome")
$(".Par1") <=> document.getElementbyClass("Par1");

// Todos os <input> do algoritmo (Também retorna em um array).
$("input");
```

```javascript
/* Para colocar um valor no input se usa o método 
'.val( valor )' em vez da atribuição comum (=) */

$("input").val("Olá 123");

/* Nota: TODOS os <input> ficaram com esse valor,
inclusive o que está escrito nos botões */
```

### Ajax

Com o jQuery é possível fazer uma aplicação 'ajax', ou seja a página não precisará recarregar toda vez que tiver uma solicitação ou envio de dados para o servidor.
