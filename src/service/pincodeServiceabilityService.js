const ServiceabilityMaster = require('../models/ServiceabilityMaster');

const createPincodeServiceability = async (serviceabilityData) => {
  const { sourcePincode, destinationPincode, paymentMode } = serviceabilityData;
  return ServiceabilityMaster.create({sourcePincode, destinationPincode, paymentMode});
};

module.exports = {
    createPincodeServiceability
};