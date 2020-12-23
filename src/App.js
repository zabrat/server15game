const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;

        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.get('/allGames', this.onGetGames);
        this._app.post('/addNewGame', this.onSaveNewGame);
        this._app.post('/allGames/id', this.onSaveNewGame);
    }

    onGetGames = (req, res) => {
        const games = this._db.getGames();

        res.send(games);
        res.end();
    }

    onSaveNewGame = (req, res) => {
        const { body } = req;

        console.log(body)

        this._db.saveNewGame(body);
        res.end();
    }

    getApp = () => this._app;
}

module.exports = App;
