// routes/secure.js
const express = require('express');
const authToken = require('../middlewares/authToken');
const groupRoutes = require('./groupRoute');
const roleRoutes = require('./roleRoute');
const userRoutes = require('./userRoute');

const router = express.Router();

// Semua route di bawah ini dilindungi oleh authToken middleware
router.use(authToken);

router.use('/groups', groupRoutes);
router.use('/users', userRoutes);
router.use('/role', roleRoutes);

module.exports = router;
