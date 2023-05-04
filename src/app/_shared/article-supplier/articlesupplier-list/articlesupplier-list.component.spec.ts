import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesupplierListComponent } from './articlesupplier-list.component';

describe('ArticlesupplierListComponent', () => {
  let component: ArticlesupplierListComponent;
  let fixture: ComponentFixture<ArticlesupplierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesupplierListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
