class RadioValidator {
  constructor(options, errors) {
    this.name = '';
    this.valid = true;
    this.options = {
      required: true,
    };

    Object.assign(this.options, options);

    this.errors = {
      required: 'You must select an option.',
    };

    Object.assign(this.errors, errors);
  }

  validate(value) {
    if (this.options.required && !value) {
      this.valid = false;
      this.error = {
        text: this.errors.required,
        href: `#${this.options.name}`,
      };
    }

    return {
      valid: this.valid,
      error: this.error,
    };
  }
}

module.exports = RadioValidator;
