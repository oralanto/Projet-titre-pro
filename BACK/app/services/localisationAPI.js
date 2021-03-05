const fetch = require('node-fetch');
const db = require('../database');

/**
 * Generates a Chuck Norris fact joke based on an external API
 * @returns {Promise<string>} la promesse d'une blague sur Chuck Norris
 */
const getLocalisations = async () => {
    const response = await fetch('https://geo.api.gouv.fr/communes?&fields=code,nom,departement');

    const frLocalisations = await response.json();

    for (const localisation of frLocalisations) {
        const query = {
            text: `
                INSERT INTO localisation (city, postal_code, department) VALUES ($1, $2, $3),
            `,
            values: [localisation.nom, localisation.code, localisation.departement.nom]
        }
        await db.query(query);
    }

    // console.log(theJoke.value)
};

getLocalisations()

module.exports = {
    getLocalisations
};