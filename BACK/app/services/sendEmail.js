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

    if(!messageInfo.advertId || !messageInfo.message) throw new Error('Votre email n\' a pas été envoyé.');

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
    
    await wrapedSendMail(emailOptions);
}

// need to use await in order to not crash the server

async function wrapedSendMail(mailOptions){
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions, function(error, info){
            if (error) throw new Error('Votre email n\'a pas été envoyé');
            else {
            console.log('Email sent: ' + info.response);
            resolve(true);
        }
        });
    });
};

module.exports = sendEmail;