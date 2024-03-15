const productService = require('../service/productService');

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.json({ success: true, productId: product.id });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({
            success: false,
            Error: error.message
        });
    }
};

module.exports = {
    createProduct
};