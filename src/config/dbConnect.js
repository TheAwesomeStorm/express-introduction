import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mongodb:mongodb@node-express.ugvsh8o.mongodb.net/node-express");

export default mongoose.connection;
