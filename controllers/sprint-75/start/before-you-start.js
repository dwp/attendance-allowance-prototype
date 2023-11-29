const {
  urls,
  registerController,
} = require('../../../utils/controller');
const beforeYouStart = require('./before-you-start');

const config = {
  name: urls.beforeYouStart,
  previous: urls.start, 
  next: urls.whoIsApplying,
};

module.exports = registerController(config.name, config);
