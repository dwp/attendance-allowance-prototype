const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.otherBenefits,
  previous: urls.specialRulesDeclaration,
  next: [
    {
      page: urls.attendanceAllowanceIneligible,
      condition: {
        field: urls.otherBenefits,
        value: ["attendance-allowance"],
        match: match.anyOne,
      },
    },
    {
      page: urls.pipIneligible,
      condition: {
        field: urls.otherBenefits,
        value: ["personal-independence-payment"],
        match: match.anyOne,
      },
    },
    {
      page: urls.adpIneligible,
      condition: {
        field: urls.otherBenefits,
        value: ["adult-disability-payment"],
        match: match.anyOne,
      },
    },
    {
      page: urls.dlaIneligible,
      condition: {
        field: urls.otherBenefits,
        value: ["disability-living-allowance"],
        match: match.anyOne,
      },
    },
    {
      page: urls.nationality,
    },
  ],
  validation: {
    type: validation.checkboxes,
    errors: {
      required: "Select if you get any benefits",
    },
  },
};

module.exports = registerController(config.name, config);
