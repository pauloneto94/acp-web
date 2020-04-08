import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioDashboardComponent } from './beneficio-dashboard.component';

describe('BeneficioDashboardComponent', () => {
  let component: BeneficioDashboardComponent;
  let fixture: ComponentFixture<BeneficioDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficioDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
