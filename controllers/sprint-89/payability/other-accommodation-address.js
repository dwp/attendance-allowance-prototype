const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.otherAccommodationAddress,
  previous: urls.careHomeHospital,
  next: urls.illnessDisability,
  validation: [
    {
      name: "other-accommodation-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: "Enter the name of the place you are staying",
        maxLength:
          "Name of the place you are staying must be 500 characters or less",
      },
    },

    {
      name: "other-accommodation-postcode",
      type: validation.textInput,
      options: {
        regEx: /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/
      },
      errors: {
        required: "Enter a postcode",
        regEx: 'Enter a postcode in the correct format',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
