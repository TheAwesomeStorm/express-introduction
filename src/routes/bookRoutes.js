import express from 'express';
import { BookController } from "../controllers/bookController.js";

const router = express.Router();

router
    .get('/books', BookController.readBooks)
    .get('/books/search', BookController.searchByPublisher)
    .get('/books/:id', BookController.readBookById)
    .post('/books', BookController.createBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook);

export default router;
