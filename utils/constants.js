module.exports = {
  urls: {
    // start
    root: '/',
    start: 'start',

    // eligibility
    personClaiming: 'person-claiming',
    personClaimingIneligible: 'person-claiming-ineligible',
    birthDate: 'birth-date',
    birthDateIneligible: 'birth-date-ineligible',
    otherBenefits: 'other-benefits',
    otherBenefitsIneligible: 'other-benefits-ineligible',
    nationality: 'nationality',
    nationalityOther: 'nationality-other',
    residenceCountry: 'residence-country',
    residenceCountryIneligible: 'residence-country-ineligible',
    countryOutsideUKDuration: 'country-outside-uk-duration',
    countryOutsideUKDurationInelgible: 'country-outside-uk-duration-ineligible',

    // identity
    nationalInsurance: 'national-insurance',
    fullName: 'full-name',
    homeAddressPostcode: 'home-address-postcode',
    homeAddressSelect: 'home-address-select',
    homeAddressManual: 'home-address-manual',
    homeAddressInternational: 'home-address-international',

    // payability
    careHomeHospital: 'care-home-hospital',

    // illness and disabilities
    illnessDisability: 'illness-disability',
    illnessDisabilityAdded: 'illness-disability-added',

    // special rules
    specialRulesDeclaration: 'special-rules-declaration',
    specialRulesForm: 'special-rules-form',
    surgeryMedicalCentre: 'surgery-medical-centre',

    // renal dyalisis
    renalDialysis: 'renal-dialysis',
    renalDialysisWhere: 'renal-dialysis-where',
    renalDialysisWhen: 'renal-dialysis-when',
    renalDialysisFrequency: 'renal-dialysis-frequency',
    renalDialysisHelp: 'renal-dialysis-help',

    // surgery or treatment
    treatmentSurgery: 'treatment-surgery',
    treatmentSurgeryInformation: 'treatment-surgery-information',

    // care needs daytime
    dayDifficulties: 'day-difficulties',
    difficultiesStartDate: 'difficulties-start-date',
    bedDay: 'bed-day',
    returnBedDay: 'return-bed-day',
    washDay: 'wash-day',
    additinalWashDay: 'additional-wash-day',
    dressDay: 'dress-day',
    additionalDressDay: 'additional-dress-day',
    movingIndoorsDay: 'moving-indoors-day',
    fallingOrStumbling: 'falling-or-stumbling',
    stumbling: 'stumbling',
    falling: 'falling',
    toiletDay: 'toilet-day',
    toiletDayFrequency: 'toilet-day-frequency',
    eatDrinkDay: 'eat-drink-day',
    eatDrinkDayFrequency: 'eat-drink-day-frequency',
    medicationTreatmentDay: 'medication-treatment-day',
    medicationTreatmentDayFrequency: 'medication-treatment-day-frequency',
    socialActivitiesDay: 'social-activities-day',
    socialActivitiesDayFrequency: 'social-activities-day-frequency',
    communicationDay: 'communication-day',
    communicationDayFrequency: 'communication-day-frequency',
    communicationDayDifficulties: 'communication-day-difficulties',
    keepEyeIntroduction: 'keep-eye-introduction',
    keepEyeChoice: 'keep-eye-choice',
    keepEyeWhy: 'keep-eye-why',
    keepEyeDuration: 'keep-eye-duration',

    // night time care needs
    nightDifficulties: 'night-difficulties',
    bedPositionNight: 'bed-position-night',
    bedPositionNightFrequency: 'bed-position-night-frequency',
    toiletNight: 'toilet-night',
    toiletNightFrequency: 'toilet-night-frequency',
    cleaningSoiledNight: 'cleaning-soiled-night',
    cleaningSoiledNightFrequency: 'cleaning-soiled-night-frequency',
    medicationTreatmentNight: 'medication-treatment-night',
    medicationTreatmentNightFrequency: 'medication-treatment-night-frequency',
    watchOverYouIntro: 'watch-over-you-intro',
    watchOverNight: 'watch-over-night',
    watchOverNightWhy: 'watch-over-night-why',
    watchOverNightFrequency: 'watch-over-night-frequency',

    // contact details
    telephoneNumber: 'telephone-number',
    alternativeFormats: 'alternative-formats',
    emailConfirm: 'email-confirm',

    // check your answers
    checkAnswersDetails: 'check-answers-details',
    checkAnswersDay: 'check-answers-day',
    checkAnswersNight: 'check-answers-night',
    checkAnswersStartDate: 'check-answers-start-date',
    checkAnswersContactDetails: 'check-answers-contact-details',
    checkAnswersSpecialRules: 'check-answers-special-rules',

    // claim submission
    claimSubmission: 'claim-submission',
    checkAnswersFullList: 'check-answers-full-list',

  },
  validation: {
    checkboxes: 'checkboxes',
    dateInput: 'dateInput',
    radios: 'radios',
    select: 'select',
    textInput: 'textInput',
    match: 'match',
  },
  match: {
    value: 'value',
    anyOne: 'any-one',
    all: 'all',
    none: 'none',
    greaterThan: 'greater-than',
    lessThan: 'less-than',
  },
  options: {
    none: 'none',
  },
};
