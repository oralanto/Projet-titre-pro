const db = require('../database');

class Game {
    id;
    title;
    author;
    editor;
    releaseYear;
    avgDuration;
    minPlayers;
    maxPlayers;
    suggestedAge;
    
    // camelCase ici, snake_case côté BDD
    set min_players(val) {
        this.minPlayers = val;
    }

    set max_players(val) {
        this.maxPlayers = val;
    }

    set min_age(val) {
        this.minAge = val;
    }

    set release_year(val) {
        this.releaseYear = val;
    }

    set avg_duration(val) {
        this.avgDuration = val;
    }

    set suggested_age(val) {
        this.suggestedAge = val;
    }

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {

        const { rows } = await db.query('SELECT * FROM game;');

        return rows.map(game => new Game(game));
    }

    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM game WHERE id = $1;', [id]);

        return new Game(rows[0]);
    }

    // // pas statique car propre à chaque instance
    // async save() {
    //     // props de this => insérer une ligne dans la bdd
    //     const { rows } = await db.query(`SELECT * FROM new_game($1);`, [this]);

    //     this.id = rows[0].id;
    // }
}

module.exports = Game;