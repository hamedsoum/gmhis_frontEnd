import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomTypeListComponent } from './bedroom-type-list.component';

describe('BedroomTypeListComponent', () => {
  let component: BedroomTypeListComponent;
  let fixture: ComponentFixture<BedroomTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedroomTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
