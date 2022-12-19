/* eslint-disable no-param-reassign, no-restricted-syntax, no-continue */

const storeData = (input, data) => {
  for (const i in input) {
    if (i.indexOf('_') === 0) {
      continue;
    }

    const val = input[i];
    if (val === '_unchecked' || val === ['_unchecked']) {
      delete data[i];
      continue;
    }

    if (Array.isArray(val)) {
      const index = val.indexOf('_unchecked');
      if (index !== -1) {
        val.splice(index, 1);
      }
    } else if (typeof val === 'object') {
      if (typeof data[i] !== 'object') {
        data[i] = {};
      }
      storeData(val, data[i]);
      continue;
    }

    data[i] = val;
  }
};

module.exports = (req, res, next) => {
  if (!req.session.data) {
    req.session.data = {};
  }
  req.session.data = { ...req.session.data };
  storeData(req.body, req.session.data);
  storeData(req.query, req.session.data);

  res.locals.data = {};

  for (const j in req.session.data) {
    if (req.session.data[j]) {
      res.locals.data[j] = req.session.data[j];
    }
  }

  next();
};
