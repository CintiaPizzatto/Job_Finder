const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const Sequelize  = require('sequelize');
const bodyParser = require('body-parser'); // está sendo usado na rota jobs.js
const path       = require('path'); // está sendo usado na rota jobs.js


const PORT = 3000;

app.listen(PORT, function() {
  console.log(`O Express está rodando na porta ${PORT}`);
});

// body-parser (declaro que vou usar o body-parser)
// vamos utilizar o body-parser para pegar os dados do formulário e transformar em um objeto
// vamos utilizá-lo no express, então escrevemos app.use
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
  });

// routes
app.get('/', (req, res) => {
    res.send("Está funcionando");
});

// jobs routes
// vamos usar o "use" para usar o router
// esta linha nos habilita a usar as rotas do arquivo jobs.js
app.use('/jobs', require('./routes/jobs'));