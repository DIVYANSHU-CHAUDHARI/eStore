const Buyer = require('../models/Buyer');
const Address = require('../models/Address');
const db = require('../config/database');

const createBuyer = async (buyerData) => {
  const { name, address} = buyerData;
  const { street, city, state, country, pincode } = address;
  const transaction = await db.transaction();
  try {
    const createdAddress = await Address.create({ street, city, state, country, pincode });
    const createdAddressId = createdAddress.id;
    const buyer = await Buyer.create({ name, addressId: createdAddressId });
    await transaction.commit();
    return buyer;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = {
    createBuyer
};