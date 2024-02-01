const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.ageRangeIneligible,
  previous: urls.birthDate, 
};

module.exports = registerController(config.name, config);
