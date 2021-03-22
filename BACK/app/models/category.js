const db = require('../database');

class Category {
    id;
    name;
    color;

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const query = `SELECT * FROM category`;
        try {
            const {rows} = await db.query(query);
            return rows.map(category => new Category(category));
        } catch (error) {
            throw new Error('Aucune catégorie trouvée')
        }
    }
}

module.exports = Category;