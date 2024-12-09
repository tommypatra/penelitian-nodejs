// requests/groupRequest.js
const { body, validationResult } = require('express-validator');

// Validasi untuk operasi Create
const validateCreate = [
    body('nama')
        .notEmpty().withMessage('nama grup tidak boleh kosong')
        .isLength({ max: 150 }).withMessage('nama maksimal 150 karakter'),
    validateRequest,
];

// Validasi untuk operasi Update
const validateUpdate = [
    body('nama')
        .optional()
        .isLength({ max: 150 }).withMessage('nama maksimal 150 karakter'),
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
