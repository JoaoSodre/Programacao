# jQuery

[Site Original](https://jquery.com/)

O jQuery é um framework utilizado para primariamente corrigir incompatibilidades dos browsers com comandos javascript. Alem disso ele criou sua propia forma de syntax utilizando a escrita do css para selecionar os elementos.<br><br>

Syntax do jQuery: `$(Seletor).Ação();`<br><br>

$ = Em vez de usar "document.getElementBy..." o jQuery substitui todos esses comandos pelo simbolo de sifrão ($)<br>
Seletor = Mesmos seletores que o Css utiliza para os elementos Html<br>
Ação() = Método que ele irá utilizar.

```javascript
$("#nome"); <=> document.getElementbyId("nome");
$(".Par1"); <=> document.getElementbyClass("Par1");

// Todos os <input> do algoritmo (Também retorna em um array).
$("input");
```

[Todos seletores do jQuery](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

```javascript
/* Para colocar um valor no input se usa o método 
'.val( valor )' em vez da atribuição comum (=) */

$("input").val("Olá 123");

/* Nota: TODOS os <input> ficaram com esse valor,
inclusive o que está escrito nos botões */
```

[Todos os métodos (ações) do jQuery para Html/Css](https://www.w3schools.com/jquery/jquery_ref_html.asp)

## Ajax

Com o jQuery é possível fazer uma aplicação [Assíncrona](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/Orienta%C3%A7%C3%A3o%20a%20Eventos.md#orienta%C3%A7%C3%A3o-a-eventos), ou seja a página não precisará recarregar toda vez que tiver uma solicitação ou envio de dados para o servidor.