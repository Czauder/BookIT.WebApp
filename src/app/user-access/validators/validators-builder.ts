import { ValidatorFn, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

export class ValidatorsBuilder {
  private validators: Array<ValidatorFn>;
  constructor() {
    this.validators = new Array<ValidatorFn>();
  }

  public setOnlyLetters(): ValidatorsBuilder {
    this.validators.push(Validators.pattern('[a-zA-Z]*'));
    return this;
  }

  public setName(): ValidatorsBuilder {
    const regex = /^[^\d\s\\\/\-=_+~!@#$%^&*(),.?":{}|<>]+(?!.*\.{2})(?!.*\-{2})(?!.* {2})(?!.*'{2})(?!.*[\d\=_\\\/+~!@#$%^&*(),?":{}|<>]).*[^-\s]\S*$/;
    this.validators.push(Validators.pattern(regex));
    return this;
  }

  public setPhone(): ValidatorsBuilder {
    this.validators.push(
      CustomValidators.patternValidator(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$|^[0-9]{10}$/, { hasPropperLength: true })
    );
    return this;
  }

  public setRequired(): ValidatorsBuilder {
    this.validators.push(Validators.required);
    return this;
  }

  public setMaxLength(length: number): ValidatorsBuilder {
    this.validators.push(Validators.maxLength(length));
    return this;
  }

  public setMinLength(length: number): ValidatorsBuilder {
    this.validators.push(Validators.minLength(length));
    return this;
  }

  public setPassword(): ValidatorsBuilder {
    this.validators.push(CustomValidators.patternValidator(/\d/, { hasNumber: true }));
    this.validators.push(CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }));
    this.validators.push(CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }));
    return this;
  }

  public setEmail(): ValidatorsBuilder {
    this.validators.push(Validators.pattern('^[a-zA-Z0-9._%+-]+[@]{1}[a-z0-9.-]+[.]{1}[a-z]{2,4}$'));
    return this;
  }

  public build(): Array<ValidatorFn> {
    const buildedValidators = this.validators.slice(0);
    this.validators = new Array<ValidatorFn>();
    return buildedValidators;
  }
}
