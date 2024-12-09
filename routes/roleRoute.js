//routes/roleRoute.js
const express = require('express');
const myController = require('../controllers/roleController');
const { validateCreate, validateUpdate } = require('../requests/roleRequest');

const router = express.Router();

// Definisi endpoint
router.get('/', myController.index);
router.post('/', validateCreate, myController.store);
router.put('/:id', validateUpdate, myController.update);
router.delete('/:id', myController.destroy);
router.get('/:id', myController.show);

module.exports = router;
