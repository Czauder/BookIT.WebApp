import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {
  public static patternValidator(
    regex: RegExp,
    error: ValidationErrors
  ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const valid = regex.test(control.value);

      return valid ? null : error;
    };
  }

  public static passwordMatchValidator(control: AbstractControl): void {
    if (control.untouched === true) {
      return null;
    }
    const password: string = control.get('pass').value;
    const confirmPassword: string = control.get('confirm').value;

    if (password !== confirmPassword) {
      control.get('confirm').setErrors({ NoPasswordMatch: true });
    } else {
      control.get('confirm').setErrors(null);
    }
  }
}
