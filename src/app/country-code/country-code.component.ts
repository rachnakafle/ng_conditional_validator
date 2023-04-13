import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'country-code',
  templateUrl: './country-code.component.html',
  styleUrls: ['./country-code.component.css'],
})
export class CountryCodeComponent implements OnInit {
  onlyCountries: any = [];
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  hasError(e: any) {}

  getNumber(e: any) {}

  telInputObject(e: any) {}

  onCountryChange(e: any) {
    console.log(e);
  }
}
