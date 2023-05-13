import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomTypeFormComponent } from './bedroom-type-form.component';

describe('BedroomTypeFormComponent', () => {
  let component: BedroomTypeFormComponent;
  let fixture: ComponentFixture<BedroomTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedroomTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
