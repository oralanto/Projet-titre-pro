const { Router } = require('express');
const router = Router();

const { gameController, advertController, userController, localisationController  } = require('./controllers/index');
const {authenticateToken} = require('./middlewares/checkConnexion');
const validatorService = require('./services/validator');
const {uploadImage} = require ('./services/uploadHandler');

const multer = require('multer');
const upload = multer({dest:__dirname + '../public/uploads'});

// router.get('/api/games', gameController.getAllGames);
// router.get('/api/games/:id', gameController.getOneGame);

// router.get('/api/adverts', advertController.getFilteredAdverts);

router.get('/api/adverts', authenticateToken, advertController.getAllAdvert); // test for JWT
router.get('/api/adverts/:id', advertController.getOneAdvert);
router.patch('/api/adverts/:id/update', authenticateToken, advertController.patchAdvert);
router.post('/api/create-advert', authenticateToken, advertController.newAdvert);

router.post('/api/login', userController.login);
router.post('/api/signup', validatorService.validateBody, userController.signup);

router.post('/api/cities', localisationController.getFilteredCities);

router.get('/api/handle-users', authenticateToken, userController.getUsers);

router.delete('/api/profil', authenticateToken, userController.accountDeletion);
router.get('/api/profil', authenticateToken, userController.getAccount);
router.patch('/api/profil', authenticateToken, userController.updateAccount)


// 404 for the API
router.use((request, response) => {
    response.status(404).json('Unknown Territories (404)');
});

module.exports = router;