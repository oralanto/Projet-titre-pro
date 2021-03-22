const db = require('../database');
const hashService = require('../services/passwordHandler');

class User {
    id;
    firstname;
    lastname;
    pseudo;
    email;
    password;
    phoneNumber;
    roleId;
    localisationId;

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    set phone_number(val) {
        this.phoneNumber = val;
    }

    set role_id(val) {
        this.roleId = val;
    }

    set localisation_id(val) {
        this.localisationId = val;
    }

    static async findAll() {

        const { rows } = await db.query(`SELECT * FROM "user"`);

        return rows.map(user => new User(user));
    }

    static async findOne(data) {
        const query = {
            text : `SELECT "user".*, localisation.city FROM "user" JOIN localisation ON localisation.id = "user".localisation_id WHERE "user".id = $1`,
            values : [data]
        }
            
        try {
            const { rows } = await db.query(query);
            delete rows[0].role_id;
            delete rows[0].localisation_id;
            delete rows[0].password;
            return new User(rows[0]);
        }catch (error){
            throw new Error('Aucun profil correspondant au vôtre.');
        }
    }

    static async checkIfExist(data) {

        const query = {
            text: `
                    SELECT "user".id, pseudo, password, role.name FROM "user" 
                    JOIN role ON role.id = "user".role_id
                    WHERE "user".email = $1`,
            values: [data.email]
        }

        const { rows } = await db.query(query);

        if(!rows[0]) {
            throw new Error('Mauvais email ou mot de passe')
        }

        const match = await hashService.comparePassword(data.password, rows[0].password);
        
        if(match) {

            return new User({
                id: rows[0].id,
                pseudo: rows[0].pseudo,
                role: rows[0].name 
            })
        } else {
            throw new Error('Mauvais email ou mot de passe')
        }
            
    }

    async save() {
        this.password = await hashService.hashPassword(this.password);

        const selectQuery = {
            text: `SELECT id FROM localisation WHERE city = $1`,
            values: [this.city]
        }

        const insertQuery = {
            text: `
                INSERT INTO "user" (firstname, lastname, pseudo, email, password, phone_number, localisation_id)
                VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING pseudo;
            `,
            values: [this.firstname, this.lastname, this.pseudo, this.email, this.password, this.phoneNumber]
        }



        try {
            const city = await db.query(selectQuery);
            insertQuery.values.push(city.rows[0].id)
            const { rows } = await db.query(insertQuery);
            if(rows[0]) {
                return rows[0];
            } else {
                throw new Error('Incription invalide, veuillez réessayer');
            }
        } catch (error) {
            switch (error.constraint) {
                case 'unique_email':
                    throw new Error('Cet Email existe déjà');
                    break;
                case 'unique_pseudo':
                    throw new Error('Ce pseudo existe déjà');
                    break;
                case 'unique_phone_number':
                    throw new Error('Ce numéro de téléphone existe déjà');
                    break;
                default:
                    throw new Error('Inscription invalidée, veuillez réessayer');
                    break;
            }
        }
    }

    static async delete(data) {
        const query = {
            text : `DELETE FROM "user" WHERE id = $1`,
            values : [data]
        }
            
        try {
            const { rows } = await db.query(query);
            return 'Votre compte a bien été supprimé.';
        }catch (error){
            throw new Error('Quelque chose s\'est mal passée, veuillez réessayez.');
        }
    }

    async update() {

        const selectQuery = {
            text: `SELECT id FROM localisation WHERE city = $1`,
            values: [this.city]
        }

        const updateQuery = {
            text: `
                UPDATE "user" SET
                    firstname = $2,
                    lastname = $3,
                    pseudo = $4,
                    email = $5,
                    phone_number = $6,
                    localisation_id = $7
                WHERE id = $1
                RETURNING id
            `,
            values: [this.id, this.firstname, this.lastname, this.pseudo, this.email, this.phoneNumber]
        }

        try {
            const city = await db.query(selectQuery);
            updateQuery.values.push(city.rows[0].id);
            const { rows } = await db.query(updateQuery);
            if(rows[0]) {
                return 'Votre profil a bien été mis à jour';
            } 
            
        } catch (error) {
            switch (error.constraint) {
                case 'unique_email':
                    throw new Error('Cet Email existe déjà');
                    break;
                case 'unique_pseudo':
                    throw new Error('Ce pseudo existe déjà');
                    break;
                case 'unique_phone_number':
                    throw new Error('Ce numéro de téléphone existe déjà');
                    break;
                default:
                    throw new Error('Mise à jour invalidée, veuillez réessayer');
                    break;
            }
        }
    
    }

}

module.exports = User; 