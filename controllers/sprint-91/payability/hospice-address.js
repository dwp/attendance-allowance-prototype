const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.hospiceAddress,
  previous: urls.careHomeHospital,
  next: urls.illnessDisability,
  validation: [
    {
      name: "hospice-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: "Enter the name of the hospice",
        maxLength:
          "Enter the name of the hospice in 500 characters or less",
      },
    },

    {
      name: "hospice-postcode",
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
