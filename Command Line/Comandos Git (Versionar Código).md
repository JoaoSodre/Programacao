# Comandos Git

> Nota: Toda vez que um nome terminar com T nos exemplos, significa `.TipoDoArquivo` (Como .txt, .exe, .bat, etc).

| Descrição | Comando |
| --- | --- |
| Criar um repositório | `git init` |
| Clonar Repositório<br> (Nome é opcional) | `git clone (UrlRepositorio) (Nome)` |
| Mostra a situação atual do<br> repositório | `git status` |
| "Puxar" os arquivos do<br> repositório (Podem haver conflitos) | `git pull` |
| Voltar para uma versão<br> no passado (MUITO CUIDADO<br> COM ESSE COMANDO) | `git checkout (ShaId)`|
| <br><br> | |
| Configurar email ou name<br> para identificar commits | `git config --global user.(email/nome) = "(Email/Nome)"` |
| Adicionar arquivos novos<br>para commitar (Cheque antes <br>com `git status`) | `git add .` ou `git add (ArquivoT)` |
| Remover algum arquivo<br> (Antes de dar commit) | `git rm --cached (ArquivoT)` |
| Dar um commit<br>(Mensagem é obrigatório) | `git commit -m "(Mensagem)"` |
| Dar um push<br>(Ele sempre pedirá o usuário<br> e senha na primeira vez.) | `git push origin (NomeBranch)` |
| <br><br> | |
| Criar um branch<br>(Commit Atual) | `git branch (NomeBranch)` |
| Mudar de Branch | `git checkout (NomeBranch)` |
| Listar os branches <br> do projeto | `git branch` |
| Deletar um branch | `git branch -d (NomeBranch)` |
| Juntar as alterações <br>de um branch com o<br>que você está <br>atualmente | `git merge (Branch)` |
|<br><br> | |
| Criar uma tag (Super <br>útil para marcar algo importante<br> na linha do tempo) | `git tag (NomeTag)` |
| Adicionando comentário à tag | `git tag -a (NomeTag) -m "Version 2.0.0"` |
| Associar a tag à um commit<br> feito no passado |  `git tag -a (NomeTag) (ShaId)`|
| Para acessar o commit<br> de uma tag | `git checkout (NomeTag)` |
| Listar as tags | `git tag` |
| <br><br> |  |

### .gitignore

O arquivo .gitignore é usado para bloquear arquivos e pastas que você não quer que sejam commitados e que apenas que fiquem na sua máquina. Basta escrever dentro do arquivo um comando por linha para que ele funcione. O .gitignore sempre usará o repositório em que ele está como referência.<br>

Ig. = Ignorará

| Descrição | Comando |
| --- | --- |
| Fazer um comentário | `# (Comentário)` |
| Ig. uma pasta e todos<br>os seus arquivos | `(Pasta)/`, `(Pasta)/(SubPasta)/` |
| Ig. um arquivo | `(ArquivoT)`, `(Pasta)/(ArquivoT)` |
| Ig. todos os arquivos<br> que terminam com a<br> determinada extensão | `*.exe` |
| Não ignora um arquivo,<br> apesar de houver um<br> comando como `*.md` | `!README.md`|
| Ig. tudo com uma das<br> letras nos colchetes | `[Bb]in/` -> Ig. as pastas bin/ e Bin/  |

> Nota: `!` Não funcionará se o arquivo estiver dentro de uma pasta ignorada

Exemplo:

```
# Ignorar todos arquivos
/*

# Exceto
!.md
!.js
```

### Git Bisect

O que o git bisect faz é achar um commit intermediário entre outros dois commit, sendo um deles a versão ruim (com algum bug) e o outro uma versão estável. Depois de ter dado os dois commits para o console, ele irá retornar um ShaId com um commit intermediário dos dois passados e automáticamente irá alterar o repositório da máquina. Agora basta saber se esse commit intermediário é uma versão estável ou não, depois que esse teste for feito basta indicar ao sistema que ele automáticamente irá alterando até sobrar uma versão e achar onde está o bug.

| Descrição | Comando |
| --- | --- |
| Iniciar o git bisect | `git bisect start` |
| Indicar qual commit está<br> bom para o bisect | `git bisect good (ShaId)` |
| Indicar qual commit está<br> com erro para o bisect | `git bisect bad (ShaId)` |
| Sair do modo bisect e<br> volta para a última versão dos<br> arquivos | `git bisect reset` |

Quando estiver no commit intermediário:

| Descrição | Comando |
| --- | --- |
| Indicar que a versão <br> é estável | `git bisect good` |
| Indicar que a versão <br> é instável | `git bisect bad` |