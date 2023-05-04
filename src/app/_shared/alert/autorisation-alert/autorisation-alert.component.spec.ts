import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorisationAlertComponent } from './autorisation-alert.component';

describe('AutorisationAlertComponent', () => {
  let component: AutorisationAlertComponent;
  let fixture: ComponentFixture<AutorisationAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorisationAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorisationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
