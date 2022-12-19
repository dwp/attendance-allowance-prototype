const validationConsolidator = require('./validation-consolidator');

const routeToNext = (req, res, validation, source, target, do307) => {
  if (validationConsolidator.hasValidationErrors(req, validation)) {
    res.redirect(`${req.version}${source}`);
  } else {
    delete req.session.data.validation;
    if (req.session.data.C_Y_A && req.session.data.C_Y_A === `${source}`) {
      res.redirect(`${req.version}check-your-answers`);
    } else if (do307) {
      // when joining activity stuff, want a 307
      res.redirect(307, `${req.version}${target}`);
    } else {
      res.redirect(`${req.version}${target}`);
    }
  }
};

module.exports = { routeToNext };
