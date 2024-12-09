const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const authRoutes = require('./routes/authRoute');
const secureRoutes = require('./routes/secureRoute'); // Rute yang dilindungi

const app = express();

// Middleware untuk parsing JSON body
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Route login tidak perlu authToken
app.use('/api', secureRoutes); // Semua route di sini dilindungi authToken

// Server Start
app.listen(config.app.port, () => {
  console.log(`Server berjalan di http://localhost:${config.app.port}`);
});
