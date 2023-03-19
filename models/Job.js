const Sequelize = require('sequelize');
const db = require('../db/connection');

// criar o model: Job    com um método chamado "define" do Sequelize
// estamos criando o objeto job
// poderíamos criar todos os models aqui, se houvesse mais de um
const Job = db.define('job', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    new_job: {
        type: Sequelize.INTEGER
    }
});

// vamos exportar par ausar em qualquer lugar do código
module.exports = Job

