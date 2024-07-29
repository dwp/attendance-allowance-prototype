const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeAddress,
  previous: urls.careHomeHospital,
  next: urls.careHomeFunding,
  validation: [
    {
      name: "care-home-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: "Enter the name of the care or nursing home",
        maxLength:
          "Enter the name of the care or nursing home in 500 characters or less",
      },
    },

    {
      name: "care-home-postcode",
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
