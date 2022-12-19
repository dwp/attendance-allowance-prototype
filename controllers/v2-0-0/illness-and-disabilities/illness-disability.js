const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisability,
  next: urls.specialRulesDeclaration,
  previous: urls.careHomeHospital,
};

module.exports = registerController(config.name, config);
