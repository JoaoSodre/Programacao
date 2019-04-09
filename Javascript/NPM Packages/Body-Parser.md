# [Body-Parser](https://www.npmjs.com/package/body-parser)

[Outros Middlewares Populares](https://github.com/azat-co/cheatsheets/tree/master/express4#connect-middleware)<br>

Muitas das vezes quando se lida com um POST de um OBJETO o node poderá simplesmente não conseguir lidar com eles de forma correta, muitas das vezes irá renderizar como [object Object], undefined, null etc. O método 'toString()' não conseguirá também lidar com esses dados.<br>

É aqui que o Body-Parser entra, ele atua como **middleware** fazendo com que os POSTS renderizem de forma correta antes de irem para o objeto 'req.body'.

```javascript
var bodyParser = require('body-parser');

// Middleware que lida com os problemas de objetos
var url = bodyParser.urlencoded({ extended: false });

app.post('/', url, function(req,res){
	console.log(req.body);
	res.render('index');
});
```