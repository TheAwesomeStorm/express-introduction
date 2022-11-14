import express from "express";
import { AuthorController } from "../controllers/authorController.js";

export const authorRoutes = express.Router();

authorRoutes
    .get('/authors', AuthorController.readAuthors)
    .get('/authors/:id', AuthorController.readAuthorById)
    .post('/authors', AuthorController.createAuthor)
    .put('/authors/:id', AuthorController.updateAuthor)
    .delete('/authors/:id', AuthorController.deleteAuthor);
