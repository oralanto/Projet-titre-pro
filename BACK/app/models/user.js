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

    static async checkIfExist(data) {

        const query = {
            text: `SELECT firstname, lastname, pseudo, password FROM "user" WHERE "user".email = $1`,
            values: [data.email]
        }

        const { rows } = await db.query(query);

        if(!rows[0]) {
            throw new Error('Wrong email or password')
        }

        const match = await hashService.comparePassword(data.password, rows[0].password);
        
        if(match) {

            return new User({
                firstname: rows[0].firstname,
                lastname: rows[0].lastname,
                pseudo: rows[0].pseudo 
            })
        } else {
            throw new Error('Wrong email or password')
        }
            
    }

    async save() {
        this.password = await hashService.hashPassword(this.password);

        const query = {
            text: `
                INSERT INTO "user" (firstname, lastname, pseudo, email, password, phone_number, localisation_id)
                VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING pseudo;
            `,
            values: [this.firstname, this.lastname, this.pseudo, this.email, this.password, this.phoneNumber, this.localisationId]
        }

        const { rows } = await db.query(query);
        if(rows[0]) {
            return rows[0];
        } else {
            throw new Error('inscription failed');
        }
    }


}

module.exports = User;