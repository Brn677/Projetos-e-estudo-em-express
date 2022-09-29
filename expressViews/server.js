const express = require('express');
const app = express();
const routes = require('./routes'); //Exportei o arq.routes aqui.

app.use(routes); // Express usando as rotas criadas
app.use(express.urlencoded({extended: true}));  // Trata formulario enviado na req no método post.


// listen= evento que fica escutando na porta 3000, algum tipo de mudança.
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});