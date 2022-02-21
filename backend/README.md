# API AvaFilmes
## Projeto hospedado no Heroku
* Para Acessar o projeto (API) online [Clique Aqui](https://api-ava-filmes.herokuapp.com/movies/page/1)
## FrontEnd consumindo essa API
* Para Acessar o projeto frontend online [Clique Aqui](https://frontend-ava-filmes.herokuapp.com/)
* Para Acessar o projeto frontend no GitHub [Clique Aqui](https://github.com/silas-silva/AvaFilmes_Frontend)
## Informações Gerais 
* API Simples para pratica de conhecimentos
* API para listagem de filmes e series com avaliação e possibilidade de avaliar os itens ja cadastrados
* A API foi desenvolvida em NodeJS 

## Rotas
## GET
### Rota de Listagem
o parâmetro 'num', faz referencia ao numero da pagina no sistema de paginação.
*     https://api-ava-filmes.herokuapp.com/movies/page/:num
Exemplo:
* https://api-ava-filmes.herokuapp.com/movies/page/1
* O que retorna nessa rota.

    ```json
    {
        "page": 1,
        "pagFilmes": 4,
        "filmes": [
            {
            "id": 4,
            "titulo": "The Witcher",
            "notaAvaliacao": 4.08333,
            "numAvaliacoes": 6,
            "imagem": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg"
            },
            //Retorna 9 filmes dessa forma
        ]
    }
    ```
### Rota para selecionar 1 item
o parâmetro 'id', faz referencia a um item do banco
*     https://api-ava-filmes.herokuapp.com/movies/:id
Exemplo:

* https://api-ava-filmes.herokuapp.com/movies/24
* O que retorna nessa rota.    

    ```json
    [
        {
            "id": 24,
            "titulo": "O Espetacular Homem-Aranha 2: A Ameaça de Electro",
            "notaAvaliacao": 5,
            "numAvaliacoes": 2,
            "imagem": "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg"
        }
    ]        
    ```
## POST
### Rota para inserir nova avaliação
o parâmetro 'id', faz referencia item no banco que vaio ser inserido uma nova avaliação.
*     https://ava-filmes.herokuapp.com/review/:id
Exemplo:
* https://ava-filmes.herokuapp.com/review/24
é Necessário passar um arquivo JSON na seguinte forma no corpo da requisição

    ```Json
    {
        "email": "email aqui",
        "review": 0 //Nota aqui
    }
    ```
## Conhecimentos Obtidos 
* Express
* Cors
* Construção de API
* Knex para gerenciar banco de dados
* Mysql
* Deploy

## Iniciando o Projeto
* Clone ou baixe o projeto
* Execute o seguinte comando na pagina do projeto
    ```npm
     npm install
    ```
* Instale o nodemon globalmente na maquina
    ```npm
     npm install -g nodemon
    ```
* Instale o banco de dados MySQL, e copie o banco que está em "src/scriptsDB" na pasta do projeto 

* mude os dados de conexão com o banco em "src/connection/database.js" os dados vão estar da seguinte forma
    ```js
        connection: {
            host: process.env.MYSQL_HOST, //Host do banco 
            user:  process.env.MYSQL_USER, //Usuário
            password:  process.env.MYSQL_PASSWORD, //Senha
            database:  process.env.MYSQL_DATABASE, //Nome do banco
        }
    ```

* Execute o comando
    ```npm
     npm run dev
    ```
* A API estará sendo executada na porta 3030 : localhost:3030