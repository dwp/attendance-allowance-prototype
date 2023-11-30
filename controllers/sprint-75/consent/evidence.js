const {
    urls,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.evidence,
    previous: urls.surgeryMedicalCentre,
    next: urls.checkAnswersDetails,
  };
  
  module.exports = registerController(config.name, config);
  