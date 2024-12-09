// db.js
const mysql = require('mysql2');
const config = require('./config');  // Mengambil konfigurasi dari config.js

// Membuat koneksi pool dengan pengaturan dari config.js
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();  // Menggunakan Promise API untuk query