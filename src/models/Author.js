import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        birthCountry: { type: String }
    },
    {
        versionKey: false,
    }
);

export const Author = mongoose.model('authors', authorSchema);
