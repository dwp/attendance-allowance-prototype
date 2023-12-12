const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.homeAddressPostcode,
  previous: urls.fullName,
  next: urls.homeAddressSelect,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 6,
      maxLength: 8,
    },
    errors: {
      required: "Enter a postcode",
      minLength: "Enter a postcode in the correct format",
      maxLength: "Postcode must be 8 characters or less",
    },
  },
};

module.exports = registerController(config.name, config);
