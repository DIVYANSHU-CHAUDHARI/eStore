const ServiceabilityMaster = require('../models/ServiceabilityMaster');
const db = require('../config/database');

const createPincodeServiceability = async (serviceabilityData) => {
  const { sourcePincode, destinationPincode, paymentMode } = serviceabilityData;
  const transaction = await db.transaction();
  try {

    if (!sourcePincode || !destinationPincode || !paymentMode) {
      throw new Error('Missing required fields (sourcePincode, destinationPincode, paymentMode).');
    }
    const serviceabilityData =  await ServiceabilityMaster.create({sourcePincode, destinationPincode, paymentMode}, { transaction });
    await transaction.commit();
    return serviceabilityData;
  } catch (error) {
    await transaction.rollback();
    console.log(error);
    throw error;
  }
};

module.exports = {
    createPincodeServiceability
};