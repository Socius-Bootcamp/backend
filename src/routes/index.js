const { Router } = require('express');
const { userRouter } = require('./users');
const { productRouter } = require('./products');
const { cartRouter } = require('./carts');
const { orderRouter } = require('./orders');

const apiRouter = Router();
apiRouter.use(userRouter);
apiRouter.use(cartRouter);
apiRouter.use(productRouter);
apiRouter.use(orderRouter);

module.exports = { apiRouter };
