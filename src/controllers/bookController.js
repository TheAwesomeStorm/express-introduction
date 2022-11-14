import BookSchema from '../models/Book.js'

export class BookController {
    static readBooks(req, res) {
        BookSchema
            .find()
            .populate('author')
            .exec((err, books) => {
                res.status(200).json(books);
            });
    }

    static readBookById(req, res) {
        const id = req.params.id;

        BookSchema
            .findById(id)
            .populate('author', 'name')
            .exec((err, books) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Livro não encontrado` });
                    return;
                }
                res.status(200).json(books);
            });
    }

    static  createBook(req, res) {
        const book = new BookSchema(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Erro no cadastro` })
                return;
            }
            res.status(201).send(book.toJSON());
        });
    }

    static updateBook(req, res) {
        const id = req.params.id;
        BookSchema.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Livro atualizado'});
                return;
            }
            res.status(500).send({ message: err.message });
        });
    }

    static deleteBook(req, res) {
        const id = req.params.id;

        BookSchema.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            res.status(200).send({ message: 'Livro removido' });
        });
    }

    static searchByPublisher(req, res) {
        const publisher = req.query.publisher;
        BookSchema.find({ 'publisher': publisher }, {}, (err, books) => {
            res.status(200).send(books);
        })
    }
}
