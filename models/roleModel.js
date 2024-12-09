//models/userModel.js
const baseModel = require('./baseModel');

class myModel extends baseModel {
    constructor() {
        super('roles');
    }

    async findByNama(nama) {
        const query = `SELECT * FROM ${this.tableName} WHERE nama = ?`;
        const [rows] = await pool.query(query, [nama]);
        return rows[0];
    }
}

module.exports = new myModel();
