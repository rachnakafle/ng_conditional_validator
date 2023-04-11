import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionanForm2Component } from './conditionan-form2.component';

describe('ConditionanForm2Component', () => {
  let component: ConditionanForm2Component;
  let fixture: ComponentFixture<ConditionanForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionanForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionanForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
