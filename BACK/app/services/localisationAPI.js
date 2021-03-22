const getLocalisations = async () => {

    require('dotenv').config();
    const fetch = require('node-fetch');
    const { Pool } = require('pg');
    // const db = new Pool({
    //     user: process.env.RDS_USERNAME,
    //     host: process.env.RDS_HOSTNAME,
    //     database: process.env.RDS_DATABASE,
    //     password: process.env.RDS_PASSWORD,
    //     port: process.env.RDS_PORT
    // });
    const db = new Pool();
    
    const response = await fetch('https://geo.api.gouv.fr/communes?&fields=nom,codesPostaux,departement');

    const frLocalisations = await response.json();

    for (const localisation of frLocalisations) {
        
        const query = {
            text: `
                INSERT INTO localisation (city, postal_code, department) VALUES ($1, $2, $3)
            `,
            values: [localisation.nom, localisation.codesPostaux[0], localisation.departement.nom]
        }
        
        try {
            await db.query(query);
        } catch (error) {
            console.log(error.message);
        }
    }

    db.end();

};

getLocalisations()

module.exports = {
    getLocalisations
};