

## High Order Functions

São basicamente funções que levam uma ou várias funções como parâmetros

```javascript
var A = (func) => func()

var B = () => console.log("That's how High Order Functions work")

A(B);
```