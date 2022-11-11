import express from 'express';
import db from './config/dbConnect.js';
import books from "./models/Book.js";

db.on("error", console.log.bind(console, 'Connection error'));
db.once("open", () => {
  console.log("Connection with database established");
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Build with Node.js and express');
});

app.get('/books', (req, res) => {
  books.find((err, books) => {
    res.status(200).json(books);
  });
});

app.get('/books/:id', (req, res) => {
  const index = searchBooks(req.params.id);
  return res.json(books[index]);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Livro cadastrado');
})

app.put('/books/:id', (req, res) => {
  const index = searchBooks(req.params.id);
  books[index].title = req.body.title;
  return res.json(books);
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  let index = searchBooks(id);
  books.splice(index, 1);
  res.send('Livro removido');
});

function searchBooks(id) {
  return books.findIndex((livro) => {
    return livro.id == id
  });
}

export default app;
