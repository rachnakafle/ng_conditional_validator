import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalFormComponent } from './conditional-form/conditional-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveConditionalFormComponent } from './reactive-conditional-form/reactive-conditional-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionalFormComponent,
    ReactiveConditionalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
