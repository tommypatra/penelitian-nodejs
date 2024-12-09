const { body, validationResult } = require('express-validator');

exports.loginRequest = [
    body('email').isEmail().withMessage('Email tidak valid.'),
    body('password').notEmpty().withMessage('Password wajib diisi.'),
    (req, res, next) => {
        const errors = validationResult(req);
        // console.log("bisa next");
        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: false,
                message: errors.array(),
                data: null,
            });
        }
        next();
    }
];
