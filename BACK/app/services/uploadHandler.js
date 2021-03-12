const multer = require('multer');
//const uploadedIn = multer({dest:__dirname + '../public/uploads'})

// const imgUpload = async () => (req, res, (err)=> {

//     const storageEngine = multer.diskStorage({
//         destination: './public/uploads/',
//         filename: function (req, file, callback) {
//             callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//         }
//     });

//     const upload = multer({
//         storage : storageEngine
//     }).single('myImage');

//     if (err) {
//         throw new Error('Il y a eu un problème à l\'upload de l\'image')
//     }else{
//         console.log(req.file);

//     } return 'Votre image a bien été sauvegarder'
// });


// const uploadImage = (req, res, next) => {
//     upload.single('photo');
//     next();
// }


// module.exports = {
//     uploadImage
// };


/////////////////////////////////////////////////////////////////////////


//traduit les données envoyés par le front
const MIME_TYPES = {
'image/jpg': 'jpg',
'image/jpeg': 'jpg',
'image/png': 'png'
};
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
    //on ajoute un timestamp pour rendre unique le nom de chaque image avec Date.now()
        callback(null, Date.now() + name);
    }
});

var upload = multer({storage:storage}).single('image');

module.exports = {
    image: function (req,res) {
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
            } else if (err) {
            return res.status(500).json(err)
            }
            console.log(req.file);
            console.log(req.body);
            return res.status(200).send(req.file)
        },
        )
}
}