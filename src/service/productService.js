const Product = require('../models/Product');
const Address = require('../models/Address');
const db = require('../config/database');

const createProduct = async (productData) => {
  const { name, inventory, price, pickupAddress} = productData;
  const { street, city, state, country, pincode } = pickupAddress;
  const transaction = await db.transaction();
  try {
    const createdPickupAddress = await Address.create({ street, city, state, country, pincode });
    const createdPickupAddressId = createdPickupAddress.id;
    const product =  Product.create({name, inventory, price, pickupAddressId: createdPickupAddressId});
    await transaction.commit();
    return product;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = {
    createProduct
};