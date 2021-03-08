const { Router } = require('express');
const router = Router();

const { gameController, advertController, userController, localisationController  } = require('./controllers/index');
const connexionService = require('./middlewares/checkConnexion');
const validatorService = require('./services/validator');

// router.get('/api/games', gameController.getAllGames);
// router.get('/api/games/:id', gameController.getOneGame);

// router.get('/api/adverts', advertController.getFilteredAdverts);
router.get('/api/adverts/:id', advertController.getOneAdvert);
// router.get('/api/adverts/:id/update', );
// router.get('/api/create-advert', );

// router.get('/api/login', userController.login);
router.post('/api/login', userController.login);
router.post('/api/signin', validatorService.validateBody, userController.signin);

// router.get('/api/handle-users', );

router.post('/api/cities', localisationController.getFilteredCities);

// router.get('/api/profil', );

// 404 for the API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});

module.exports = router;