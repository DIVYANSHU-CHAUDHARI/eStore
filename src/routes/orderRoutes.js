const express = require('express');
const { createOrder } = require('../controllers/ordersController');
const router = express.Router();

router.post('/', createOrder);

module.exports = router;