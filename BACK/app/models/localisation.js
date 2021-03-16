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

    static async filteredCities(city) {
        const query = {
            text: `
                SELECT * FROM "localisation"
                WHERE city ILIKE $1 || '%' ORDER BY city ASC LIMIT 10;`,
            values: [city]
        }
       
        try {
            const { rows } = await db.query(query);
            return rows.map(localisation => new Localisation(localisation));
        } catch (error) {
            throw new Error('Aucune ville ne correspond à votre recherche');
        }
    }
}

module.exports = Localisation;