const cartService = require('../services/cart');

const showCart = async (req, res) => {
  try {
    const cart = await cartService.findCartbyUserId(req.body);
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong:\n' + err.message });
  }
};

const addProductToCart = async (req, res) => {
    try {
      const cart = await cartService.addProductToCart(req.body);
      res.status(200).send(cart);
    } catch (err) {
      res.status(500).send({ error: 'Something went wrong:\n' + err.message });
    }
}

module.exports = { showCart, addProductToCart };