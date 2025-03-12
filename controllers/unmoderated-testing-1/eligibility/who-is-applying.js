const {
  urls,
  options,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.whoIsApplying,
  previous: options.none,
  next: [
    {
      page: urls.oops,
      condition: {
        field: urls.whoIsApplying,
        value: 'myself',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select who is applying',
    },
  },
};

module.exports = registerController(config.name, config);
