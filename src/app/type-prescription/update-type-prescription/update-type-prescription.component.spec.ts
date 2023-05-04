import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypePrescriptionComponent } from './update-type-prescription.component';

describe('UpdateTypePrescriptionComponent', () => {
  let component: UpdateTypePrescriptionComponent;
  let fixture: ComponentFixture<UpdateTypePrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypePrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
