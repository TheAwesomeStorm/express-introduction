import { Author } from "../models/Author.js";

export class AuthorController {
    static readAuthors(req, res) {
        Author.find((err, books) => {
            res.status(200).json(books);
        });
    }

    static readAuthorById(req, res) {
        const id = req.params.id;

        Author.findById(id, (err, books) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Autor não encontrado` });
                return;
            }
            res.status(200).json(books);
        });
    }

    static  createAuthor(req, res) {
        const book = new Author(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Erro no cadastro` })
                return;
            }
            res.status(201).send(book.toJSON());
        });
    }

    static updateAuthor(req, res) {
        const id = req.params.id;
        Author.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Autor atualizado'});
                return;
            }
            res.status(500).send({ message: err.message });
        });
    }

    static deleteAuthor(req, res) {
        const id = req.params.id;

        Author.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            res.status(200).send({ message: 'Autor removido' });
        });
    }
}
