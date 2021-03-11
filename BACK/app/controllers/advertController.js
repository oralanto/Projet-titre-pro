const { Advert } = require('../models/index');

const advertController = {

    async getAllAdverts(req, res) {
        try {
            const adverts = await Advert.findAll();
            res.json(adverts);
        } catch (error) {
            res.status(400).json(error.message)
        }
    },

    getFilteredAdverts : async (request, response) => {

        const query = request.query;
        const adverts = await Advert.findFilteredAdverts(query);
        response.json(adverts);
    },

    getOneAdvert : async (request, response) =>  {

        try {
            const { id } = request.params;

            const advertId = await Advert.findOne(id);

            response.json(advertId);

        } catch (error) {
            response.status(404).json(error.message);
        }
    },

};

module.exports = advertController;

