const userService = require('../services/user');

const registerUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong: ' + err.message });
  }
};

module.exports = { registerUser, loginUser };
