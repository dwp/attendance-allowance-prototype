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

const buildSummaryRow = (value) => ({
  key: {
    text: value,
    classes: 'govuk-summary-list__value',
  },
  value: {
    text: '',
  },
  actions: {
    items: [{
      href: '#',
      text: 'Remove',
      visuallyHiddenText: value,
    }],
  },
});

const handleIllnessDisability = (input, data) => {
  if (!input || !data) {
    return;
  }
  if (input['illness-disability']?.length > 0) {
    if (!data['illness-disability']) {
      data['illness-disability'] = [input['illness-disability']];
      data['illness-disability-rows'] = [buildSummaryRow(input['illness-disability'])];
    } else {
      data['illness-disability'].push(input['illness-disability']);
      data['illness-disability-rows'].push(buildSummaryRow(input['illness-disability']));
    }
  }
};

module.exports = (req, res, next) => {
  if (!req.session.data) {
    req.session.data = {};
  }
  req.session.data = { ...req.session.data };
  if (req.body?.['illness-disability']) {
    handleIllnessDisability(req.body, req.session.data);
  } else {
    storeData(req.body, req.session.data);
    storeData(req.query, req.session.data);
  }
  res.locals.data = {};

  for (const j in req.session.data) {
    if (req.session.data[j]) {
      res.locals.data[j] = req.session.data[j];
    }
  }

  next();
};
