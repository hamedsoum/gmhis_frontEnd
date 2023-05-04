import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlelocationFormComponent } from './articlelocation-form.component';

describe('ArticlelocationFormComponent', () => {
  let component: ArticlelocationFormComponent;
  let fixture: ComponentFixture<ArticlelocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlelocationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlelocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
