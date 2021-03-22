const { User } = require('../models/index');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const sendEmail = require('../services/sendEmail');
const contactUs = require('../services/contactUs');

const userController = {

    getUsers : async (request, response) => {
        const users = await User.findAll();

        response.json(users);
    },
    
    getAccount : async (request, response) => {
        const userId = request.user.id;
        try {
            const result = await User.findOne(userId);
            response.json(result);
        }catch (error){
            response.status(400).json(error.message);
        }
    },

    login : async (request, response) =>  {

        const data = request.body;
        
        try {
            const user = await User.checkIfExist(data);
            const userPlainObject = {
                id: user.id,
                pseudo: user.pseudo,
                role: user.role
            }
    
            const accessToken = jwt.sign(userPlainObject, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
            response.json({accessToken: accessToken, id: user.id, pseudo: user.pseudo, role: user.role})
        } catch (error) {
            response.status(400).json(error.message)
        }
        
    },

    signup : async (request, response) => {
        const data = request.body;

        try {
            const user = new User(data);
            const result = await user.save();
            response.json(result);
        } catch (error) {
            response.status(400).json(error.message);
        }
    },

    accountDeletion : async (request, response) => {
        const userId = request.user.id;
        try{
            const result = await User.delete(userId);
            response.json(result);
        }catch(error) {
            response.status(400).json(error.message);
        }
    },

    updateAccount : async (request, response) => {
        request.body.id = request.user.id;
        try{
            const user = new User(request.body)
            const result = await user.update();
            response.json(result);
        }catch(error) {
            response.status(400).json(error.message);
        }
    },

    contactSeller: async (request, response) => {
        try {
            await sendEmail(request.user, request.body);
            response.status(200).json('Votre mail a bien été envoyé.')
        } catch (error) {
            response.status(400).json(error.message);
        }
    },

    contactOboardgameCorporation: async (request , response) => {
        try {
            await contactUs(request.body);
            response.status(200).json('Votre mail a bien été envoyé. Nous vous répondrons dans les meilleurs délais.');
        } catch (error) {
            response.status(400).json(error.message);
        }
    }



};

module.exports = userController;

