const { Router } = require('express');
const { showProducts, showProductById } = require('../controllers/products');

const router = Router();

router.get('/products/:id', showProductById);

router.get('/products', showProducts);

module.exports = { productRouter: router };
