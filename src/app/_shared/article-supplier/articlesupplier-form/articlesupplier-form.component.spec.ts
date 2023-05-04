import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesupplierFormComponent } from './articlesupplier-form.component';

describe('ArticlesupplierFormComponent', () => {
  let component: ArticlesupplierFormComponent;
  let fixture: ComponentFixture<ArticlesupplierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesupplierFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesupplierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
