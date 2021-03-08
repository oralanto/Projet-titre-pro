const { Game } = require('../models/index');

const gameController = {

    getAllGames : async (request, response) => {
        const games = await Game.findAll();

        response.json(games);
    },

    getOneGame : async (request, response) =>  {

        const { id } = request.params;

        const gameId = await Game.findOne(id);

        response.json(gameId)
    },

};

module.exports = gameController;

