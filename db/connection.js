const sequelize = require(`sequelize`);
const Sequelize = require(`sequelize`);
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
})  

// Path: db\connection.js
module.exports = sequelize
