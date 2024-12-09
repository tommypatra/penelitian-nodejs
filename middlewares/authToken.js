const authService = require('../services/authService');

function authToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            status: false,
            message: 'Akses ditolak. Token tidak ada.',
            data: null,
        });
    }

    const decoded = authService.verifyToken(token);
    if (!decoded) {
        return res.status(403).json({
            status: false,
            message: 'Token tidak valid!',
            data: null,
        });
    }

    req.user = decoded; // Menyimpan informasi user di request
    next();
}

module.exports = authToken;
