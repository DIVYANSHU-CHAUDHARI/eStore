const buyerService = require('../service/buyersservice');

const createBuyer = async (req, res) => {
    try {
        const buyer = await buyerService.createBuyer(req.body);
        res.json({ success: true, buyerId: buyer.id });
    } catch (error) {
        console.error('Error creating buyer:', error);
        res.status(500).json({
            success: false,
            Error: error.message
        });
    }
};

module.exports = {
    createBuyer
};