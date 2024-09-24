class UploadValidator {
  constructor(options, errors) {
    this.name = '';
    this.source = '';
    this.valid = true;
    this.options = {
      required: true,
      maxLength: undefined,
      fileSize: undefined,
      fileType: undefined,
      amount: undefined,
      dupe: false,
    };

    Object.assign(this.options, options);

    this.errors = {
      required: 'Select a file',
      maxLength: `The name of your file should have ${this.options.maxLength} characters or less`,
      fileType: "The selected file must be a JPG, JPEG, PNG or PDF",
      fileSize: "The selected file must be smaller than 10MB",
      amount: "Upload no more than 2 files",
      dupe: "Files must be unique",
    };

    Object.assign(this.errors, errors);
  }

  validate(value, array = []) {
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

    if (this.valid && this.options.fileType) {

      const checkType = (type) => {
        return value.includes(type);
      }
      this.valid = this.options.fileType.some(checkType);
      if (!this.valid) {
        this.error = {
          text: this.errors.fileType,
          href: `#${this.options.name}`,
        }
      }
    }

    if (this.valid && this.options.amount && array?.length >= this.options.amount) {
      this.valid = false;
      this.error = {
        text: this.errors.amount,
        href: `#${this.options.name}`,
      }
    }

    if (this.valid && this.options.dupe) {
      const checkName = (name) => {
        return value !== name?.key?.text;
      }
      const testArray = array.slice(0, -1);
      this.valid = testArray.every(checkName);
      if (!this.valid) {
        this.error = {
          text: this.errors.dupe,
          href: `#${this.options.name}`,
        }
      }
    }


    return {
      valid: this.valid,
      error: this.error,
    };
  }
}

module.exports = UploadValidator;
