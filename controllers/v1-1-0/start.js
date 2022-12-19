const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.start,
  next: urls.dob,
};

module.exports = registerController('', config);
