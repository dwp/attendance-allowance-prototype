const express = require('express');

const router = express.Router();
const controllers = require('../controllers/sprint-75');
const { urls } = require('../utils/constants');

// start
router.use(urls.root, controllers.verificationCode);
router.use(`/${urls.start}`, controllers.start);
router.use(`/${urls.beforeYouStart}`, controllers.beforeYouStart);
router.use(`/${urls.helpingSomeoneIntro}`, controllers.helpingSomeoneIntro);

// eligibility
router.use(`/${urls.whoIsApplying}`, controllers.whoIsApplying);
router.use(`/${urls.whoIsApplyingIneligible}`, controllers.whoIsApplyingIneligible);
router.use(`/${urls.bestDescribe}`, controllers.bestDescribe);
router.use(`/${urls.specialRulesDeclaration}`, controllers.specialRulesDeclaration);
router.use(`/${urls.birthDate}`, controllers.birthDate);
router.use(`/${urls.birthDateIneligible}`, controllers.birthDateIneligible);
router.use(`/${urls.otherBenefits}`, controllers.otherBenefits);
router.use(`/${urls.otherBenefitsIneligible}`, controllers.otherBenefitsIneligible);
router.use(`/${urls.attendanceAllowanceIneligible}`, controllers.attendanceAllowanceIneligible);
router.use(`/${urls.nationality}`, controllers.nationality);
router.use(`/${urls.nationalityOther}`, controllers.nationalityOther);
router.use(`/${urls.residenceCountry}`, controllers.residenceCountry);
router.use(`/${urls.countryOutsideUKDuration}`, controllers.countryOutsideUkDuration);

// identity
router.use(`/${urls.nationalInsurance}`, controllers.nationalInsurance);
router.use(`/${urls.fullName}`, controllers.fullName);
router.use(`/${urls.homeAddressPostcode}`, controllers.homeAddressPostCode);
router.use(`/${urls.homeAddressSelect}`, controllers.homeAddressSelect);
router.use(`/${urls.homeAddressManual}`, controllers.homeAddressManual);
router.use(`/${urls.homeAddressInternational}`, controllers.homeAddressInternational);

// payability
router.use(`/${urls.careHomeHospital}`, controllers.careHomeHospital);
router.use(`/${urls.sercoCareHomeHospital}`, controllers.sercoCareHomeHospital);

// illness and disabilities
router.use(`/${urls.illnessDisability}`, controllers.illnessDisability);
router.use(`/${urls.illnessDisabilityDate}`, controllers.illnessDisabilityDate);
router.use(`/${urls.illnessDisabilityDateManual}`, controllers.illnessDisabilityDateManual);
router.use(`/${urls.illnessDisabilityAdded}`, controllers.illnessDisabilityAdded);
router.use(`/${urls.illnessDisabilityManual}`, controllers.illnessDisabilityManual);
router.use(`/${urls.illnessDisabilityRemove}`, (req, res) => {
  req.session.data['illness-disability'] = req.session.data['illness-disability'].filter((e) => e.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  req.session.data['illness-disability-rows'] = req.session.data['illness-disability-rows'].filter((e) => e?.[0]?.text.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  return res.redirect(`${urls.illnessDisability}`);
});

// special rules
router.use(`/${urls.specialRulesDeclaration}`, controllers.specialRulesDeclaration);
router.use(`/${urls.specialRulesForm}`, controllers.specialRulesForm);

// renal dyalisis
router.use(`/${urls.renalDialysis}`, controllers.renalDialysis);
router.use(`/${urls.renalDialysisWhere}`, controllers.renalDialysisWhere);
router.use(`/${urls.renalDialysisWhen}`, controllers.renalDialysisWhen);
router.use(`/${urls.renalDialysisFrequency}`, controllers.renalDialysisFrequency);
router.use(`/${urls.renalDialysisHelp}`, controllers.renalDialysisHelp);

// surgery or treatment
router.use(`/${urls.treatmentSurgery}`, controllers.treatmentSurgery);
router.use(`/${urls.treatmentSurgeryInformation}`, controllers.treatmentSurgeryInformation);

// consent
router.use(`/${urls.consent}`, controllers.consent);
router.use(`/${urls.surgeryMedicalCentre}`, controllers.surgeryMedicalCentre);
router.use(`/${urls.evidence}`, controllers.evidence);

// care needs daytime
router.use(`/${urls.dayDifficulties}`, controllers.dayDifficulties);
router.use(`/${urls.difficultiesStartDate}`, controllers.difficultiesStartDate);
router.use(`/${urls.bedDay}`, controllers.bedDay);
router.use(`/${urls.bedDayWhy}`, controllers.bedDayWhy);
router.use(`/${urls.returnBedDay}`, controllers.returnBedDay);
router.use(`/${urls.washDay}`, controllers.washDay);
router.use(`/${urls.washDayWhy}`, controllers.washDayWhy);
router.use(`/${urls.additinalWashDay}`, controllers.additionalWashDay);
router.use(`/${urls.dressDay}`, controllers.dressDay);
router.use(`/${urls.dressDayWhy}`, controllers.dressDayWhy);
router.use(`/${urls.additionalDressDay}`, controllers.additionalDressDay);
router.use(`/${urls.movingIndoorsDay}`, controllers.movingIndoorsDay);
router.use(`/${urls.movingIndoorsWhy}`, controllers.movingIndoorsWhy);
router.use(`/${urls.movingIndoorsStairs}`, controllers.movingIndoorsStairs);
router.use(`/${urls.fallingOrStumbling}`, controllers.fallingOrStumbling);
router.use(`/${urls.fallingOrStumblingWhy}`, controllers.fallingOrStumblingWhy);
router.use(`/${urls.stumbling}`, controllers.stumbling);
router.use(`/${urls.fallingWhen}`, controllers.fallingWhen);
router.use(`/${urls.falling}`, controllers.falling);
router.use(`/${urls.fallingHelp}`, controllers.fallingHelp);
router.use(`/${urls.toiletDay}`, controllers.toiletDay);
router.use(`/${urls.toiletDayWhy}`, controllers.toiletDayWhy);
router.use(`/${urls.toiletDayFrequency}`, controllers.toiletDayFrequency);
router.use(`/${urls.eatDrinkDay}`, controllers.eatDrinkDay);
router.use(`/${urls.eatDrinkDayWhy}`, controllers.eatDrinkDayWhy);
router.use(`/${urls.eatDrinkDayFrequency}`, controllers.eatDrinkDayFrequency);
router.use(`/${urls.medicationTreatmentDay}`, controllers.medicationTreatmentDay);
router.use(`/${urls.medicationTreatmentDayWhy}`, controllers.medicationTreatmentDayWhy);
router.use(`/${urls.medicationTreatmentDayFrequency}`, controllers.medicationTreatmentDayFrequency);
router.use(`/${urls.socialActivitiesDay}`, controllers.socialActivitiesDay);
router.use(`/${urls.socialActivitiesDayFrequency}`, controllers.socialActivitiesDayFrequency);
router.use(`/${urls.communicationDay}`, controllers.communicationDay);
router.use(`/${urls.communicationDayDifficulties}`, controllers.communicationDayDifficulties);
router.use(`/${urls.keepEyeIntroduction}`, controllers.keepEyeIntroduction);
router.use(`/${urls.keepEyeChoice}`, controllers.keepEyeChoice);
router.use(`/${urls.keepEyeWhy}`, controllers.keepEyeWhy);
router.use(`/${urls.keepEyeDuration}`, controllers.keepEyeDuration);
router.use(`/${urls.safeDayNight}`, controllers.safeDayNight);
router.use(`/${urls.safeDayWhy}`, controllers.safeDayWhy);
router.use(`/${urls.safeDayLength}`, controllers.safeDayLength);

// night time care needs
router.use(`/${urls.nightDifficulties}`, controllers.nightDifficulties);
router.use(`/${urls.turningOverNightFrequency}`, controllers.turningOverNightFrequency);
router.use(`/${urls.bedPositionNight}`, controllers.bedPositionNight);
router.use(`/${urls.bedPositionNightFrequency}`, controllers.bedPositionNightFrequency);
router.use(`/${urls.toiletNight}`, controllers.toiletNight);
router.use(`/${urls.toiletNightWhy}`, controllers.toiletNightWhy);
router.use(`/${urls.toiletNightFrequency}`, controllers.toiletNightFrequency);
router.use(`/${urls.cleaningSoiledNight}`, controllers.cleaningSoiledNight);
router.use(`/${urls.cleaningSoiledNightFrequency}`, controllers.cleaningSoiledNightFrequency);
router.use(`/${urls.medicationTreatmentNight}`, controllers.medicationTreatmentNight);
router.use(`/${urls.medicationTreatmentNightWhy}`, controllers.medicationTreatmentNightWhy);
router.use(`/${urls.medicationTreatmentNightFrequency}`, controllers.medicationTreatmentNightFrequency);
router.use(`/${urls.watchOverYouIntro}`, controllers.watchOverYouIntro);
router.use(`/${urls.watchOverNight}`, controllers.watchOverNight);
router.use(`/${urls.watchOverNightWhy}`, controllers.watchOverNightWhy);
router.use(`/${urls.watchOverNightFrequency}`, controllers.watchOverNightFrequency);
router.use(`/${urls.safeNightFrequency}`, controllers.safeNightFrequency);
router.use(`/${urls.safeNightLength}`, controllers.safeNightLength);

// aids and adaptations
router.use(`/${urls.aidsAdaptationsQuestion}`, controllers.aidsAdaptationQuestion);
router.use(`/${urls.aidsAdaptationsReason}`, controllers.aidsAdaptationReason);
router.use(`/${urls.aidsAdaptations}`, controllers.aidsAdaptations);
router.use(`/${urls.aidsAdaptationsDifficulty}`, controllers.aidsAdaptationsDifficulty);
router.use(`/${urls.aidsAdaptationsAdded}`, controllers.aidsAdaptationsAdded);
router.use(`/${urls.aidsAdaptationsRemove}`, (req, res) => {
  req.session.data['aids-adaptations'] = req.session.data['aids-adaptations'].filter((e) => e.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  req.session.data['aids-adaptations-rows'] = req.session.data['aids-adaptations-rows'].filter((e) => e?.[0]?.text.toLowerCase().replace(/[^a-z0-9]/gi, '') !== req?.query?.remove);
  return res.redirect(`${urls.aidsAdaptationsAdded}`);
});

// contact details
router.use(`/${urls.telephoneNumber}`, controllers.telephoneNumber);
router.use(`/${urls.telephoneNumberOther}`, controllers.telephoneNumberOther);
router.use(`/${urls.addContactDetails}`, controllers.addContactDetails);
router.use(`/${urls.preferenceContact}`, controllers.preferenceContact);
router.use(`/${urls.alternativeFormats}`, controllers.alternativeFormats);
router.use(`/${urls.emailConfirm}`, controllers.emailConfirm);

// claim submission
router.use(`/${urls.claimSubmission}`, controllers.claimSubmission);
router.use(`/${urls.sercoLateApplication}`, controllers.sercoLateApplication);
router.use(`/${urls.done}`, controllers.done);

// check your answers
router.use(`/${urls.checkAnswersDetails}`, controllers.checkAnswersDetails);
router.use(`/${urls.checkAnswersDay}`, controllers.checkAnswersDay);
router.use(`/${urls.checkAnswersNight}`, controllers.checkAnswersNight);
router.use(`/${urls.checkAnswersStartDate}`, controllers.checkAnswersStartDate);
router.use(`/${urls.checkAnswersContactDetails}`, controllers.checkAnswersContactDetails);
router.use(`/${urls.checkAnswersFullList}`, controllers.checkAnswersFullList);
router.use(`/${urls.checkAnswersSpecialRules}`, controllers.checkAnswersSpecialRules);

module.exports = router;
