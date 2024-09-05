const cartService = require('../services/cart');

const showCart = async (req, res) => {
  try {
    // TODO send the id from req.user and not take it from the body,  
    // we should take the user.id from the JWT (like req.user.id) or at least something close to that
    const cart = await cartService.findCartbyUserId(req.body);
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong:\n' + err.message });
  }
};

const addProductToCart = async (req, res) => {
    try {
      // TODO send the id from req.user and not take it from the body
      const cart = await cartService.addProductToCart(req.body);
      res.status(200).send(cart);
    } catch (err) {
      res.status(500).send({ error: 'Something went wrong:\n' + err.message });
    }
}

module.exports = { showCart, addProductToCart };