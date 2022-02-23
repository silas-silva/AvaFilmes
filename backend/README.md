# API AvaFilmes
## Projeto hospedado no Heroku
### FrontEnd consumindo essa API
* Para Acessar o projeto frontend online [Clique Aqui](https://silas-silva.herokuapp.com/avaMovies)
* Para Acessar o projeto frontend no GitHub [Clique Aqui](https://github.com/silas-silva/avaFilmes)
## Informações Gerais 
* API Simples para pratica de conhecimentos
* API para listagem de filmes e series com avaliação e possibilidade de avaliar os itens ja cadastrados
* A API foi desenvolvida em NodeJS 

## Rotas
## GET
### Rota de Listagem
o parâmetro 'num', faz referencia ao numero da pagina no sistema de paginação.
*     /movies/page/:num
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
*     /movies/:id
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
*     /rate/:id
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
* Instale o banco de dados MySQL, e copie o banco que está em "src/scriptsDB" no diretório backend 

* mude os dados de conexão com o banco em "src/connection/database.js" os dados vão estar da seguinte forma
* Execute o comando
    ```npm
     npm run dev
    ```
* A API estará sendo executada na porta 3030 : localhost:3030