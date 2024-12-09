//models/userModel.js
const pool = require('../config/db');
const baseModel = require('./baseModel');

class myModel extends baseModel {
    constructor() {
        //definisikan nama tabel di konstruktor
        super('users');
    }

    async findByEmail(email) {
        const query = `SELECT * FROM ${this.tableName} WHERE email = ?`;
        const [rows] = await pool.query(query, [email]);
        return rows[0];
    }
}

module.exports = new myModel();
