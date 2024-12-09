//controller/authController
const userModel = require('../models/userModel');
const authService = require('../services/authService');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Mencari user berdasarkan email
        const user = await userModel.findByEmail(email);
        console.log(user);
        if (!user) {
            return res.status(401).json({
                status: false,
                message: 'Email atau password salah!',
                data: null
            });
        }

        // Membandingkan password yang di-input dengan yang ada di database
        if (!(await authService.comparePassword(password, user.password))) {
            return res.status(401).json({
                status: false,
                message: 'Email atau password salah!',
                data: null
            });
        }

        // Membuat token JWT
        const token = authService.generateToken(user);

        // Mengirimkan token JWT dalam respons
        res.json({
            status: true,
            message: 'Login berhasil!',
            data: { token }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server.',
            data: null
        });
    }
};
