require('dotenv').config();
const nodemailer = require('nodemailer');
const db = require('../database');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
    }
});

const contactUs = async (messageInfo) => {

    const emailOptions = {
        from: process.env.EMAIL_ACCOUNT,
        to: process.env.EMAIL_ACCOUNT,
        subject: `${messageInfo.firstname} ${messageInfo.lastname} vous a contacté.`,
        text: `${messageInfo.message}
        
        Lui répondre grâce à son email: ${messageInfo.email} + ${messageInfo.phoneNumber}
        `
    };
    
    transporter.sendMail(emailOptions, (err, info) => {
        if (err) throw new Error('Votre email n\'a pas été envoyé');
    });

}

module.exports = contactUs;