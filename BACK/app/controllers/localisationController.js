const { Localisation } = require('../models/index');

const localisationController = {

    async getFilteredCities(request, response) {
        const city = request.body.city;

        try {
            const cities = await Localisation.filteredCities(city);
            response.json(cities);
        } catch (error) {
            response.status(200).json(error.message)
        }
    }
   
};

module.exports = localisationController;