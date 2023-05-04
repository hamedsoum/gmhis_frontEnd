import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDrugComponent } from './list-drug.component';

describe('ListDrugComponent', () => {
  let component: ListDrugComponent;
  let fixture: ComponentFixture<ListDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
