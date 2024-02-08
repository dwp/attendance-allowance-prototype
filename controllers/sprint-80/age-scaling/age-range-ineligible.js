const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.ageRangeIneligible,
  previous: urls.ageRangeCheck, 
};

module.exports = registerController(config.name, config);
