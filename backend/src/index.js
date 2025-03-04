const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://dell2duo:nobugs@cluster0-7ge4d.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);