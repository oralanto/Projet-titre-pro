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

    newAdvert : async (request, response) => {
        const theAdvert = new Advert(request.body);
        theAdvert.userId = request.user.id;
    
        try {
            
            const result = await Advert.save(theAdvert);
    
            response.json(result);
        } catch (err) {
            response.status(403).json(err.message);
        }
    }

};

module.exports = advertController;

