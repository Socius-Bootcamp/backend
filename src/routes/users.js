const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers/users');

const router = Router();

router.post('/auth/signup', registerUser);

router.post('/auth/login', loginUser);

module.exports = { userRouter: router };
