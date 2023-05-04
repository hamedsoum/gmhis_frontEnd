import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomeFormComponent } from './symptome-form.component';

describe('SymptomeFormComponent', () => {
  let component: SymptomeFormComponent;
  let fixture: ComponentFixture<SymptomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
