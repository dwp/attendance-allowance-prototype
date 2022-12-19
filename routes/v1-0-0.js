const express = require('express');

const router = express.Router();

const VERSION_ROOT = '/v1-0-0/';

const activityPages = [{
  in: `${VERSION_ROOT}activity-1-washing`,
  out: `${VERSION_ROOT}activity-2-dressing`,
  activity: 'washing',
  fieldName: 'washing-yourself',
  nextActivity: 'dressing',
}, {
  in: `${VERSION_ROOT}activity-2-dressing`,
  out: `${VERSION_ROOT}activity-3-bed`,
  activity: 'dressing',
  fieldName: 'dressing-yourself',
  nextActivity: 'bed',
}, {
  in: `${VERSION_ROOT}activity-3-bed`,
  out: `${VERSION_ROOT}activity-4-medicine`,
  activity: 'bed',
  fieldName: 'getting-in-or-out-of-bed',
  nextActivity: 'medicine',
}, {
  in: `${VERSION_ROOT}activity-4-medicine`,
  out: `${VERSION_ROOT}activity-5-indoors`,
  activity: 'medicine',
  fieldName: 'taking-medication',
  nextActivity: 'indoors',
}, {
  in: `${VERSION_ROOT}activity-5-indoors`,
  out: `${VERSION_ROOT}activity-6-eating`,
  activity: 'indoors',
  fieldName: 'moving-around-indoors',
  nextActivity: 'eating',
}, {
  in: `${VERSION_ROOT}activity-6-eating`,
  out: `${VERSION_ROOT}activity-7-toilet`,
  activity: 'eating',
  fieldName: 'eating-and-drinking',
  nextActivity: 'toilet',
}, {
  in: `${VERSION_ROOT}activity-7-toilet`,
  out: `${VERSION_ROOT}communication`,
  activity: 'toilet',
  fieldName: 'using-or-getting-to-the-toilet',
  nextActivity: 'communication',
}];

activityPages.forEach((activityPage) => {
  router.post(activityPage.in, (req, res) => {
    if (req.body && req.body.checkYourAnswers === 'check-your-answers') {
      res.redirect('check-your-answers');
    }
    if ((req.query.referrer === 'check-your-answers')
      || (req.session.data.activity && req.session.data.activity.includes(activityPage.fieldName)
      && (req.session.data[`${activityPage.activity}-difficulty-kind`] === undefined
      || req.session.data[`${activityPage.activity}-difficulty-kind`].length === 0))) {
      res.redirect(activityPage.in);
    } else {
      res.redirect(307, activityPage.out);
    }
  });
});

// Signpost users under pension age
router.post(`${VERSION_ROOT}benefits`, (req, res) => {
  if (req.session.data['date-of-birth-year'] <= 1955) {
    res.redirect(`${VERSION_ROOT}benefits`);
  } else {
    res.redirect(`${VERSION_ROOT}date-of-birth-ineligible`);
  }
});

// Signpost users inelgible due to other benefits
router.post(`${VERSION_ROOT}country`, (req, res) => {
  if (req.session.data.benefits
      && (req.session.data.benefits.includes('disability-living-allowance') === true
    || req.session.data.benefits.includes('personal-independence-payment') === true)) {
    res.redirect(`${VERSION_ROOT}benefits-ineligible`);
  } else {
    res.redirect(`${VERSION_ROOT}country`);
  }
});

// Signpost users inelgible due to country
router.post(`${VERSION_ROOT}country-outside-uk`, (req, res) => {
  if (req.session.data.country === 'abroad') {
    res.redirect(`${VERSION_ROOT}country-ineligible`);
  } else {
    res.redirect(`${VERSION_ROOT}country-outside-uk`);
  }
});

// Check if they have said they have NOT been outside UK
// If the answer is no then don't ask how long for
router.post(`${VERSION_ROOT}country-outside-uk-duration`, (req, res) => {
  if (req.session.data['lived-outside-uk-in-last-3-years'] === 'yes') {
    res.redirect(`${VERSION_ROOT}country-outside-uk-duration`);
  } else {
    res.redirect(`${VERSION_ROOT}national-insurance`);
  }
});

// If they are heading to NI directly from NOT living outside UK
router.post(`${VERSION_ROOT}national-insurance-direct`, (req, res) => {
  if (req.session.data['lived-outside-uk-in-last-3-years'] === 'yes') {
    res.redirect(`${VERSION_ROOT}country-outside-uk-duration`);
  } else {
    req.session.data['lived-outside-uk-more-than-12m-in-last-3-years'] = 'n/a';
    res.redirect(`${VERSION_ROOT}national-insurance`);
  }
});

// If they are heading to NI indirectly via the how long question
// FOR TIME BEING always direct to NI screen, whether they state Y ot N to time abroad
router.post(`${VERSION_ROOT}national-insurance-indirect`, (req, res) => {
  if (req.session.data['lived-outside-uk-more-than-12m-in-last-3-years'] === 'no') {
    res.redirect(`${VERSION_ROOT}national-insurance`);
  } else {
    res.redirect(`${VERSION_ROOT}country-outside-uk-duration-ineligible`);
  }
});

module.exports = router;
