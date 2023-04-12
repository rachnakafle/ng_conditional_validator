import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalFormComponent } from './conditional-form/conditional-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveConditionalFormComponent } from './reactive-conditional-form/reactive-conditional-form.component';
import { ConditionanForm2Component } from './conditionan-form2/conditionan-form2.component';
import { CountryCodeComponent } from './country-code/country-code.component';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    ConditionalFormComponent,
    ReactiveConditionalFormComponent,
    ConditionanForm2Component,
    CountryCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
