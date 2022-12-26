const express = require('express'); 
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const path = require("path");

/* Colocar toda a parte estática no frontend */
app.use(express.static('public'));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    });

app.get("/", (req,res) =>{
    res.render("index")
})
