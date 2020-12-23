class Model {
    constructor() {
        this._users = [
            {
                id: 0,
                age: 26,
                phone: 555,
                userName: 'Musa',
            }
        ]
    }

    getUsers = () => this._users;

    saveNewUser = newUser => {
        this._users.push(newUser);
    }
}

module.exports = Model;
