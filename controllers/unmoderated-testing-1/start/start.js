const {
  urls,
  options,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.start,
  previous: options.none,
  next: urls.whoIsApplying,
};

module.exports = registerController('start', config);
