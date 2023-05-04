import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformAnalysisComponent } from './perform-analysis.component';

describe('PerformAnalysisComponent', () => {
  let component: PerformAnalysisComponent;
  let fixture: ComponentFixture<PerformAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
