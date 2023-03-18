// no package.json do curso, o nodemon foi criado como devDependencies, mas não sei se isso faz diferença 
const express = require('express');
const app = express();
const port = 3000;  
const db = require('./db/connection');

app.listen(port, () => {
    console.log(`Example 2 app listening at http://localhost:${port}`);
});

/* o mínimo para fazer rodar este programa é:
const express = require('express');
const app = express();
const port = 3000;  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});*/

//db connection
db
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});


/* mas temos que fazer uma rota para conseguir utilizar este app*/
//routes
app.get('/', (req, res) => {
    res.send('Está funcionando 2');
});
