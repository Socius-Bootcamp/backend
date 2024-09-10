const cartService = require('../services/cart');

const showCart = async (req, res) => {
  try {
    // TODO send the id from req.user and not take it from the body,  
    // we should take the user.id from the JWT (like req.user.id) or at least something close to that
    const cart = await cartService.findCartbyUserId(req.body);
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
};

const addProductToCart = async (req, res) => {
    try {
      // TODO send the id from req.user and not take it from the body
      const cart = await cartService.addProductToCart(req.body);
      res.status(200).send(cart);
    } catch (err) {
      res.status(500).send({ error: 'Something went wrong: ' + err.message });
    }
}

const clearCart = async (req, res) => {
  try {
    // TODO send the id from req.user and not take it from the body,
    // check that the id of the owner of the cart is the same than the user that is sending the request 
    const cart = await cartService.emptyCart(req.body.CartId);
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
}

const removeProduct = async (req, res) =>{
  try {
    // TODO send the id from req.user and not take it from the body,
    // check that the id of the owner of the cart is the same than the user that is sending the request 
    const cart = await cartService.removeProductFromCart(req.body);
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
}

module.exports = { showCart, addProductToCart, clearCart, removeProduct };