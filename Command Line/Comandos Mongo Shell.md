# Comandos Mongo Shell

[Referência para os métodos e comandos Mongo Shell.](https://docs.mongodb.com/manual/reference/mongo-shell/)

> (DA) = no database atual.

| Descrição | Comando |
| --- | --- |
| Listar os comandos | `help` |
| Listar databases | `show dbs` |
| Criar um data base | `use <nomeDb>` |
| Usar um database diferente | `use <nomeDb>` |
| Listar as collections (DA) | `show collections` |
| Criar uma collection (DA) | `db.createCollection('<nome>');` |
| Listar os dados da collection | `db.<nomeCollection>.find();` |
| Melhor visualização da collection | `... .find().pretty();` |
| Organizar por algum criterio | `... .find().sort();` |

<br><br>

# Crud Operations

> (C) = db.<nomeCollection>

## Create

| Descrição | Comando |
| --- | --- |
| Criar um dado (Em formato de objeto) | `(C).insert(<Objeto>);` |

## Delete

| | |
| Deletando algum dado | `(C).delete({<CriterioBusca>})` |

Caso vários dados possuirem o mesmo critério, todos eles são deletados.

## Update

| | |
| --- | --- |
| Atualizar alguma informação | `(C).update({<CriterioBusca>}, <InfoAtualizada>)` |

Exemplo:

```js
// Achando o usuário pela id e depois atualizando o nome. Também funciona para criar novos parâmetros.
db.usuarios.update({_id:"113"}, {first_name:"Josh"});
```

Nota: o `update()` funciona de certa forma que, toda vez que é usado, ele deleta todos as informações do dado e depois as cria novamente com as informações passadas no segundo parâmetro. Para evitar que dados importantes sejam perdidos, é usado o `$set{}` logo ele só atualizará as informações necessárias e não deletará o resto. <br>

Exemplo:

```js
db.usuarios.update({_id:"113"}, {$set:{last_name:"George"}});
// Com o $set -> {_id:"113", first_name:"Josh", last_name:"George"}
// Sem o $set -> {_id:"113", last_name:"George"}
// O "_id" é o própio MongoDB que disponibiliza, logo não é removivel.
```

| | |
| --- | --- |
| Deletando parâmetros dos dados (`$unset`) | `(C).update({<CriterioBusca>}, {$unset:{<Key e Value>}})` |
| Renomear algum parâmetro (`$rename`) | `(C).update({<CriterioBusca>}, {$rename:{"<KeyAntiga>":"<KeyNova>"}})` |

