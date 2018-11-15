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
| Mostra os branches <br> do projeto | `git branch` |
| Juntar as alterações <br>de um branch com o<br>que você está <br>atualmente | `git merge (BranchComAlterações)` |
