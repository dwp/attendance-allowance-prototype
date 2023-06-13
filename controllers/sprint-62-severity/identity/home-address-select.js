const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.homeAddressSelect,
  next: urls.careHomeHospital,
  previous: urls.homeAddressPostcode,
  validation: {
    type: validation.select,
  },
};

module.exports = registerController(config.name, config);
