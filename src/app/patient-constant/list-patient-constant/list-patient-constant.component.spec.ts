import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientConstantComponent } from './list-patient-constant.component';

describe('ListPatientConstantComponent', () => {
  let component: ListPatientConstantComponent;
  let fixture: ComponentFixture<ListPatientConstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPatientConstantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatientConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
