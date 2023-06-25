import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticianBillComponent } from './practician-bill.component';

describe('PracticianBillComponent', () => {
  let component: PracticianBillComponent;
  let fixture: ComponentFixture<PracticianBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticianBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticianBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
