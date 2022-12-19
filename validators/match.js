class MatchValidator {
  constructor(options, errors) {
    this.name = '';
    this.valid = true;
    this.options = {
      required: true,
      maxLength: undefined,
      minLength: undefined,
    };

    Object.assign(this.options, options);

    this.errors = {
      required: 'You must enter a value.',
      mustMatch: 'You must enter a matching value.',
    };

    Object.assign(this.errors, errors);
  }

  validate(confirmationValue, firstValue) {
    if (this.options.required && !confirmationValue) {
      this.valid = false;
      this.error = {
        text: this.errors.required,
        href: `#${this.options.name}`,
      };
    }

    if (this.valid && (confirmationValue != firstValue)) {
      this.valid = false;
      this.error = {
        text: this.errors.mustMatch,
        href: `#${this.options.name}`,
      };
    }

    return {
      valid: this.valid,
      error: this.error,
    };
  }
}

module.exports = MatchValidator;
