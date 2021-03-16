const multer = require('multer');
const fs = require ('fs');

//traduit les données envoyés par le front
const MIME_TYPES = {
'image/jpg': 'jpg',
'image/jpeg': 'jpg',
'image/png': 'png'
};
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, `${__dirname}/../../public/uploads/`);
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        console.log(extension)
        if(extension != 'jpeg' && extension != 'jpg' && extension != 'png') {
            return callback('Extension de fichier invalide', null);
        }
    //on ajoute un timestamp pour rendre unique le nom de chaque image avec Date.now()
        callback(null, Date.now() + name);
    }
});

var upload = multer({storage:storage}).single('image');

module.exports = {
    image: function (req,res,next) {
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            console.log(req.file)
            if(req.file) return res.status(200).json({advertImage: req.file.filename});
            else return res.status(400).json('Veuillez sélectionner une image.')
        },
        )
}
}
