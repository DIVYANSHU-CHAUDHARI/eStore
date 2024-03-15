const express = require('express');
const { createBuyer } = require('../controllers/buyersController');
const router = express.Router();

router.post('/', createBuyer);

module.exports = router;