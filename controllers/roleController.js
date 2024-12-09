
//controllers/roleController.js
const webService = require('../services/roleService');
const config = require('../config/config');  // Mengambil konfigurasi dari config.js

const COLUMNS_INSERT = ['nama','keterangan'];
const COLUMNS_UPDATE = ['nama','keterangan'];

// GET /api/groups
exports.index = async (req, res) => {
    try {
        const { page = 1, limit = config.app.limit, search = '' } = req.query;
        const result = await webService.getAll(parseInt(page), parseInt(limit), 'nama', search);
        res.json({ status: true, message: 'Data berhasil diambil', ...result });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data:null });
    }
};

// POST /api/groups
exports.store = async (req, res) => {
    try {
        const dataToCreate = {};
        COLUMNS_INSERT.forEach(column => {
            if (req.body[column]) {
                dataToCreate[column] = req.body[column];
            }
        });

        const user = await webService.createData(dataToCreate);
        res.status(201).json({ status: true, message: 'Berhasil disimpan', data: user });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data:null });
    }
};

// GET /api/groups/:id
exports.show = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await webService.getById(id);
        res.json({ status: true, message: 'Ditemukan', data: user });
    } catch (error) {
        res.status(404).json({ status: false, message: error.message, data:null });
    }
};

// PUT /api/groups/:id
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const dataToUpdate = {};

        COLUMNS_UPDATE.forEach(column => {
            if (req.body[column]) {
                dataToUpdate[column] = req.body[column];
            }
        });

        if (req.body.password) {
            dataToUpdate.password = req.body.password;
        }

        const user = await webService.updateData(id, dataToUpdate);
        res.json({ status: true, message: 'Berhasil diperbarui', data: user });
    } catch (error) {
        res.status(404).json({ status: false, message: error.message, data:null });
    }
};

// DELETE /api/groups/:id
exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        await webService.deleteData(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ status: false, message: error.message, data:null });
    }
};
