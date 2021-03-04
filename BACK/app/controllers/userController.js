const { User } = require('../models/index');

const userController = {

    getUsers : async (request, response) => {
        const users = await User.findAll();

        response.json(users);
    },

    login : async (request, response) =>  {

        const data = request.body;
        
        try {
            const user = await User.checkIfExist(data);
            request.session.isConnected = true;
            response.json(user)
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

