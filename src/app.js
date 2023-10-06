const express = require('express');

const app = express();

app.get('/', (req, res) => { // http://localhost:3003/
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/Ola', (req, res) => { // http://localhost:3003/Ola
  res.send('<h1>Olá Mundo!</h1>');
});

module.exports = app;
