const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'oboardgame@outlook.com',
        pass: 'Nautilus_Hercules_Hydrus'
    }
});

const emailOptions = {
    from: 'math.117@outlook.fr',
    to: 'oboardgame@outlook.com',
    subject: 'TEST d\'envoie d\'email depuis nodemailer',
    text: "C'est un truc de ouf si ça marche la vie de ma mère"
};

transporter.sendMail(emailOptions, (err, info) => {
    if (err) return console.log(err);
    console.log(info);
});