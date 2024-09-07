const { Router } = require('express');
const { showCart, addProductToCart } = require('../controllers/carts');

const router = Router();

router.get('/cart', showCart);

router.post('/cart', addProductToCart);


module.exports = { cartRouter: router };