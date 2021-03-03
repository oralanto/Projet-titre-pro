const db = require('../database');

class Localisation {
    id;
    city;
    postalCode;
    department;
    
    // camelCase ici, snake_case côté BDD
    set postal_code(val) {
        this.postalCode = val;
    }

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    // static async findAll() {

    //     const { rows } = await db.query('SELECT * FROM localisation;');

    //     return rows.map(localisation => new Localisation(localisation));
    // }

    // static async findOne(id) {
    //     const { rows } = await db.query('SELECT * FROM localisation WHERE id = $1;', [id]);

    //     return new Localisation(rows[0]);
    // }

    // // pas statique car propre à chaque instance
    // async save() {
    //     // props de this => insérer une ligne dans la bdd
    //     const { rows } = await db.query(`SELECT * FROM new_localisation($1);`, [this]); 

    //     this.id = rows[0].id;
    // }
}

module.exports = Localisation;