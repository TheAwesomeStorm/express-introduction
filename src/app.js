import express from 'express';

const app = express();

const livros = [
  {
    id: 1,
    title: 'Teste'
  },
  {
    id: 2,
    title: 'title'
  }
]

app.get('/', (req, res) => {
  res.status(200).send('Build with Node.js and express');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

export default app;
