const { User } = require('../models/index');
const jwt = require('jsonwebtoken');
const { response } = require('express');

const userController = {

    getUsers : async (request, response) => {
        const users = await User.findAll();

        response.json(users);
    },

    login : async (request, response) =>  {

        const data = request.body;
        
        try {
            const user = await User.checkIfExist(data);
            const userPlainObject = {
                id: user.id,
                pseudo: user.pseudo
            }
    
            const accessToken = jwt.sign(userPlainObject, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
            response.json({accessToken: accessToken, pseudo: user.pseudo, role: user.role})
        } catch (error) {
            response.status(400).json(error.message)
        }
        
    },

    signin : async (request, response) => {
        const data = request.body;

        try {
            const user = new User(data);
            const result = await user.save();
            request.session.isConnected = true;
            response.json(result);
        } catch (error) {
            response.status(400).json(error.message);
        }
    }


};

module.exports = userController;

