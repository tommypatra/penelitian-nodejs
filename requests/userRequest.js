//requests/userRequest.js
const { body, validationResult } = require('express-validator');

// Validasi untuk operasi Create User
const validateCreate = [
    body('name')
        .notEmpty().withMessage('Nama tidak boleh kosong')
        .isLength({ max: 150 }).withMessage('Nama maksimal 150 karakter'),
    
    body('email')
        .notEmpty().withMessage('Email tidak boleh kosong')
        .isEmail().withMessage('Format email tidak valid'),
    
    body('password')
        .notEmpty().withMessage('Password tidak boleh kosong')
        .isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),

    validateRequest,
];

// Validasi untuk operasi Update User
const validateUpdate = [
    body('name')
        .optional()
        .isLength({ max: 150 }).withMessage('Nama maksimal 150 karakter'),
    
    body('email')
        .optional()
        .isEmail().withMessage('Format email tidak valid'),
    
    body('password')
        .optional()
        .isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),

    validateRequest,
];

// Fungsi untuk menangani error validasi
function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.array().map(err => ({ field: err.path, message: err.msg })),
            data: null
        });
    }
    next();
}

module.exports = {
    validateCreate,
    validateUpdate,
};
