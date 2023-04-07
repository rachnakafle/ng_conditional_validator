import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveConditionalFormComponent } from './reactive-conditional-form.component';

describe('ReactiveConditionalFormComponent', () => {
  let component: ReactiveConditionalFormComponent;
  let fixture: ComponentFixture<ReactiveConditionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveConditionalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveConditionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
