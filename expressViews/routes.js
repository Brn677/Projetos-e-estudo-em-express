const express = require('express'); //Primeira coisa a fazer assim que criar arq."Ativando" + arq.routes.
const route = express.Router(); //Primeira coisa a fazer assim que criar arq."Ativando" + arq.routes.
const homeController = require('./homecontrollers'); 
const contatocontrollers = require('./controllers/contatocontrollers');

// exportei homeController pra cá.
// Exportei esse modulo pra server.js

//Rotas home
route.get('/' , homeController.paginaInicial);
route.post('/', homeController.trataPost);


//Rotas contato
route.get('/contato', contatocontrollers.paginaInicial);


module.exports = route;

//cria os controles no arquivo controles e exporta para o arquivo rotas e do arquivo rotas exporta para o arquivo server.js para ser usado.