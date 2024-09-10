const { Router } = require('express');
const {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
} = require('../controllers/products');

const router = Router();

router.get('/products', showProducts);

router.get('/products/:id', showProductById);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

module.exports = { productRouter: router };
