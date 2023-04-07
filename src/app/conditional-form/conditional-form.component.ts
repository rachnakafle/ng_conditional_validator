import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'conditional-form',
  templateUrl: './conditional-form.component.html',
  styleUrls: ['./conditional-form.component.css'],
})
export class ConditionalFormComponent implements OnInit {
  form = new FormGroup({
    fileType: new FormControl('', Validators.required),
    file: new FormControl(null, this.getFileValidator()),
  });

  constructor() {}

  ngOnInit(): void {}

  get isFileFieldEnabled() {
    return this.form.controls.fileType.value === 'image';
  }

  getFileValidator() {
    return (control: { value: any }) => {
      if (this.isFileFieldEnabled && !control.value) {
        return { required: true };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
