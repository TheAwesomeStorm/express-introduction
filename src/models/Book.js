import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        _id: { type: String },
        title: { type: String, required: true },
        author: { type: String, required: true },
        publisher: { type: String, required: true },
        pages: { type: Number, required: true }
    }
);

const books = mongoose.model('books', bookSchema);

export default books;
