const {Category} = require('../models/index');

const categoryController = {
    async getAllCategories(req, res) {
        try {
            const categories = await Category.findAll();
            res.json(categories);
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

module.exports = categoryController;