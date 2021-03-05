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

}

module.exports = Localisation;