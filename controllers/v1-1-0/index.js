const verificationCode = require('./verification-code');
const start = require('./start');
const dateOfBirth = require('./date-of-birth');
const benefits = require('./benefits');
const country = require('./country');
const countryOutsideUk = require('./country-outside-uk');
const countryOutsideUkDuration = require('./country-outside-uk-duration');
const nationalInsurance = require('./national-insurance');
const homeAddressPostCode = require('./home-address-postcode');
const homeAddressPick = require('./home-address-pick');
const care = require('./care');
const communicationNeeds = require('./communication-needs');
const illness = require('./illness');
const treatment = require('./treatment');
const nationality = require('./nationality');
const nationalityOther = require('./nationality-other');
const fullName = require('./full-name');
const activities = require('./activities');
const telephoneNumber = require('./telephone-number');
const emailConfirm = require('./email-confirm');
const supervision = require('./supervision');

// following pages have their own router (activity router)
const activity1Washing = require('./activities/activity-1-washing');
const activity2Dressing = require('./activities/activity-2-dressing');
const activity3Bed = require('./activities/activity-3-bed');
const activity4Medicine = require('./activities/activity-4-medicine');
const activity5Indoors = require('./activities/activity-5-indoors');
const activity6Eating = require('./activities/activity-6-eating');
const activity7Toilet = require('./activities/activity-7-toilet');

const checkYourAnswers = require('./check-your-answers');

module.exports = {
  verificationCode,
  start,
  dateOfBirth,
  benefits,
  country,
  countryOutsideUk,
  countryOutsideUkDuration,
  nationalInsurance,
  fullName,
  homeAddressPostCode,
  treatment,
  care,
  supervision,
  communicationNeeds,
  illness,
  telephoneNumber,
  activities,
  activity1Washing,
  activity2Dressing,
  activity3Bed,
  activity4Medicine,
  activity5Indoors,
  activity6Eating,
  activity7Toilet,
  emailConfirm,
  homeAddressPick,
  checkYourAnswers,
  nationality,
  nationalityOther,
};
