const {
    urls,
    validation,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.consent,
    previous: urls.treatmentSurgery,
    next: urls.surgeryMedicalCentre,
    validation: {
      type: validation.radios,
    },
  };
  
  module.exports = registerController(config.name, config);
  