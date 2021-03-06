const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Post = require('./models/Post');

app.use((req, res, next) => {
    req.io = io;

    next();
})

/*Implementação*/
//definindo as rotas
const router = express.Router();
//router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);


app.use(cors()); // Permite que qualquer aplicação acesse o backend
app.use('/files', express.static(path.resolve(__dirname, '..','uploads','resized')));
//app.use('/files', express.static(path.resolve(__dirname, '..','uploads','resized')));

app.use(require('./routes'));
server.listen(3333);