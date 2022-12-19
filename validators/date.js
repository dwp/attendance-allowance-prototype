class DateValidator {
  constructor(options, errors) {
    this.name = '';
    this.valid = true;
    this.options = {
      required: true,
    };

    Object.assign(this.options, options);

    this.fullYear = new Date().getFullYear();
    this.errors = {
      required: 'You must enter a value.',
      requiredDay: 'You must enter a value for day.',
      requiredMonth: 'You must enter a value for month.',
      requiredYear: 'You must enter a value for year.',
      validDay: 'You must enter a valid value for day.',
      validMonth: 'You must enter a valid value for month.',
      validYear: 'You must enter a valid value for year.',
      invalidDate: 'You must enter a valid date.',
    };

    Object.assign(this.errors, errors);
  }

  validate(value, field) {
    if (this.options.required && !value) {
      this.valid = false;
      this.error = {
        href: `#${this.options.name}`,
      };
      if (field === 'day') {
        this.error.text = this.errors.requiredDay;
      } else if (field === 'month') {
        this.error.text = this.errors.requiredMonth;
      } else if (field === 'year') {
        this.error.text = this.errors.requiredYear;
      } else {
        this.error.text = this.errors.required;
      }
    }

    if (this.valid && this.options.required && value) {
      if (field === 'day' && (value < 1 || value > 31)) {
        this.valid = false;
        this.errorText = this.errors.validDay;
      } else if (field === 'month' && (value < 1 || value > 12)) {
        this.valid = false;
        this.errorText = this.errors.validMonth;
      } else if (field === 'year' && (value < 1900 || value > this.fullYear)) {
        this.valid = false;
        this.errorText = this.errors.validYear;
      }
      if (this.valid === false) {
        this.error = {
          href: `#${this.options.name}`,
          text: this.errorText,
        };
      }
    }

    return {
      valid: this.valid,
      error: this.error,
    };
  }

  validateRealDate(yyyy, mm, dd) {
    const isoDate = `${yyyy}-${(`0${mm}`).slice(-2)}-${(`0${dd}`).slice(-2)}`;
    const newDate = new Date(isoDate);

    if (this.options.required && !(isoDate === newDate.toISOString().slice(0, 10))) {
      this.valid = false;
      this.error = {
        href: `#${this.options.name}`,
        text: this.errors.invalidDate,
      };
    }

    return {
      valid: this.valid,
      error: this.error,
    };
  }
}

module.exports = DateValidator;
