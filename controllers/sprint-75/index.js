// start
const verificationCode = require('./start/verification-code');
const start = require('./start/start');
const beforeYouStart = require('./start/before-you-start');
const helpingSomeoneIntro = require('./start/helping-someone-intro');

// eligibility
const birthDate = require('./eligibility/birth-date');
const birthDateIneligible = require('./eligibility/birth-date-ineligible');
const otherBenefits = require('./eligibility/other-benefits');
const otherBenefitsIneligible = require('./eligibility/other-benefits-ineligible');
const attendanceAllowanceIneligible = require('./eligibility/attendance-allowance-ineligible');
const nationality = require('./eligibility/nationality');
const nationalityOther = require('./eligibility/nationality-other');
const residenceCountry = require('./eligibility/residence-country');
const countryOutsideUkDuration = require('./eligibility/country-outside-uk-duration');
const whoIsApplying = require('./eligibility/who-is-applying');
const whoIsApplyingIneligible = require('./eligibility/who-is-applying-ineligible');
const bestDescribe = require('./eligibility/best-describe');
const specialRulesDeclaration = require('./eligibility/special-rules-declaration');

// identity
const nationalInsurance = require('./identity/national-insurance');
const fullName = require('./identity/full-name');
const homeAddressPostCode = require('./identity/home-address-postcode');
const homeAddressSelect = require('./identity/home-address-select');
const homeAddressManual = require('./identity/home-address-manual');
const homeAddressInternational = require('./identity/home-address-international');

// payability
const careHomeHospital = require('./payability/care-home-hospital');
const sercoCareHomeHospital = require('./payability/serco-care-home-hospital');

// illness and disabilities
const illnessDisability = require('./illness-and-disabilities/illness-disability');
const illnessDisabilityDate = require('./illness-and-disabilities/illness-disability-date');
const illnessDisabilityDateManual = require('./illness-and-disabilities/illness-disability-date-manual');
const illnessDisabilityAdded = require('./illness-and-disabilities/illness-disability-added');
const illnessDisabilityManual = require('./illness-and-disabilities/illness-disability-manual');

// renal dyalisis
const renalDialysis = require('./renal-dyalisis/renal-dialysis');
const renalDialysisWhere = require('./renal-dyalisis/renal-dialysis-where');
const renalDialysisWhen = require('./renal-dyalisis/renal-dialysis-when');
const renalDialysisFrequency = require('./renal-dyalisis/renal-dialysis-frequency');
const renalDialysisHelp = require('./renal-dyalisis/renal-dialysis-help');

// special rules
const specialRulesForm = require('./special-rules/special-rules-form');

// surgery or treatment
const treatmentSurgery = require('./surgery-or-treatment/treatment-surgery');
const treatmentSurgeryInformation = require('./surgery-or-treatment/treatment-surgery-information');

// consent
const consent = require('./consent/consent');
const surgeryMedicalCentre = require('./consent/surgery-medical-centre');
const evidence = require('./consent/evidence');

// care needs daytime
const dayDifficulties = require('./care-needs-day/day-difficulties');
const difficultiesStartDate = require('./care-needs-day/difficulties-start-date');
const bedDay = require('./care-needs-day/bed-day');
const bedDayWhy = require('./care-needs-day/bed-day-why');
const returnBedDay = require('./care-needs-day/return-bed-day');
const washDay = require('./care-needs-day/wash-day');
const washDayWhy = require('./care-needs-day/wash-day-why');
const additionalWashDay = require('./care-needs-day/additional-wash-day');
const dressDay = require('./care-needs-day/dress-day');
const dressDayWhy = require('./care-needs-day/dress-day-why');
const additionalDressDay = require('./care-needs-day/additional-dress-day');
const movingIndoorsDay = require('./care-needs-day/moving-indoors-day');
const movingIndoorsWhy = require('./care-needs-day/moving-indoors-why');
const movingIndoorsStairs = require('./care-needs-day/moving-indoors-stairs');
const fallingOrStumbling = require('./care-needs-day/falling-or-stumbling');
const fallingOrStumblingWhy = require('./care-needs-day/falling-or-stumbling-why');
const stumbling = require('./care-needs-day/stumbling');
const fallingWhen = require('./care-needs-day/falling-when');
const falling = require('./care-needs-day/falling');
const fallingHelp = require('./care-needs-day/falling-help');
const toiletDay = require('./care-needs-day/toilet-day');
const toiletDayWhy = require('./care-needs-day/toilet-day-why');
const toiletDayFrequency = require('./care-needs-day/toilet-day-frequency');
const eatDrinkDay = require('./care-needs-day/eat-drink-day');
const eatDrinkDayWhy = require('./care-needs-day/eat-drink-day-why');
const eatDrinkDayFrequency = require('./care-needs-day/eat-drink-day-frequency');
const medicationTreatmentDay = require('./care-needs-day/medication-treatment-day');
const medicationTreatmentDayWhy = require('./care-needs-day/medication-treatment-day-why');
const medicationTreatmentDayFrequency = require('./care-needs-day/medication-treatment-day-frequency');
const socialActivitiesDay = require('./care-needs-day/social-activities-day');
const socialActivitiesDayFrequency = require('./care-needs-day/social-activities-day-frequency');
const communicationDay = require('./care-needs-day/communication-day');
const communicationDayDifficulties = require('./care-needs-day/communication-day-difficulties');
const keepEyeIntroduction = require('./care-needs-day/keep-eye-introduction');
const keepEyeChoice = require('./care-needs-day/keep-eye-choice');
const keepEyeWhy = require('./care-needs-day/keep-eye-why');
const keepEyeDuration = require('./care-needs-day/keep-eye-duration');
const safeDayNight = require('./care-needs-day/safe-day-night');
const safeDayWhy = require('./care-needs-day/safe-day-why');
const safeDayLength = require('./care-needs-day/safe-day-length');

// night time care needs
const nightDifficulties = require('./care-needs-night/night-difficulties');
const turningOverNightFrequency = require('./care-needs-night/turning-over-night-frequency');
const bedPositionNight = require('./care-needs-night/bed-position-night');
const bedPositionNightFrequency = require('./care-needs-night/bed-position-night-frequency');
const toiletNight = require('./care-needs-night/toilet-night');
const toiletNightWhy = require('./care-needs-night/toilet-night-why');
const toiletNightFrequency = require('./care-needs-night/toilet-night-frequency');
const cleaningSoiledNight = require('./care-needs-night/cleaning-soiled-night');
const cleaningSoiledNightFrequency = require('./care-needs-night/cleaning-soiled-night-frequency');
const medicationTreatmentNight = require('./care-needs-night/medication-treatment-night');
const medicationTreatmentNightWhy = require('./care-needs-night/medication-treatment-night-why');
const medicationTreatmentNightFrequency = require('./care-needs-night/medication-treatment-night-frequency');
const watchOverYouIntro = require('./care-needs-night/watch-over-you-intro');
const watchOverNight = require('./care-needs-night/watch-over-night');
const watchOverNightWhy = require('./care-needs-night/watch-over-night-why');
const watchOverNightFrequency = require('./care-needs-night/watch-over-night-frequency');
const safeNightFrequency = require('./care-needs-night/safe-night-frequency');
const safeNightLength = require('./care-needs-night/safe-night-length');

// aids and adaptations
const aidsAdaptationQuestion = require('./aids-and-adaptations/aids-adaptations-question');
const aidsAdaptationReason = require('./aids-and-adaptations/aids-adaptations-reason');
const aidsAdaptations = require('./aids-and-adaptations/aids-adaptations');
const aidsAdaptationsDifficulty = require('./aids-and-adaptations/aids-adaptations-difficulty');
const aidsAdaptationsAdded = require('./aids-and-adaptations/aids-adaptations-added');

// contact details
const telephoneNumber = require('./contact-details/telephone-number');
const telephoneNumberOther = require('./contact-details/telephone-number-other');
const addContactDetails = require('./contact-details/add-contact-details');
const preferenceContact = require('./contact-details/preference-contact');
const alternativeFormats = require('./contact-details/alternative-formats');
const emailConfirm = require('./contact-details/email-confirm');

// claim submission
const claimSubmission = require('./claim-submission/claim-submission');
const sercoLateApplication = require('./claim-submission/serco-late-application');
const done = require('./claim-submission/done');

// check your answers
const checkAnswersDetails = require('./check-your-answers/check-answers-details');
const checkAnswersDay = require('./check-your-answers/check-answers-day');
const checkAnswersNight = require('./check-your-answers/check-answers-night');
const checkAnswersStartDate = require('./check-your-answers/check-answers-start-date');
const checkAnswersContactDetails = require('./check-your-answers/check-answers-contact-details');
const checkAnswersFullList = require('./check-your-answers/check-answers-full-list');
const checkAnswersSpecialRules = require('./check-your-answers/check-answers-special-rules');

module.exports = {
  verificationCode,
  start,
  beforeYouStart,
  helpingSomeoneIntro,
  whoIsApplying,
  whoIsApplyingIneligible,
  bestDescribe,
  birthDate,
  birthDateIneligible,
  otherBenefits,
  otherBenefitsIneligible,
  attendanceAllowanceIneligible,
  residenceCountry,
  countryOutsideUkDuration,
  nationalInsurance,
  fullName,
  homeAddressPostCode,
  homeAddressManual,
  homeAddressInternational,
  treatmentSurgery,
  careHomeHospital,
  sercoCareHomeHospital,
  illnessDisability,
  illnessDisabilityDate,
  illnessDisabilityDateManual,
  illnessDisabilityAdded,
  illnessDisabilityManual,
  telephoneNumber,
  telephoneNumberOther,
  preferenceContact,
  dayDifficulties,
  nightDifficulties,
  emailConfirm,
  alternativeFormats,
  homeAddressSelect,
  checkAnswersFullList,
  checkAnswersDetails,
  checkAnswersStartDate,
  checkAnswersContactDetails,
  checkAnswersSpecialRules,
  checkAnswersNight,
  nationality,
  nationalityOther,
  specialRulesDeclaration,
  specialRulesForm,
  surgeryMedicalCentre,
  renalDialysis,
  renalDialysisWhere,
  renalDialysisWhen,
  renalDialysisFrequency,
  renalDialysisHelp,
  treatmentSurgeryInformation,
  bedDay,
  bedDayWhy,
  additionalWashDay,
  additionalDressDay,
  returnBedDay,
  washDay,
  washDayWhy,
  dressDay,
  dressDayWhy,
  turningOverNightFrequency,
  bedPositionNight,
  bedPositionNightFrequency,
  toiletNight,
  toiletNightWhy,
  toiletNightFrequency,
  cleaningSoiledNight,
  cleaningSoiledNightFrequency,
  medicationTreatmentNight,
  medicationTreatmentNightWhy,
  medicationTreatmentNightFrequency,
  difficultiesStartDate,
  movingIndoorsDay,
  movingIndoorsWhy,
  movingIndoorsStairs,
  fallingOrStumbling,
  fallingOrStumblingWhy,
  fallingWhen,
  stumbling,
  falling,
  fallingHelp,
  toiletDay,
  toiletDayWhy,
  toiletDayFrequency,
  eatDrinkDay,
  eatDrinkDayWhy,
  eatDrinkDayFrequency,
  medicationTreatmentDay,
  medicationTreatmentDayWhy,
  medicationTreatmentDayFrequency,
  socialActivitiesDay,
  socialActivitiesDayFrequency,
  communicationDay,
  communicationDayDifficulties,
  checkAnswersDay,
  watchOverYouIntro,
  watchOverNight,
  watchOverNightWhy,
  watchOverNightFrequency,
  safeDayNight,
  safeDayWhy,
  safeDayLength,
  safeNightFrequency,
  safeNightLength,
  keepEyeIntroduction,
  keepEyeChoice,
  keepEyeWhy,
  keepEyeDuration,
  aidsAdaptationQuestion,
  aidsAdaptationReason,
  aidsAdaptations,
  aidsAdaptationsDifficulty,
  aidsAdaptationsAdded,
  claimSubmission,
  done,
  sercoLateApplication,
  addContactDetails,
  consent,
  evidence,
};
