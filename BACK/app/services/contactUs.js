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

    const senderQuery = {
        text: `SELECT email, pseudo FROM "user" WHERE id = $1`,
        values: [messageInfo.userId]
    };

    const result = await db.query(senderQuery);
    const sender = result.rows[0];

    const emailOptions = {
        from: process.env.EMAIL_ACCOUNT,
        to: process.env.EMAIL_ACCOUNT,
        subject: `${sender.pseudo} vous a contacté.`,
        text: `${messageInfo.message}
        
        Lui répondre grâce à son email: ${sender.email}
        `
    };
    
    transporter.sendMail(emailOptions, (err, info) => {
        if (err) throw new Error('Votre email n\'a pas été envoyé');
    });

}

module.exports = contactUs;