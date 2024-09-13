const { Router } = require('express');
const {
  registerOrder,
  getUserOrders,
  getOrders,
  updateOrder,
} = require('../controllers/orders');

const router = Router();

router.post('/orders', registerOrder);

router.get('/orders', getUserOrders);

router.put('/orders', updateOrder);

//TODO move to admin
router.get('/admin/orders', getOrders);

module.exports = { orderRouter: router };
