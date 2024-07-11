const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.similarPlaceAddress,
  previous: urls.careHomeHospital,
  next: urls.illnessDisability,
  validation: [
    {
      name: "similar-place-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: "Enter the name of the place where you are staying",
        maxLength:
          "Enter the name of the place where you are staying in 500 characters or less",
      },
    },

    {
      name: "similar-place-postcode",
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
