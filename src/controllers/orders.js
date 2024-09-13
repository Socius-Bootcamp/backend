const orderService = require('../services/order');

const registerOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
};

const getUserOrders = async (req, res) => {
  try {
    // TODO send the id from req.user and not take it from the body,
    // we should take the user.id from the JWT (like req.user.id) or at least something close to that
    //this is only for the authenticated User
    const orders = await orderService.getUserOrders(req.body.UserId);
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    // TODO verify that an admin is the only one using this
    const order = await orderService.getAllOrders();
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await orderService.updateOrder(req.body);
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
};

module.exports = { registerOrder, getUserOrders, getOrders, updateOrder };
