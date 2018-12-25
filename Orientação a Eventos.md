# Orientação a Eventos

> Também pode ser referenciado como 'Programação Assíncrona'

A orientação a eventos, diferente de programas tradicionais que seguem um fluxo de controle padronizado (como se fosse uma fila),  programas orientados a evento são guiados por indicações externas, chamados de eventos.<br><br> Ou seja, em vez de seguir um comando após o outro, um de cada vez (da maneira **blocante**), na programação assíncrona ele executa vários comandos ao mesmo tempo, todos eles dando um **callback** (Ação) quando finalizados.<br><br>

Exemplo (Em Javascript):

```javascript
setTimeout(() => {alert("Função1: Fui executado em primeiro!"); }, 4000); 
setTimeout(() => {alert("Função2: Fui executado em segundo!"); }, 1000); 
```

Mesmo a Função1 seja executada antes, a Função2 que aparecerá primeiro, ou seja quem for mais rápido aparecerá primeiro, isso é programação assíncrona.<br><br>