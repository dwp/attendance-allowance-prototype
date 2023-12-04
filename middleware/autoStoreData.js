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

const buildLink = (href, content, value) => {
  return `<a href='${href}' class="govuk-link">${content}<span class="govuk-visually-hidden"> ${value}</span></a>`;
}

const buildTableRow = (value) => ([
  {
    text: value
  },
  {
    text: ''
  },
  {
    html: buildLink('', 'Change')
  },
  {
    html: buildLink(`illness-disability-remove?remove=${value.toLowerCase().replace(/[^a-z0-9]/gi, '')}`, 'Remove')
  }
]);

// illness disability
const handleIllnessDisability = (input, data) => {
  if (!input || !data) {
    return;
  }
  if (input['illness-disability-manual']?.length > 0) {
    if (!data['illness-disability']) {
      data['illness-disability'] = [input['illness-disability-manual']];
      data['illness-disability-rows'] = [buildTableRow(input['illness-disability-manual'])];
    } else {
      data['illness-disability'].push(input['illness-disability-manual']);
      data['illness-disability-rows'].push(buildTableRow(input['illness-disability-manual']));
    }
    data['illness-disability-manual'] = input['illness-disability-manual'];
  }
  if (input['illness-disability']?.length > 0) {
    if (!data['illness-disability']) {
      data['illness-disability'] = [input['illness-disability']];
      data['illness-disability-rows'] = [buildTableRow(input['illness-disability'])];
    } else {
      data['illness-disability'].push(input['illness-disability']);
      data['illness-disability-rows'].push(buildTableRow(input['illness-disability']));
    }
  }
};

const handleIllnessStartDate = (input, data) => {
  if (!input || !data || !data['illness-disability-rows']) {
    return;
  }
  const lastEntry = data['illness-disability-rows'].length - 1;
  const maybe = 
    [
      data['illness-disability-rows'][lastEntry][0],
      {text: input['illness-start-date']},
      data['illness-disability-rows'][lastEntry][2],
      data['illness-disability-rows'][lastEntry][3],

    ];
  data['illness-disability-rows'][lastEntry] = maybe;

};

// aids-adaptations
const handleAidsAdaptations = (input, data) => {
  if (!input || !data) {
    return;
  }
  if (!data['aids-adaptations']) {
    data['aids-adaptations'] = [input['aids-adaptations']];
    data['aids-adaptations-rows'] = [buildTableRow(input['aids-adaptations'])];
  } else {
    data['aids-adaptations'].push(input['aids-adaptations']);
    data['aids-adaptations-rows'].push(buildTableRow(input['aids-adaptations']));
  }
};

const handleAidsAdaptationsDifficulty = (input, data) => {
  if (!input || !data || !data['aids-adaptations-rows']) {
    return;
  }
  const lastEntry = data['aids-adaptations-rows'].length - 1;
  const maybe = 
    [
      data['aids-adaptations-rows'][lastEntry][0],
      {text: input['aids-adaptations-difficulty']},
      data['aids-adaptations-rows'][lastEntry][2],
      data['aids-adaptations-rows'][lastEntry][3],

    ];
  data['aids-adaptations-rows'][lastEntry] = maybe;

};

module.exports = (req, res, next) => {
  if (!req.session.data) {
    req.session.data = {};
  }
  req.session.data = { ...req.session.data };

  if (req.body?.['illness-disability'] || req.body?.['illness-disability-manual']) {
    handleIllnessDisability(req.body, req.session.data);
  } else if (req.body?.['aids-adaptations']) {
    handleAidsAdaptations(req.body, req.session.data);
  } else {
    if (req.body?.['illness-start-date']) {
      handleIllnessStartDate(req.body, req.session.data);
    } else if (req.body?.['aids-adaptations-difficulty']) {
      handleAidsAdaptationsDifficulty(req.body, req.session.data);
    }
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
