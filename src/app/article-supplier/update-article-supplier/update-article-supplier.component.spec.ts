import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleSupplierComponent } from './update-article-supplier.component';

describe('UpdateArticleSupplierComponent', () => {
  let component: UpdateArticleSupplierComponent;
  let fixture: ComponentFixture<UpdateArticleSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArticleSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticleSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
