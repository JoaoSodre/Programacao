# [Mocha](https://www.npmjs.com/package/mocha)

Mocha é usado para fazer teste durante a aplicação para se ter certeza de que tudo está funcionando corretamente, com ele muitas das vezes é possível encontrar bugs e erros no código facilmente.<br>

Todos os arquivos que o Mocha irá checar precisam estar dentro de uma pasta chamada 'test' para funcionar. Os arquivos nesta pasta podem usar comandos especiais que o Mocha disponibiliza.<br>

Antes de tudo, para que o Mocha funcione é necessário um comando dentro dos scripts do package.json com o simples valor de 'mocha' e depois executa-lo no command-line.

```js
// Package.json
"scripts": {
	"test" : "mocha"	
}
```

```shell
> npm run test
```

O primeiro método é o `describe()` que é o local onde está descrito o que está sendo testado. 

Dentro da função de callback do `describe()`, haverá os blocos `it()`, cada bloco desse possui um nome e faz um teste. 

Dentro da função de callback do `it()`, haverá o método `assert()` que esperará por um resultado booleano. Baseado nesse resultado, ele mostrará no console um resultado positivo (verde) ou negativo (vermelho com os erros). O sistema não sabe quando parar de fazer os testes, por isso usa-se o parâmetro `done` que irar atuar como um marcador quando o código for finalizado. 

```js
//Para o 'assert' funcionar é preciso fazer o require
const assert = require('assert');

describe('Descreva o que está sendo testado aqui', function(){

	//Criando um teste
	it('Teste número um', function(done){

		/* Mostrará se o teste deu certo */
		assert(5 + 5 === 10);
		done();
	});

	it('Teste número dois', function(done){

		/* ou Errado */
		assert(6 * 6 === 22);
		done();
	});
});
```

### Outros Métodos

* `before()`: Executará uma vez antes de todos os testes.
* `beforeEach()`: Executará antes de todos os testes, ou seja, antes de todos os `it()`.
* `after()`: Executará uma vez depois de todos os testes.
* `afterEach()`: Executará depois de todos os testes, ou seja, depois de todos os `it()`.