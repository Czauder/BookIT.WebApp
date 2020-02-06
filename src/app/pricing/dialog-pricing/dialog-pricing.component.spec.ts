import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPricingComponent } from './dialog-pricing.component';

describe('DialogPricingComponent', () => {
  let component: DialogPricingComponent;
  let fixture: ComponentFixture<DialogPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
