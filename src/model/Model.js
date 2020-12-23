class Model {
    constructor() {
        this._games = [
            {
                id: 0,
                time: "0:00:00",
                clickCounter: 555,
                gamePosition: [1,2,3],
            }
        ]
    }

    getGames = () => this._games;

    saveNewGame = newGame => {
        this._games.push(newGame);
    }
}

module.exports = Model;
