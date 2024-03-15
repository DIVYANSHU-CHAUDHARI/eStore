const ordersService = require('../service/ordersService');

const createOrder = async (req, res) => {
    try {
        const order = await ordersService.createOrder(req.body);
        res.json({ success: true, orderId: order.id });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            Error: error.message
        });
    }
};

module.exports = {
    createOrder
};