import express from 'express';
import bookRoutes from './bookRoutes.js';
import { authorRoutes } from './authorRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "Built with Node.js and express" })
    });

    app.use(
        express.json(),
        bookRoutes,
        authorRoutes
    );
}

export default routes;
