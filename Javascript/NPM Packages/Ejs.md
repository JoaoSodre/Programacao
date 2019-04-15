# [Ejs](https://www.npmjs.com/package/ejs)

Ejs é um dos packages do Node e com ele é possível basicamente implementar o javascript dinâmico em uma página html.<br>

Com esse tipo de ferramenta não é preciso criar uma página que contém os mesmos aspectos para cada usuário, apenas um modelo servirá.<br>

> Nota: Com o Express é possível instalar o Ejs com o comando `express --view=ejs`, o que ajuda muito para não precisar usar o tempo para configurar tudo na aplicação.

Ativando o Ejs através Express:

```javascript
// O método '.set()' funciona da mesma forma que um EventEmmiter
app.set('view engine','ejs');
```

Quando setamos um view engine (templates) o Express por padrão irá olhar na pasta '/views' e vai ser nela em que os arquivos `.ejs` irão ficar. Esses arquivos fazem **exatamente** o mesmo que o documento html, porém adicionando o js dinâmico. É nesta pasta que vai ficar os modelos como o index, páginas de erros, páginas de usuários, rotas para outras partes da aplicação etc.<br><br>

**Usando o Ejs**

[Todos os tipos de tags do Ejs](https://www.npmjs.com/package/ejs#tags)

Para usar o Ejs em um documento se usa um tipo de especial de tag que irá no documento html, dentro dele irá o nome do parâmetro que foi enviado via documento .js.<br>

Syntax (Enviar Dados via Ejs): `res.render((NomeTemplate), {Parâmetro : valor, ... })`

```javascript
/*  /App.js  */

app.get('/users/:nome', function(req,res){

	/* Renderizá o 'perfilUsuario.ejs' e 
	adicionará os parâmetros do objeto): */
	res.render('perfilUsuario', { pessoa: req.params.nome });
});
```

```html
<!--  /views/perfilUsuario.ejs  -->

<h1>Olá <%= pessoa %>, bem vindo a sua página!</h1>
```

Com ele também é possível renderizar outros templates quando um POST for feito.

```javascript
app.post('/cadastro', function(req,res){

	/* Quando um post for feito na rota '/cadastro', 
	irá renderizar esse template */

	res.render('cadastro-sucesso');
});
```

<br><br>

Essa é apenas uma das formas que é possível integrar o Ejs com o html, outra forma seria com
condicionais/loopings no html.

```html
<% for(i = 0 ; i < pessoas.length ; i++) { %>
	<tr>
		<td><%= pessoas[i].nome %></td>
	</tr>
<% } %>
```

```javascript
app.get('/users/:nome', function(req,res){
	res.render('perfilUsuario', { pessoa: [ req.params.nome, "Eduardo", "Gabriel" ]});
});
```

Também funcionam dentro de atributos nas tags html.

```html
<input type="text" title="<%= value %>"/>
```

<br><br>

**Partial Views**

Partial Views são partes códigos em arquivos separados para serem usados toda vez que derem o include neles, logo você não precisa fazer o mesmo código para todos os seus templates (O que é pêssimo pois se precisar fazer uma pequena mudança, terá que se fazer em todos os arquivos), apenas uma vez com o include já fará a mudança em todos os templates.

```html
<!--  partials/nav.ejs  -->
<nav>
	<ul>
		<li><a href="/"> Home </li>
		<li><a href="/contatos"> Contatos </li>
	</ul>
</nav>
```

Fazendo o include em diversos arquivos. O path deve ser relativo ao arquivo que está fazendo-o.

```html
<!--  Home.ejs  -->

<% include partials/nav.ejs %>
<h1>Bem vindo ao site!</h1>

<!-- *Conteúdo Home page* -->
```

```html
<!--  Contatos.ejs  -->

<% include partials/nav.ejs %>
<h1>Contatos Abaixo:</h1>

<!-- *Conteúdo Contatos page* -->
```

Agora quando renderizar tanto a home quanto a página de contatos, ambas vão estar com o mesmo painel de navegação, não precisou-se de reescrever o mesmo código para as duas, apenas um include.