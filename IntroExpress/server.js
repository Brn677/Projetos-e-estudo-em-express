const express = require('express');
const app = express();

//                       ROTA    ID    CHAVE  VALOR   CHAVE   VALOR
// http://facebook.com/profile/bruno?campanha=blabla&campanha=seila <- GET -> Entregue a página navegador.


//          criar   ler  atualizar apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//          POST    GET   PUT      DELETE

/*
app.get("/" , (req, res) => {   //requisição= o que o usuário pede ao servidor. resposta= o que o servidor retorna
    res.send('Estou respondendo a vc usuário'); //res.send= retorno do servidor
});
*/
app.use(express.urlencoded({extended: true}));  // Trata formulario enviado na req no método post.

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:nome?/:sobrenome?', (req, res) => { 
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.nome);
});

app.post('/', (req, res) => { 
    console.log(req.body);
    res.send(`O que voce me enviou isso aqui: ${req.body.nome}`);
});

// listen= evento que fica escutando na porta 3000, algum tipo de mudança.
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});