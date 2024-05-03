const express = require('express')

const app = express();

const dotenv = require('dotenv').config();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200);
    response.send("Server is running, Go through the Documentation https://github.com/nimishgj/home-file-server/wiki");
})
