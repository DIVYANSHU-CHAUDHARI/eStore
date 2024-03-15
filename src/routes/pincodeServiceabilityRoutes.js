const express = require('express');
const { createPincodeServiceability } = require('../controllers/pincodeServiceabilityController');
const router = express.Router();

router.post('/', createPincodeServiceability);

module.exports = router;