const { Router } = require('express');
const {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const router = Router();

router.get('/products/:id', showProductById);

router.get('/products', showProducts);

// TODO move to admin
// for now just for testing purposes
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
//

module.exports = { productRouter: router };
