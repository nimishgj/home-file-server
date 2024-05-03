const express = require('express')

const app = express();

const dotenv = require('dotenv').config();

app.use(express.json());

app.get('/', (request, response) => {
  response.status(200);
  response.send("Server is running, Go through the Documentation <a href='https://github.com/nimishgj/home-file-server/wiki'>here</a>");
})

app.listen(process.env.PORT, () => {
  console.log("Backend Server Started")
})
