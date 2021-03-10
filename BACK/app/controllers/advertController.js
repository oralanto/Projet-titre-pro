const { Advert } = require('../models/index');

const advertController = {

    async getAllAdvert(req, res) {
        res.json(await Advert.findAll(req.user.id))
    },

    getFilteredAdverts : async (request, response) => {
        const adverts = await Advert.findAll();

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

