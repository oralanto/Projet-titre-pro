class User {
    id;
    firstname;
    lastname;
    pseudo;
    mail;
    password;
    phoneNumber;
    roleId;
    localisationId;

    constructor(data = {}) {
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
}

module.exports = User;