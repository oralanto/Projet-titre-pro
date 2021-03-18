const db = require('../database');
const User = require('./user');
const Category = require('./category');
const Localisation = require('./localisation');

class Advert {
    id;
    title;
    description;
    publicationDate;
    locationPrice;
    advertImage;
    gameTitle;
    gameAuthor;
    gameReleaseYear;
    gameAvgDuration;
    gameMinPlayers;
    gameMaxPlayers;
    gameSuggestedAge;
    gameLocalisationId;
    userId;
    gameId;
    image;

    set publication_date(val) {
        this.publicationDate = val;
    }

    set location_price(val) {
        this.locationPrice = val;
    }

    set advert_image(val) {
        this.advertImage = val;
    }

    set game_title(val) {
        this.advertTitle = val;
    }

    set game_author(val) {
        this.advertAuthor = val;
    }

    set game_release_year(val) {
        this.advertReleaseYear = val;
    }

    set game_avg_duration(val) {
        this.advertAvgDuration = val;
    }

    set game_min_players(val){
        this.advertMinPlayers = val;
    }

    set game_max_players(val) {
        this.advertMaxPlayers = val;
    }

    set game_suggested_age(val) {
        this.advertSuggestedAge = val;
    }

    set user_id(val) {
        this.userId = val;
    }

    set game_id(val) {
        this.advertId = val;
    }

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const query = `
            SELECT advert.*, localisation.department, localisation.postal_code, localisation.city, "user".pseudo FROM advert 
            JOIN localisation ON localisation.id = advert.localisation_id
            JOIN "user" ON "user".id = advert.user_id
            ORDER BY publication_date DESC LIMIT 30
        `;
        const {rows} = await db.query(query);
        return rows.map(advert => {
            advert.postalCode = advert.postal_code;
            delete advert.postal_code;
            delete advert.localisation_id;
            return {
                advert: new Advert({
                    id: advert.id,
                    title: advert.title,
                    advertImage: advert.advert_image,
                    publicationDate: advert.publication_date,
                    locationPrice: advert.location_price
                }),
                user: new User({
                    pseudo: advert.pseudo
                }),
                localisation: new Localisation({
                    city: advert.city,
                    department: advert.department
                })
            }
            
        })
    }

    static async findFilteredAdverts(queryString) {

        let text;
        const values = [queryString.text]
        
        text = `
            SELECT DISTINCT ON (advert.id) advert.id AS advertId, advert.*, "user".pseudo, localisation.city, localisation.department FROM advert
            JOIN "user" ON "user".id = advert.user_id
            JOIN advert_has_category ON advert_has_category.advert_id = advert.id
            JOIN localisation ON localisation.id = advert.localisation_id
            WHERE (advert.title ILIKE '%' || $1 || '%'
                OR advert.description ILIKE '%' || $1 || '%' 
                OR advert.game_title ILIKE '%' || $1 || '%')
        `;

        if(queryString.categoriesId) {
            const categoriesNumber = queryString.categoriesId.split(',').map(category => parseInt(category, 10));
            categoriesNumber.forEach(number => values.push(number));
            text += `AND (advert_has_category.category_id IN (`;
            for(let i = 1; i < values.length; i++) {
                if(i === values.length - 1) text+= `$${i+1}))`;
                else if(values[i]) text+= `$${i+1},`;
            }
        }

        if(queryString.localisationId) {
            values.push(parseInt(queryString.localisationId, 10));
            text += `AND (localisation.department = (
                SELECT department FROM localisation WHERE localisation.id = $${values.length}
            ))`
        }

        try {
            const { rows } = await db.query(text, values);
            if(!rows[0]) {
                throw new Error('Aucune annonce ne correspond à votre recherche');
            }
            return rows.map(advert => {
                advert.postalCode = advert.postal_code;
                delete advert.postal_code;
                return {
                    advert: new Advert({
                        id: advert.id,
                        title: advert.title,
                        advertImage: advert.advert_image,
                        publicationDate: advert.publication_date,
                        locationPrice: advert.location_price
                    }),
                    user: new User({
                        pseudo: advert.pseudo
                    }),
                    localisation: new Localisation({
                        city: advert.city,
                        department: advert.department
                    })
                }
                
            })
        } catch (error) {
            throw new Error(error.message)
        }
        
    }

    static async findOne(id) {
        const query = {
            text: 
            `
                SELECT 
                    advert.*, advert.id advert_id, "user".email, "user".pseudo, "user".phone_number, category.*, localisation.*
                FROM advert
                JOIN "user" ON advert.user_id = "user".id
                JOIN advert_has_category ON advert_has_category.advert_id = $1
                JOIN category ON advert_has_category.category_id = category.id
                JOIN localisation ON advert.localisation_id = localisation.id
                WHERE advert.id = $1
            `,
        
            values: [id]
        }
        const { rows } = await db.query(query);

        if(rows[0]) {
    
            // this object is used to organise the data we receive from the database 
            const data = {
                user: new User({
                    pseudo: rows[0].pseudo,
                    email: rows[0].email,
                    phone_number: rows[0].phone_number
                }),
                advert: new Advert({
                    id: rows[0].advert_id,
                    title: rows[0].title,
                    description: rows[0].description,
                    publication_date: rows[0].publication_date,
                    location_price: rows[0].location_price,
                    advert_image: rows[0].advert_image,
                    game_title: rows[0].game_title,
                    game_author: rows[0].game_author,
                    game_release_year: rows[0].game_release_year,
                    game_avg_duration: rows[0].game_avg_duration,
                    game_min_players: rows[0].game_min_players,
                    game_max_players: rows[0].game_max_players,
                    game_suggested_age: rows[0].game_suggested_age,
                }),
                category: [],
                localisation: new Localisation({
                    city: rows[0].city,
                    postal_code: rows[0].postal_code,
                    department: rows[0].department,
                })
            }

            rows.forEach(advert => {
                const category = {
                    name: advert.name,
                    color: advert.color
                }
                data.category.push(new Category(category))
            })
            return data; 
        } else {
            throw new Error('Aucune annonce ne correspond à votre requête.');
        }
    }

    static async save(theAdvert){
        let insertQuery;

        const selectQuery = {
            text: `SELECT id FROM localisation WHERE city = $1`,
            values: [theAdvert.city]
        }
    
        const advertData = [
            theAdvert.title,
            theAdvert.description,
            theAdvert.locationPrice,
            theAdvert.advertImage,
            theAdvert.gameTitle,
            theAdvert.gameAuthor,
            theAdvert.gameReleaseYear,
            theAdvert.gameAvgDuration,
            theAdvert.gameMinPlayers,
            theAdvert.gameMaxPlayers,
            theAdvert.gameSuggestedAge,
            theAdvert.userId
        ];
        const categoryData = [];
        
        theAdvert.categories.forEach(async (theCategory) => {
            const selectCategoryQuery = {
                text: `SELECT id FROM category WHERE name = $1`,
                values: [theCategory.name]
            }
            const { rows } = await db.query(selectCategoryQuery);
            categoryData.push(rows[0].id)
        })

        if (theAdvert.userId){
            insertQuery = `
            INSERT INTO advert (title, description, location_price, advert_image, game_title, game_author, game_release_year, game_avg_duration, game_min_players, game_max_players, game_suggested_age, "user_id", localisation_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id;
            `;
        }

        try {
            const city = await db.query(selectQuery);
            advertData.push(city.rows[0].id);
            const {rows} = await db.query(insertQuery, advertData);

            for (let i=0; i < categoryData.length; i++) {
                const query2 = {
                    text: `
                        INSERT INTO advert_has_category (advert_id, category_id) VALUES ($1, $2)
                    `,
                    values: [rows[0].id, categoryData[i]]
                }
                await db.query(query2);
            }
            return 'Votre annonce a bien été mise en ligne.'
        } catch (error) {
            throw new Error('Votre annonce n\'a pas été enregistrée')
        }
    
    }

    static async update (theAdvert) {
        
        let updateQuery ;

        const selectQuery = {
            text: `SELECT id FROM localisation WHERE city = $1`,
            values: [theAdvert.city]
        }

        const advertData = [
            theAdvert.id,
            theAdvert.title,
            theAdvert.description,
            theAdvert.locationPrice,
            theAdvert.advertImage,
            theAdvert.gameTitle,
            theAdvert.gameAuthor,
            theAdvert.gameReleaseYear,
            theAdvert.gameAvgDuration,
            theAdvert.gameMinPlayers,
            theAdvert.gameMaxPlayers,
            theAdvert.gameSuggestedAge
        ];

        const categoryData = [];

        theAdvert.categories.forEach(async (theCategory) => {
            const selectCategoryQuery = {
                text: `SELECT id FROM category WHERE name = $1`,
                values: [theCategory.name]
            }
            const { rows } = await db.query(selectCategoryQuery);
            categoryData.push(rows[0].id)
        })
        
        if (theAdvert.id){
            updateQuery = `
                UPDATE advert
                SET
                    title = $2,
                    description = $3,
                    location_price = $4,
                    advert_image = $5,
                    game_title = $6,
                    game_author= $7,
                    game_release_year = $8,
                    game_avg_duration= $9,
                    game_min_players = $10,
                    game_max_players = $11,
                    game_suggested_age = $12,
                    localisation_id = $13
                WHERE id = $1
                RETURNING id;
            `;  
        }
        try {
            const city = await db.query(selectQuery);
            advertData.push(city.rows[0].id);
            const {rows} = await db.query(updateQuery, advertData);

            const deleteRequest = {
                text: `
                    DELETE FROM advert_has_category WHERE advert_id = $1;
                `,
                values: [theAdvert.id]
            }

            await db.query(deleteRequest);

            for (let i=0; i < categoryData.length; i++) {
                const query2 = {
                    text: `
                        INSERT INTO advert_has_category (advert_id, category_id) VALUES ($1, $2)
                    `,
                    values: [rows[0].id, categoryData[i]]
                }
                await db.query(query2);
            }
            return 'Votre annonce a bien été mise à jour.'
        } catch (error) {
            throw new Error('Votre annonce n\'a pas été mise à jour')
        }
    }

    static async deleteOne(id, userInfo) {
        const checkRightsQuery = {
            text: `SELECT user_id FROM advert WHERE id = $1`,
            values: [id]
        }

        const deleteQuery = {
            text: 'DELETE FROM advert WHERE id = $1',
            values: [id]
        }

        
        try {
            const {rows} = await db.query(checkRightsQuery);
            if(!rows[0]) {
                throw new Error('Impossible de supprimer cette annonce');
            }

            if(rows[0].user_id === userInfo.id || userInfo.role === 'admin') {
                await db.query(deleteQuery);
                return 'Votre annonce a bien été supprimée';
            } else {
                throw new Error('Vous n\'avez pas les droits pour supprimer cette annonce');
            }
         
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async findUserAdverts(userId) {
        const query = {
            text: `
                SELECT advert.id AS advertId, advert.*, localisation.city FROM advert 
                JOIN localisation ON localisation.id = advert.localisation_id
                WHERE advert.user_id = $1
            `,
            values: [userId]
        }

        try {
            const {rows} = await db.query(query);
            if(!rows[0]) throw new Error('Vous n\'avez créé aucune annonce.')
            return rows.map(advert => {
                return {
                    advert: new Advert({
                        id: advert.id,
                        title: advert.title,
                        advertImage: advert.advert_image,
                        publicationDate: advert.publication_date,
                        locationPrice: advert.location_price
                    }),
                    localisation: new Localisation({
                        city: advert.city,
                    })
                }
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

}

module.exports = Advert;