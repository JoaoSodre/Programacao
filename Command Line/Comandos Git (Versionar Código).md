# Comandos Git

> Nota: Toda vez que um nome terminar com T nos exemplos, significa `.TipoDoArquivo` (Como .txt, .exe, .bat, etc).

| Descrição | Comando |
| --- | --- |
| Clonar Repositório<br> (Nome é opcional) | `git clone (UrlRepositorio) (Nome)` |
| Mostra a situação atual do<br> repositório | `git status` |
| Adicionar arquivos novos<br>(Cheque antes com `git status`) | `git add .` ou `git add (ArquivoT)` |
| Dar um commit<br>(Mensagem é obrigatório) | `git commit -m "Mensagem"` |
| Dar um push<br><br> Nota: Ele sempre pedirá o seu<br>usuário e senha, use o SSH<br> para evitar isso| `git push origin (NomeBranch)` |
| Mudar de Branch | `git checkout (NomeBranch)` |
| Criar um branch | `git checkout -b (NomeBranch)` |
| Lista os branches <br> do projeto | `git branch` |
| Juntar as alterações <br>de um branch com o<br>que você está <br>atualmente | `git merge (BranchComAlterações)` |
| Criar uma tag (Super <br>útil para marcar algo importante<br> na linha do tempo) | `git checkout (ShaId)` depois `git tag (NomeTag)` |
| Para acessar o commit<br> de uma tag | `git checkout (NomeTag)` |
| Listar as tags | `git tag` |