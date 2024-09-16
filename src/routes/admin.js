const { Router } = require('express');
const { isAdmin } = require('../middlewares/is-admin');
const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const router = Router();

router.use(isAdmin);

router.post('/admin/products', createProduct);
router.put('/admin/products/:id', updateProduct);
router.delete('/admin/products/:id', deleteProduct);

module.exports = { adminRouter: router };
