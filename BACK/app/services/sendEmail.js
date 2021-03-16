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

const sendEmail = async (user, messageInfo) => {

    const senderQuery = {
        text: `SELECT email, pseudo FROM "user" WHERE id = $1`,
        values: [user.id]
    };

    const advertQuery = {
        text: `
                SELECT advert.id, game_title, "user".email FROM advert
                JOIN "user" ON "user".id = advert.user_id
                WHERE advert.id = $1
            `,
        values: [messageInfo.advertId]
    }

    const {rows} = await db.query(advertQuery);
    const advert = rows[0];

    const result = await db.query(senderQuery);
    const sender = result.rows[0];

    const emailOptions = {
        from: process.env.EMAIL_ACCOUNT,
        to: advert.email,
        subject: `${sender.pseudo} vous a contacté concernant : ${advert.game_title} `,
        text: `${messageInfo.message}
        
            Lui répondre grâce à son email: ${sender.email}
            Retrouver votre annonce sur http://.....${messageInfo.advertId}
        `
    };
    
    transporter.sendMail(emailOptions, (err, info) => {
        if (err) throw new Error('Votre email n\'a pas été envoyé');
    });

}

module.exports = sendEmail;