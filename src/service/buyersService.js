const Buyer = require('../models/Buyer');
const Address = require('../models/Address');
const db = require('../config/database');

const createBuyer = async (buyerData) => {
  const { name, address} = buyerData;
  const { street, city, state, country, pincode } = address;
  const transaction = await db.transaction();
  try {

    if (!name) {
      throw new Error('Buyer name must be provided');
    }
  
    if (!street || !city || !state || !country || !pincode) {
      throw new Error('All address fields must be provided');
    }
    
    const createdAddress = await Address.create({ street, city, state, country, pincode }, { transaction });
    const createdAddressId = createdAddress.id;
    const buyer = await Buyer.create({ name, addressId: createdAddressId }, { transaction });
    await transaction.commit();
    return buyer;
  } catch (error) {
    await transaction.rollback();
    console.log(error);
    throw error;
  }
};

module.exports = {
    createBuyer
};