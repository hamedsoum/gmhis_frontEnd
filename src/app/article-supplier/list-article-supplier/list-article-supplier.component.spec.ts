import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleSupplierComponent } from './list-article-supplier.component';

describe('ListArticleSupplierComponent', () => {
  let component: ListArticleSupplierComponent;
  let fixture: ComponentFixture<ListArticleSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticleSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticleSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
