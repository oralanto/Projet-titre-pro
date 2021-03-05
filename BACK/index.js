require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const router = require('./app/router');

const session = require('express-session');
app.use(session({
    // mot de passe servant à crypter les infos
    secret: process.env.SECRET,
    // va sauvegarder une nouvelle session même si elle n'est pas modifiée
    saveUninitialized : true,
    // Resauvegarde une session à chaque requête même sans modifications (pas de date d'expiration)
    resave : true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => console.log(`server launched on http://localhost:${PORT}`))