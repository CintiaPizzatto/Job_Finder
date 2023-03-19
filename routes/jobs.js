const express = require('express'); // importa o express que cuida das rotas
const router  = express.Router(); // precisamos do objeto de rotas do express (.Router) para criar um objeto router
const Job     = require('../models/Job'); // importa o model Job

// testar a rota
router.get('/test', (req, res) => {
  res.send('deu certo');
});

// esta rota adicona os jobs ao objeto res.locals.jobs
// nesta função vamos ter uma requisição e uma resposta que vai tratar desta inserção de dados no sistema
//  esta função vai retornar uma PROMISSE, que é uma função assíncrona, então terá "then" e "catch"
// add job via post
// quando eu recebo dados, significa que vou ter um corpo (body) com os dados, por isso que instalamos "body-parser"
// o body-parser vai pegar o corpo da requisição e transformar em um objeto
// para pegar os dados do corpo da requisição, usamos o "req.body"
// para usarmos os dados do corpo da requisição, precisamos instalar o body-parser, que é um middleware
// o middleware é um código que vai ser executado antes de chegar na rota
// para usar o body-parser, precisamos importar o body-parser e usar o método "urlencoded" com o parâmetro "extended: false" no app.js
router.post('/add', (req, res) => { 
    // vamos usar o "destructuring" do ES6 para criar várias variáveis com os dados do corpo da requisição, que são os dados do formulário, que são os dados do objeto Job. 
    // o nome das variáveis tem que ser o mesmo nome dos campos do formulário
    // para isso, usamos a propriedade body do objeto req
    let { title, description, salary, company, email, new_job } = req.body;
    // já recebi na linha acima as informações dos campos e agora vou criar um novo objeto Job com estas informações:
    // insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
        .then(() => res.redirect('/')) /* redireciona para a página inicial. Já adicionou a vaga e agora retorna para a home */
        .catch(err => console.log(err)); /* se der erro, mostra no console o  erro */
});

module.exports = router
