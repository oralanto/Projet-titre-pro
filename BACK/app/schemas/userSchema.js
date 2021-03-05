const Joi = require('joi');

const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    pseudo: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.number().integer(),
    localisationId: Joi.number().integer().required()
});

module.exports = userSchema;