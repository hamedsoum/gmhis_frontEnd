import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSymptomComponent } from './update-symptom.component';

describe('UpdateSymptomComponent', () => {
  let component: UpdateSymptomComponent;
  let fixture: ComponentFixture<UpdateSymptomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSymptomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
