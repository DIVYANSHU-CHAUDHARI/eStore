const Order = require('../models/Order');
const Buyer = require('../models/Buyer');
const Product = require('../models/Product');
const Address = require('../models/Address');
const ServiceabilityMaster = require('../models/ServiceabilityMaster');
const db = require('../config/database');

const createOrder = async (orderData) => {
  const { buyerId, productId, quantity, paymentMode} = orderData;
  const transaction = await db.transaction();
  try {
    const product = await Product.findByPk(productId);
    const buyer = await Buyer.findByPk(buyerId);
    const pickupAddress = await Address.findByPk(product.pickupAddressId);
    const destinationAddress = await Address.findByPk(buyer.addressId);
    const pickupPincode = pickupAddress.pincode;
    const destinationPincode = destinationAddress.pincode;
    const serviceabilityRecord = await ServiceabilityMaster.findOne({
        where: {
        sourcePincode: pickupPincode,
        destinationPincode: destinationPincode
        }
    });
    if (!serviceabilityRecord) {
        throw new Error('Order failed because pincode is unserviceable');
    }
    
    if (['COD','PP'].includes(serviceabilityRecord.paymentMode) && serviceabilityRecord.paymentMode !== paymentMode) {
        throw new Error(`Payment mode ${paymentMode} not supported for this order`);
    }

    if (quantity > product.inventory) {
        throw new Error('Order failed because product stock is insufficient');
    }

    const order =  await Order.create({buyerId, productId, quantity, paymentMode});
    await transaction.commit();
    return order;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = {
    createOrder
};