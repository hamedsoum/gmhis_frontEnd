import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleLocationComponent } from './update-article-location.component';

describe('UpdateArticleLocationComponent', () => {
  let component: UpdateArticleLocationComponent;
  let fixture: ComponentFixture<UpdateArticleLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArticleLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
