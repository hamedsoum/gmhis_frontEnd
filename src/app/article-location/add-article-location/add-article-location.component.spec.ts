import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleLocationComponent } from './add-article-location.component';

describe('AddArticleLocationComponent', () => {
  let component: AddArticleLocationComponent;
  let fixture: ComponentFixture<AddArticleLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
