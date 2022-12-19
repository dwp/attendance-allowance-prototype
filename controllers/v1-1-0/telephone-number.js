const {
  urls,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.telephoneNumber,
  next: urls.emailConfirm,
};

module.exports = registerController(config.name, config);
