import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleLocationComponent } from './list-article-location.component';

describe('ListArticleLocationComponent', () => {
  let component: ListArticleLocationComponent;
  let fixture: ComponentFixture<ListArticleLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticleLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
