import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();


class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
        this.settings();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(express.static(path.join(__dirname,'..','public')))
    }

    routes() {
    }

    settings() {
        this.express.set('port', process.env.PORT || 3000);
    }
}

module.exports = new App().express;