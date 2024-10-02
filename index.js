const express = require('express');
const server = express();
server.use(express.json());
const cors = require('cors');
const webs = require('ws');
const wsServer = new webs.Server({port:8080})

wsServer.on('connection', (ws)=>{
    console.log("entrou um")
})

//yarn start pra iniciar o server

const filmes = require('./src/data/filmes.json');
const pessoas = require('./src/data/pessoas.json');
const adm = require('./src/data/adm.json');
const estoque = require('./src/data/estoque.json')

server.use(cors());

server.get('/filmes', (req, res) => {
    return res.json(filmes);
});

server.get('/adm', (req, res) =>{
    return res.json(adm)
})

server.get('/pessoas', (req, res) => {
    return res.json(pessoas);
});

server.get('/estoque', (req, res) =>{
    return res.json(estoque);
})

server.post('/pessoas', function (req,res){
    pessoas.push(req.body)
    console.log(req.body)
});

//header('Access-Control-Allow-Origin: http://127.0.0.1:5500/index.html')

server.listen(3000, () => {
    console.log("ta funcionadno");
})