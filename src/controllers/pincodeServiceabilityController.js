const pincodeServiceabilityService = require('../service/pincodeServiceabilityService');

const createPincodeServiceability = async (req, res) => {
    try {
        const serviceability = await pincodeServiceabilityService.createPincodeServiceability(req.body);
        res.json({ success: true, serviceabilityId: serviceability.id });
    } catch (error) {
        console.error('Error creating pincode serviceability:', error);
        res.status(500).json({
            success: false,
            Error: error.message
        });
    }
};

module.exports = {
    createPincodeServiceability
};