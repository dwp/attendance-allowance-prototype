class TextValidator {
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
      maxLength: `You must enter no more than ${this.options.maxLength} characters.`,
      minLength: `You must enter at least ${this.options.minLength} characters.`,
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

    if (this.valid && this.options.maxLength && value.length > this.options.maxLength) {
      this.valid = false;
      this.error = {
        text: this.errors.maxLength,
        href: `#${this.options.name}`,
      };
    }

    if (this.valid && this.options.minLength && value.length < this.options.minLength) {
      this.valid = false;
      this.error = {
        text: this.errors.minLength,
        href: `#${this.options.name}`,
      };
    }

    if (this.valid && this.options.regEx) {
      const regEx = new RegExp(this.options.regEx, 'g');
      if (!regEx.test(''.concat(value))) {
        this.valid = false;
        this.error = {
          text: this.errors.regEx,
          href: `#${this.options.name}`,
        };
      }
    }

    return {
      valid: this.valid,
      error: this.error,
    };
  }
}

module.exports = TextValidator;
