import express from 'express';

const app = express();

app.use(express.json());

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

app.get('/livros/:id', (req, res) => {
  const index = searchBooks(req.params.id);
  return res.json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado');
})

app.put('/livros/:id', (req, res) => {
  const index = searchBooks(req.params.id);
  livros[index].title = req.body.title;
  return res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;
  let index = searchBooks(id);
  livros.splice(index, 1);
  res.send('Livro removido');
});

function searchBooks(id) {
  return livros.findIndex((livro) => {
    return livro.id == id
  });
}

export default app;
