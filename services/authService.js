//services/authService.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

const authService = {
    // Membuat token JWT
    generateToken: (user) => {
        return jwt.sign(
            { id: user.id, name: user.name, email: user.email },
            config.jwt.secret,
            { expiresIn: config.jwt.expiration }
        );
    },

    // Memverifikasi token JWT
    verifyToken: (token) => {
        try {
            return jwt.verify(token, config.jwt.secret);
        } catch (error) {
            return null;
        }
    },

    // Meng-hash password
    hashPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    },

    // Membandingkan password dengan hash
    comparePassword: async (password, hashedPassword) => {
        return bcrypt.compare(password, hashedPassword);
    },
};

module.exports = authService;
