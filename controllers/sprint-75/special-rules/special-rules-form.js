const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesForm,
  previous: urls.specialRulesDeclaration,
  next: urls.surgeryMedicalCentre,
  validation: {
    type: validation.radios,
    errors: {
      required: 'We need to know if a DS1500 has been completed on your behalf.',
    },
  },
};

module.exports = registerController(config.name, config);
