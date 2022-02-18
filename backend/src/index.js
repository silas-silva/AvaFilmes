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

//End of Routes


app.listen(port, (err) => {
    if (err) {
        console.log("❌ Não foi possível iniciar o servidor ❌");
    }
});