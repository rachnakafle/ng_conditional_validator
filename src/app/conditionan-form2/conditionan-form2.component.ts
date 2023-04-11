import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conditionan-form2',
  templateUrl: './conditionan-form2.component.html',
  styleUrls: ['./conditionan-form2.component.css']
})
export class ConditionanForm2Component implements OnInit {
  myForm: any;
  private _fb: any;

  constructor( _fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm  = this._fb.group({
      myCheckbox: [''],
      myEmailField: ['', [
        Validators.maxLength(250),
         Validators.minLength(5),
         Validators.pattern(/.+@.+\..+/)
         ]]
    })
  }

  onSubmit(){
    
  }

}
