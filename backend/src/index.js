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

//End of Routes


app.listen(port, (err) => {
    if (err) {
        console.log("❌ Não foi possível iniciar o servidor ❌");
    }
});