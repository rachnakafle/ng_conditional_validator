import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-conditional-form',
  templateUrl: './reactive-conditional-form.component.html',
  styleUrls: ['./reactive-conditional-form.component.css'],
})
export class ReactiveConditionalFormComponent implements OnInit {
  form = new FormGroup({
    // firstname:['', Validators.required]
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required),
    phone: new FormControl(''),
    contactPreference: new FormControl('email', Validators.required),
  });

  constructor() {}

  get firstname() {
    return this.form.get('firstname');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get contactPreference() {
    return this.form.get('contactPreference');
  }

  ngOnInit(): void {
    this.onContactPreferenceChange();
  }

  private onContactPreferenceChange() {
    this.form.get('contactPreference')?.valueChanges.subscribe((value) => {
      const phoneControl = this.form.get('phone');
      const validators = [Validators.required];
      console.log(value);

      if (value == 'phone' || value == 'text') {
        // phoneControl?.setValidators(validators);

        // set validators overwirtes exisisting validators so replacing it with addvalidators
        phoneControl?.addValidators(validators);
      } else {
        // clearValidators overwirtes existing validators so replacing it with removeValidators

        // phoneControl?.clearValidators();
        phoneControl?.removeValidators(validators);
      }

      phoneControl?.updateValueAndValidity();
    });
  }

  OnSubmit() {
    // console.log(this.form.value);
    if (this.form.valid) {
      console.log('Form Submitted Successfully!!!');
    }
  }
}