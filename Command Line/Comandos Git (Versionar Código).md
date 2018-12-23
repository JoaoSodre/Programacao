# Comandos Git

> Nota: Toda vez que um nome terminar com T nos exemplos, significa `.TipoDoArquivo` (Como .txt, .exe, .bat, etc).

> Nota²: O arquivo .gitignore é usado para bloquear arquivos que você não quer que sejam commitados, apenas que fiquem na sua máquina. Basta esquever o nome e a extensão do mesmo no .gitignore para que seja ignorado.

| Descrição | Comando |
| --- | --- |
| Criar um repositório | `git init` |
| Clonar Repositório<br> (Nome é opcional) | `git clone (UrlRepositorio) (Nome)` |
| Mostra a situação atual do<br> repositório | `git status` |
| Adicionar arquivos novos<br>(Cheque antes com `git status`) | `git add .` ou `git add (ArquivoT)` |
| Remover algum arquivo<br> (Antes de dar commit) | `git rm --cached (ArquivoT)` |
| Configurar email ou name<br> para identificar commits | `git config --global user.(email/nome) = "(Email/Nome)"` |
| Dar um commit<br>(Mensagem é obrigatório) | `git commit -m "(Mensagem)"` |
| Volta para uma versão<br> no passado (MUITO CUIDADO COM<br>ESSE COMANDO) | `git checkout (ShaId)`|
| Criar um branch<br>(Commit Atual) | `git branch (NomeBranch)` |
| Mudar de Branch | `git checkout (NomeBranch)` |
| Listar os branches <br> do projeto | `git branch` |
| Deletar um branch | `git branch -d (NomeBranch)` |
| Juntar as alterações <br>de um branch com o<br>que você está <br>atualmente | `git merge (Branch)` |
| Dar um push<br><br> Nota: Ele sempre pedirá o seu<br>usuário e senha, use o SSH<br> para evitar isso| `git push origin (NomeBranch)` |
| Criar uma tag (Super <br>útil para marcar algo importante<br> na linha do tempo) | `git tag (NomeTag)` |
| Adicionando comentário a<br>uma tag | `git tag -a (NomeTag) -m "Versão 2.0.0"` |
| Associar uma tag à um commit<br> passado |  `git tag -a (NomeTag) (ShaId)`|
| Para acessar o commit<br> de uma tag | `git checkout (NomeTag)` |
| Listar as tags | `git tag` |