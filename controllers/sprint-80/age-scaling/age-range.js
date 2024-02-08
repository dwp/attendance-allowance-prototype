const {
  urls,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.ageRange,
  previous: urls.start,
  next: urls.ageRangeCheck,
};

module.exports = registerController(config.name, config);
