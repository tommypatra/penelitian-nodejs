//routes/authRoute.js
const express = require('express');
const { login } = require('../controllers/authController');
const { loginRequest } = require('../requests/authRequest');

const router = express.Router();

router.post('/login', loginRequest, login);

module.exports = router;
