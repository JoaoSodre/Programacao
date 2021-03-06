# jQuery

[Site do jQuery](https://jquery.com/)

O jQuery é um framework utilizado para primariamente corrigir incompatibilidades dos browsers com comandos javascript. Alem disso ele criou sua própia forma de syntax utilizando a escrita do css para selecionar os elementos. Para entender o jQuery é necessário ter conhecimento sobre [JavaScript DOM](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/JavaScript%20DOM.md#javascript-dom) <br><br>

Syntax do jQuery: `$(Seletor).Ação();`<br><br>

$ = Em vez de usar "document.getElementBy..." o jQuery substitui todos esses comandos pelo simbolo de sifrão ($)<br>
Seletor = Mesmos seletores que o Css utiliza para os elementos Html<br>
Ação() = Método que ele utilizará.

```javascript
$("#nome"); <=> document.getElementbyId("nome");
$(".Par1"); <=> document.getElementbyClass("Par1");

// Todos os <input> do algoritmo (Também retorna em um array).
$("input");
```

[Todos os métodos (ações) do jQuery para Html/Css](https://www.w3schools.com/jquery/jquery_ref_html.asp)
[Todos seletores do jQuery](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

```javascript
/* Para colocar um valor no input se usa o método 
'.val( valor )' em vez da atribuição comum (=) */

$("input").val("Olá 123");

/* Nota: TODOS os <input> ficarão com esse valor,
inclusive o que está escrito nos botões */
```

## AJAX com jQuery

Com o jQuery é possível fazer uma aplicação [AJAX](https://github.com/JoaoSodre/Programacao/blob/master/Javascript/AJAX.md#ajax), ou seja a página não precisará recarregar toda vez que tiver uma solicitação ou o envio de dados para o servidor.<br>

Fazendo requests GET com jQuery:

```js
// O 'get' já é assíncrono.
$.get("URL", function(res){

    // Quando a resposta estiver pronta, irá voltar nesse atributo
    console.log(res);
});

// A função 'get' do jQuery é equivalente ao mesmo que:
/*
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        console.log(xml.readyState);
        if (xml.readyState == 4 && xml.status == 200) {
            console.log(xml.response);
        }
    }
    xml.open('GET', "URL", true);
    xml.send();
*/
```

Fazendo requests POST com jQuery:

```js
$.post("URL", {data: "Dados do POST"}, function(resp){
    console.log(resp);
});

// A função 'post' do jQuery é equivalente ao mesmo que:
/*
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        console.log(xml.readyState);
        if (xml.readyState == 4 && xml.status == 200) {
            console.log(xml.response);
        }
    }
    xml.open('POST', "URL", true);
    xml.send("Something");
*/
```

<br>

Com o `$.ajax()` é possível passar dentro dele um objeto com todas as informações necessárias para fazer um request como qualquer outro, os métodos `$.get` e `$.post` são apenas uma versão reduzida do `$.ajax()`.

```js
$.ajax({
    type: "POST",
    data: {song:"Magical Astronomy - Necrofantasia"},
    url: "algumaAPI.com",
    success: function() { console.log("Deu certo!"); }
});

// type   : "GET" ou "POST".
// data   : O que enviar no caso de um POST.
// url    : "URL".
// success: Executará quando o response estiver pronto. (Muito bom para manipular o DOM)
```

