const db = require('../database');

class Role {
    id;
    name;

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    // static async findAll() {

    //     const { rows } = await db.query('SELECT * FROM role;');

    //     return rows.map(role => new Role(role));
    // }

    // static async findOne(id) {
    //     const { rows } = await db.query('SELECT * FROM role WHERE id = $1;', [id]);

    //     return new Role(rows[0]);
    // }

    // // pas statique car propre à chaque instance
    // async save() {
    //     // props de this => insérer une ligne dans la bdd
    //     const { rows } = await db.query(`SELECT * FROM new_role($1);`, [this]); 

    //     this.id = rows[0].id;
    // }
}

module.exports = Role;