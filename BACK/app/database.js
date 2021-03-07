const { Pool } = require('pg');

// ici , les infos de connection sont récupérées dans l'environnement
// PGHOST pour l'hôte
// PGUSER pour l'utilisateur
// PGPASSWORD pour le mot de passe
//PGDATABASE pour la base de données
let db;

if(process.env.ENVIRONNEMENT === 'developpement') {
    db = new Pool();
} else if (process.env.ENVIRONNEMENT === 'production') {
    db = new Pool({
        user: process.env.RDS_USERNAME,
        host: process.env.RDS_HOSTNAME,
        database: process.env.RDS_DATABASE,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT,
    })
}

module.exports = db;