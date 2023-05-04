import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleGroupComponent } from './list-article-group.component';

describe('ListArticleGroupComponent', () => {
  let component: ListArticleGroupComponent;
  let fixture: ComponentFixture<ListArticleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
