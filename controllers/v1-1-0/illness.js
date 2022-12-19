const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.illness,
  next: urls.treatment,
  validation: [
    {
      name: 'illness',
      type: validation.checkboxes,
    },
    {
      name: 'illness-detail',
      type: validation.textInput,
      condition: {
        field: 'illness',
        value: 'Other',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
