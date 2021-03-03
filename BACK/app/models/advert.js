const db = require('../database');

class Advert {
    id;
    title;
    description;
    publicationDate;
    locationPrice;
    advertImage;
    advertTitle;
    advertAuthor;
    advertReleaseYear;
    advertAvgDuration;
    advertMinPlayers;
    advertMaxPlayers;
    advertSuggestedAge;
    userId;
    advertId;

    set publication_date(val) {
        this.publicationDate = val;
    }

    set location_price(val) {
        this.locationPrice = val;
    }

    set advert_image(val) {
        this.advertImage = val;
    }

    set advert_title(val) {
        this.advertTitle = val;
    }

    set advert_author(val) {
        this.advertAuthor = val;
    }

    set advert_release_year(val) {
        this.advertReleaseYear = val;
    }

    set advert_avg_duration(val) {
        this.advertAvgDuration = val;
    }

    set advert_min_players(val){
        this.advertMinPlayers = val;
    }


    set advert_max_players(val) {
        this.advertMaxPlayers = val;
    }

    set advert_suggested_age(val) {
        this.advertSuggestedAge = val;
    }

    set user_id(val) {
        this.userId = val;
    }

    set advert_id(val) {
        this.advertId = val;
    }

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {

        const { rows } = await db.query('SELECT * FROM advert;');

        return rows.map(advert => new Advert(advert));
    }

    static async findOne(id) {
        const query = {
            text: 
            `
                SELECT 
                    advert.*, "user".mail, "user".pseudo, "user".phone_number, category.*, localisation.*
                FROM advert
                JOIN "user" ON advert.user_id = "user".id
                JOIN advert_has_category ON advert_has_category.advert_id = $1 
                JOIN category ON advert_has_category.category_id = category.id
                JOIN localisation ON "user".localisation_id = localisation.id
            `,
            values: [id]
        }
        const { rows } = await db.query(query);

        if(rows[0]) {
            const advert = {
            }
            return new Advert(rows[0]); 
        } else {
            throw new Error('No such endpoint');
        }
    }
}

module.exports = Advert;