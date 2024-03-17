const Product = require('../models/Product');
const Address = require('../models/Address');
const db = require('../config/database');

const createProduct = async (productData) => {
  const { name, inventory, price, pickupAddress} = productData;
  const { street, city, state, country, pincode } = pickupAddress;
  const transaction = await db.transaction();
  try {
    if (!name || !inventory || !price) {
      throw new Error('Missing required fields (name, inventory, price).');
    }
    if (!street || !city || !state || !country || !pincode) {
      throw new Error('All address fields must be provided for pickupAddress');
    }
    const createdPickupAddress = await Address.create({ street, city, state, country, pincode });
    const createdPickupAddressId = createdPickupAddress.id;
    const product =  await Product.create({name, inventory, price, pickupAddressId: createdPickupAddressId}, { transaction });
    await transaction.commit();
    return product;
  } catch (error) {
    await transaction.rollback();
    console.log(error);
    throw error;
  }
};

module.exports = {
    createProduct
};