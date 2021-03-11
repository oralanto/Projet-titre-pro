const { Router } = require('express');
const router = Router();

const { advertController, userController, localisationController, categoryController  } = require('./controllers/index');
const {authenticateToken} = require('./middlewares/checkConnexion');
const validatorService = require('./services/validator');

router.get('/api/adverts', advertController.getFilteredAdverts);
router.get('/api/alladverts', advertController.getAllAdverts)
router.get('/api/adverts/:id', advertController.getOneAdvert);
// router.patch('/api/adverts/:id/update', autheneticateToken);
// router.post('/api/create-advert', authenticateToken);

router.post('/api/login', userController.login);
router.post('/api/signin', validatorService.validateBody, userController.signin);

// router.get('/api/handle-users', authenticateToken);

router.get('/api/categories', categoryController.getAllCategories)

router.post('/api/cities', localisationController.getFilteredCities);

// router.get('/api/profil', authenticateToken);
// router.patch('/api/profil', authenticateToken);
// router.delete('/api/profil', authenticateToken);

// 404 for the API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});

module.exports = router;