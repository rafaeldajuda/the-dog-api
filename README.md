# THE DOG API

## Descrição e Objetivo do Projeto
Este projeto tem como objetivo consumir uma API chamada "The Dog API" que possui uma listagem de descrições e imagens de cachorros. O projeto basicamente lista os objetos da API fornecida pela "The Dog API" e guarda os dados retornados em um banco de dados.

## The Dog API
A "The Dog API" é uma API pública que retorna informações de cacharros. A API pode ser acessada pelo sequinte link: https://thedogapi.com/

## Tecnologias Utilizadas no Projeto
<table>
  <tr>
    <td>Axios</td>
    <td>0.24.0</td>
    <td>Utilizado para fazer chamadas http</td>
  </tr>
  <tr>
    <td>Config</td>
    <td>3.3.6</td>
    <td>Utilizado para centralizar as variáveis de configurações do projeto</td>
  </tr>
  <tr>
    <td>mongoose</td>
    <td>6.1.3</td>
    <td>Banco de dados</td>
  </tr>
</table>

## Projeto

Toda a lógica da aplicação encontra-se dentro da pasta **app**.

![app](https://user-images.githubusercontent.com/32685475/147426909-a5dcd31b-d7c7-4ff8-9ca6-4b85aae2d0bb.png)

Dentro da pasta app existe as seguintes subpastas:
- database
- model
- pkg
- services

### Database
Responsável por fazer a conexao com o banco de dados. O banco de dados utilizado foi o mongodb.

### Model
Possui os modelos dos documentos do mongodb. Foram feitos dois modelos: Dog e PageControl.</br>
**Dog:** Modelo que reprensta o JSON retornado pela API "The Dog API"</br>
**PageControl:** Modelo utilizado para controlar a paginação da API "The Dog API"

### PKG
Diretório onde fica a função chamada **saveDog** responsável por chamar a função **getDogs**, controlar a paginação e salvar os dados no banco.

### Services
Diretório onde fica as classes responsáveis pela chamadas de APIs externas. Dentro de services exista a classe chamada **TheDogsAPI** que possui a função **getDogs** utilizada para fazer requisições de listagem.

## Como Rodar o Projeto

Para rodar o projeto basta rodar o comando **npm start** ou **node app/index.js**. Antes de rodar a aplicação é importante configurar os acessos do banco de dados na pasta **config** que se encontra-se no diretório raiz do projeto e verificar o token utilizado na API "The Dog API" também na pasta config.
