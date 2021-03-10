const { Router } = require('express');
const router = Router();

const { gameController, advertController, userController, localisationController  } = require('./controllers/index');
const {authenticateToken} = require('./middlewares/checkConnexion');
const validatorService = require('./services/validator');

// router.get('/api/games', gameController.getAllGames);
// router.get('/api/games/:id', gameController.getOneGame);

// router.get('/api/adverts', advertController.getFilteredAdverts);

router.get('/api/adverts', authenticateToken, advertController.getAllAdvert); // test for JWT
router.get('/api/adverts/:id', advertController.getOneAdvert);
// router.patch('/api/adverts/:id/update', autheneticateToken);
router.post('/api/create-advert', authenticateToken, advertController.newAdvert);

router.post('/api/login', userController.login);
router.post('/api/signin', validatorService.validateBody, userController.signin);

// router.get('/api/handle-users', authenticateToken);

router.post('/api/cities', localisationController.getFilteredCities);

// router.get('/api/profil', authenticateToken);

// 404 for the API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});

module.exports = router;