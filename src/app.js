import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/routes.js';
import books from "./models/Book.js";

db.on("error", console.log.bind(console, 'Connection error'));
db.once("open", () => {
  console.log("Connection with database established");
});

const app = express();

routes(app);

export default app;
