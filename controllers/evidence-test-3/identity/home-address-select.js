const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.homeAddressSelect,
  previous: urls.homeAddressPostcode,
  next: urls.healthConditions,
  validation: {
    type: validation.select,
    errors: {
      required: "Select your home address",
    },
  },
};

module.exports = registerController(config.name, config);
