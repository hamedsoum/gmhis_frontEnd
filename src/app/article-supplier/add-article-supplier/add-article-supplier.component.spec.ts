import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleSupplierComponent } from './add-article-supplier.component';

describe('AddArticleSupplierComponent', () => {
  let component: AddArticleSupplierComponent;
  let fixture: ComponentFixture<AddArticleSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
