import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlegroupFormComponent } from './articlegroup-form.component';

describe('ArticlegroupFormComponent', () => {
  let component: ArticlegroupFormComponent;
  let fixture: ComponentFixture<ArticlegroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlegroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlegroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
