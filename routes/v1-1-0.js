const express = require('express');

const router = express.Router();
const controllers = require('../controllers/v1-1-0');
const { urls } = require('../utils/constants');

router.use(urls.root, controllers.verificationCode);
router.use(`/${urls.start}`, controllers.start);
router.use(`/${urls.dob}`, controllers.dateOfBirth);
router.use(`/${urls.benefits}`, controllers.benefits);
router.use(`/${urls.country}`, controllers.country);
router.use('/country-outside-uk', controllers.countryOutsideUk);
router.use(`/${urls.countryOutsideUKDuration}`, controllers.countryOutsideUkDuration);
router.use(`/${urls.nationalInsurance}`, controllers.nationalInsurance);
router.use(`/${urls.fullName}`, controllers.fullName);
router.use(`/${urls.homeAddressPostcode}`, controllers.homeAddressPostCode);
router.use(`/${urls.homeAddressPick}`, controllers.homeAddressPick);
router.use(`/${urls.care}`, controllers.care);
router.use(`/${urls.supervision}`, controllers.supervision);
router.use(`/${urls.activities}`, controllers.activities);
router.use(`/${urls.activityWashing}`, controllers.activity1Washing);
router.use(`/${urls.activityDressing}`, controllers.activity2Dressing);
router.use(`/${urls.activityBed}`, controllers.activity3Bed);
router.use(`/${urls.activityMedicine}`, controllers.activity4Medicine);
router.use(`/${urls.activityIndoors}`, controllers.activity5Indoors);
router.use(`/${urls.activityEating}`, controllers.activity6Eating);
router.use(`/${urls.activityToilet}`, controllers.activity7Toilet);
router.use(`/${urls.communicationNeeds}`, controllers.communicationNeeds);
router.use(`/${urls.illness}`, controllers.illness);
router.use(`/${urls.treatment}`, controllers.treatment);
router.use(`/${urls.telephoneNumber}`, controllers.telephoneNumber);
router.use(`/${urls.emailConfirm}`, controllers.emailConfirm);
router.use(`/${urls.nationality}`, controllers.nationality);
router.use(`/${urls.nationalityOther}`, controllers.nationalityOther);
router.use(`/${urls.checkYourAnswers}`, controllers.checkYourAnswers);

module.exports = router;
