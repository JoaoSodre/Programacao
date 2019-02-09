# API

A API (Application Programming Interface) é uma interface de programação criada para que outras pessoas possam usufruir de seus **serviços e dados** porém que não podem ser alterados.

Existem dois tipos de APIs: Códigos e Serviços

<br>

## API de Códigos

São essencialmente padrões de código (ou seja uma interface) feitos para serem apenas usados e não modificados (Não tem controle sobre o conteúdo dela, bem parecido com os frameworks). As APIs possuem um **contrato** (documentação) que especificam como se deve utiliza-la.

<br><br>

## API de Serviços (ou API Web)

As API de Serviços são distintas em dois tipos: SOAP e REST 

### SOAP

Padrão de código: XML <br>

O SOAP (Simple Object Access Protocol) é um [protocolo](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#como-que-fazem-isso-protocols) para troca de informações que usa a linguagem de marcação XML para seu formato de mensagem. Devido ao SOAP ser bastante antigo, torna-se bastante díficil para a comunicação de duas línguagens diferentes.

### REST

Padrão de código: XML e JSON (Mais comum) <br>

O REST (Representational State Transfer) é um modelo de arquitetura baseado em http para  sistemas solicitantes acessem e manipulem representações textuais de recursos da Web usando um conjunto uniforme e predefinido de operações sem estado. Com o REST línguagens diferentes conseguem se comunicar (já que todos que trabalham com web precisam passar pelo http solucionando assim o problema do SOAP). O REST utiliza todos os [métodos http](https://github.com/JoaoSodre/Programacao/blob/master/Aplica%C3%A7%C3%B5es%20Back-End.md#m%C3%A9todos-http), ou seja os serviços REST utilizarão o http para fazer requests Get, Post, Delete e Put. Em um Web Services **RESTful**, requisições feitas a um URI extrairão uma resposta que pode estar em XML, JSON ou em algum outro formato.