const { Router } = require('express');
const router = Router();

const { gameController, advertController, userController  } = require('./controllers/index');
const connexionService = require('./middlewares/checkConnexion');
const validatorService = require('./services/validator');

router.get('/games', gameController.getAllGames);
router.get('/games/:id', gameController.getOneGame);

// router.get('/adverts', advertController.getFilteredAdverts);
router.get('/adverts/:id', advertController.getOneAdvert);
// router.get('/adverts/:id/update', );
// router.get('/create-advert', );

// router.get('/login', userController.login);
router.post('/login', userController.login);
router.post('/signin', validatorService.validateBody, userController.signin);

// router.get('/handle-users', );

// router.get('/profil', );

// 404 for the API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});

module.exports = router;