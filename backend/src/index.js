const express = require("express");
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3030;

const database = require("./connection/database");

app.use(express.urlencoded({ extended: true })); // Allow object nesting which is the way JSON works
app.use(express.json()); // accept data in JSON

app.use((request, response, next) => { //configure in cors what can access the backend
    // * -> allow all URLs to access
    // 'url' -> permite 1 url acessar
    // ['url', 'url'] -> allow one or more URLs to access
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"); // Release which methods will be allowed access
    app.use(cors());
    next();
})

//Routes

//movie listing
app.get("/movies/page/:num", async (request, response) => {
    let page = request.params.num;
    let offset = 0;
    const limit = 9
    //check if the variable received a number, or a number less than 1
    if ( !isNaN(page) || page < 1) {
        // add value 1 in page
        page = 1
    }
    if (page == 1) { //if the variable has the number 1
        offset = 0;
    } else { //if the variable is a number greater than 1
        offset = (parseInt(page) - 1) * limit
    }

    //this block get number of pages with movies
    let numMovies = await database.count("id as filmes").table("filmes"); // Getting the number of movies from the DB
    // number of pages with movies there are, Math.ceil return the integer may or equal to X, EX: Math.ceil(1.9) return 2 
    numPages = Math.ceil(numMovies[0].filmes / 9)
    //End block

    database.select().table("filmes").limit(limit).offset(offset).then(filmes => {
        // Return status, and datas
        return response.status(200).send({ page, numPages, filmes });
    }).catch(err => {
        //console.log(err);
        return response.status(500).send({err});
    });
});

//Get a movie
app.get("/movies/:id", (request, response) => {
    const { id } = request.params;

    database.select().table("filmes").where({ id }).then(dados => {
        return response.status(200).send(dados);
    }).catch(err => {
        return response.status(500).send({err});
    });
});

//rate a movie
app.post("/rate/:id", async (request, response) => {
    const { id } = request.params;
    const { email, review } = request.body;
    let id_movie = parseInt(id);

    //Validate the review to be no greater than 5 and less than 0
    if (review < 0 || review > 5) {
        return response.status(400).send({ info: "Informe uma nota valida, 0 a 5" });
    }

    try {
        //Search for a user with a specific email in the DB
        const person = await database.select().table("usuarios").where({ email });
        let isMovie;
        try {
            //Search movie 
            isMovie = await database.select().table("filmes").where({ "id" : id_movie });
        } catch (error) {
            return response.status(500).send({ info: "Erro ao buscar Filme, ID invalido" });
        }

        if (isMovie.length == 1) { // found movie 
            if (person.length == 1) { // The user already exists will only post the review
                const id_user = data[0].id; //Get id user

                // Has user rated this movie?
                const alreadyRated = await database.select().table("notasfilme").where({ id_user, id_movie });

                if (alreadyRated.length == 1) { // If this movie has been rated, only the review will change.
                    await database.update({ review }).table('notasfilme').where({ id_user, id_movie });

                    const average = await database.avg("nota as review").table("notasfilme").where({ id_movie }); // Get the average movie review 
                    const noteReview = average[0].review;
                    await database.update({ noteReview }).table("filmes").where({ "id": id_movie }) //update the review in DB

                    return response.status(200).send({ info: "Nota do filme atualizada" });

                } else { //The user has not yet rated this movie. link the user to the movie and add the review
                    await database.insert({ id_user, id_movie, review }).into('notasfilme');

                    let numReviews = await database.count("id_filme as numReviews").table("notasfilme").where({ id_movie }); //Get number reviews the movie has
                    numReviews = numReviews[0].numReviews
                    await database.update({ numReviews }).table("filmes").where({ "id": id_movie }) //update data in DB        

                    const average = await database.avg("nota as review").table("notasfilme").where({ id_movie }); // Get the average movie review 
                    const noteReview = average[0].review;
                    await database.update({ noteReview }).table("filmes").where({ "id": id_movie }) //update the review in DB    

                    return response.status(200).send({ info: "Nota adicionada ao filme" });
                }

            } else { //User não existe precisa add user no banco de dados e depois adicionar a nota dele ao filme
                await database.insert({ email }).into('usuarios'); //Adicionar user ao banco
                let user = await database.select().table("usuarios").where({ email }); //Buscar o user adicionado 
                id_usuario = user[0].id; //Pegar o id do novo user
                await database.insert({ id_usuario, id_filme, review }).into('notasfilme'); // add relação entre filme e usuario e a nota do usuario]

                let avaliacoes = await database.count("id_filme as numAvaliacoes").table("notasfilme").where({ id_filme }); //Pega quantas avaliações o filme tem
                let numAvaliacoes = avaliacoes[0].numAvaliacoes
                await database.update({ numAvaliacoes }).table("filmes").where({ "id": id_filme }) //Atualiza o dado no banco           

                let media = await database.avg("nota as notaAvaliacao").table("notasfilme").where({ id_filme }); //Pega a nota media da avaliação de um filme 
                let notaAvaliacao = media[0].notaAvaliacao;
                await database.update({ notaAvaliacao }).table("filmes").where({ "id": id_filme }) //Atualiza a nota de avaliação do filme no banco

                return response.json({ info: "Nota adicionada ao filme" })
            }

        }else{ //Filme não foi encontrado na base de dados
            return response.json({ info: "Filme Inexistente" })
        }

    } catch (error) {
        console.log(error)
        return response.json({error : "Erro ao buscar Usuário"});
    }
});


//End of Routes

app.listen(port, (err) => {
    if (err) {
        console.log("❌ Não foi possível iniciar o servidor ❌");
    }
});