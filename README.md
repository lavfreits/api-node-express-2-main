# Api node express
Projeto utilizado no curso da Alura

## Descrição do Projeto

Este projeto é uma aplicação desenvolvida como parte do aprendizado em Node.js e MongoDB. Ele consiste em uma API para gerenciar autores e livros, permitindo listar, cadastrar, atualizar e apagar registros de autores e livros.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para construção de aplicações server-side utilizando JavaScript.
- **Express.js**: Framework web para Node.js que simplifica o processo de criação de APIs.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **Mongoose**: Biblioteca ODM (Object-Document Mapping) para MongoDB em Node.js.

## Aprendizados

Durante o desenvolvimento deste projeto, aprendi os seguintes conceitos e tecnologias:

- Utilização do Node.js para criar aplicações server-side.
- Criação de APIs RESTful utilizando o Express.js.
- Integração de um banco de dados NoSQL (MongoDB) na aplicação Node.js.
- Utilização do Mongoose para modelagem e interação com bancos de dados MongoDB.
- Implementação de operações CRUD (Create, Read, Update, Delete) em uma API.
- Tratamento de requisições HTTP e respostas utilizando Express.js.
- Organização de rotas e controladores em uma aplicação Node.js.
- Manipulação de erros e exceções em uma aplicação Express.js.

## Executando o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório para sua máquina local.
2. Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.
3. Configure as variáveis de ambiente necessárias, como a string de conexão com o banco de dados MongoDB.
4. Instale as dependências do projeto executando o comando `npm install`.
5. Inicie o servidor executando o comando `npm start`.
6. A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **src/app.js**: Arquivo principal da aplicação, responsável por configurar o servidor Express.js e as rotas da API.
- **src/config/dbConnect.js**: Configuração de conexão com o banco de dados MongoDB.
- **src/erros/**: Diretório contendo classes de erro personalizadas para tratamento de exceções.
- **src/middlewares/**: Diretório contendo middlewares para tratamento de erros e manipulação de requisições.
- **src/controllers/**: Diretório contendo os controladores da aplicação, responsáveis por implementar a lógica de negócio das rotas.
- **src/routes/**: Diretório contendo os arquivos de definição de rotas da API.

## Rotas da API

### Autores

- **GET /autores**: Retorna uma lista de todos os autores cadastrados.
- **GET /autores/:id**: Retorna um autor específico com base no ID fornecido.
- **POST /autores**: Cadastra um novo autor.
- **PUT /autores/:id**: Atualiza os dados de um autor existente.
- **DELETE /autores/:id**: Apaga um autor com base no ID fornecido.

### Livros

- **GET /livros**: Retorna uma lista de todos os livros cadastrados.
- **GET /livros/:id**: Retorna um livro específico com base no ID fornecido.
- **GET /livros/busca?editora=nomeEditora**: Retorna uma lista de livros de uma editora específica.
- **POST /livros**: Cadastra um novo livro.
- **PUT /livros/:id**: Atualiza os dados de um livro existente.
- **DELETE /livros/:id**: Apaga um livro com base no ID fornecido.

## Considerações Finais

Este projeto serviu como uma excelente oportunidade de aprendizado em Node.js, Express.js, MongoDB e boas práticas de desenvolvimento de APIs. 
