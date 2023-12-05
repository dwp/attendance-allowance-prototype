const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.surgeryMedicalCentre,
  previous: urls.consent,
  next: urls.evidence,
  validation: [
    {
      name: "surgery-medical-centre-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: "Enter the name of your GP surgery or medical centre",
        maxLength:
          "Name of GP surgery or medical centre must be 500 characters or less",
      },
    },

    {
      name: "surgery-medical-centre-postcode",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 8,
      },
      errors: {
        required: "Enter a postcode in the correct format",
        maxLength: "Postcode must be 8 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
