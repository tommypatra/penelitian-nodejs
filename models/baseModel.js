const pool = require('../config/db');

class baseModel {
    constructor(tableName) {
        this.tableName = tableName;
    }

    async findAll(offset = 0, limit = 10, searchField = '', searchValue = '') {
        const query = `SELECT * FROM ${this.tableName} WHERE ${searchField} LIKE ? LIMIT ?, ?`;
        const [rows] = await pool.query(query, [`%${searchValue}%`, offset, limit]);
        return rows;
    }

    async countAll(searchField = '', searchValue = '') {
        const query = `SELECT COUNT(*) AS total FROM ${this.tableName} WHERE ${searchField} LIKE ?`;
        const [[{ total }]] = await pool.query(query, [`%${searchValue}%`]);
        return total;
    }

    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const [rows] = await pool.query(query, [id]);
        return rows[0];
    }

    async create(data) {
        const query = `INSERT INTO ${this.tableName} SET ?`;
        const [result] = await pool.query(query, data);
        return { id: result.insertId, ...data };
    }

    async update(id, data) {
        const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
        await pool.query(query, [data, id]);
        return { id, ...data };
    }

    async remove(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
        await pool.query(query, [id]);
    }
}

module.exports = baseModel;
