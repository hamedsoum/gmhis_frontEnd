import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMHISCashRegisterMovementListComponent } from './gmhis-cash-register-movement-list.component';

describe('CrMListComponent', () => {
  let component: GMHISCashRegisterMovementListComponent;
  let fixture: ComponentFixture<GMHISCashRegisterMovementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GMHISCashRegisterMovementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GMHISCashRegisterMovementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
