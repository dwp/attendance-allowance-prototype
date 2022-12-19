const hasValidationErrors = (req, validation) => {
  req.session.data.validation = {};
  const errors = [];

  if (!validation) {
    return false;
  }

  let foundErrors = false;

  Object.keys(validation).forEach((result) => {
    if (validation[result] && validation[result].valid === false) {
      foundErrors = true;
      errors.push(validation[result].error);
    }
  });

  if (foundErrors) {
    req.session.data.validation = validation;
    req.session.data.validation.errors = errors;
  }

  return foundErrors;
};

module.exports = (source, name) => (req, res, next) => {
  let validationResult = { [name]: res.locals.validation };
  if (Array.isArray(res.locals.validation)) {
    validationResult = {};
    res.locals.validation.forEach((valResult) => {
      validationResult[valResult.name] = valResult;
    });
  }
  return !hasValidationErrors(req, validationResult);
};
