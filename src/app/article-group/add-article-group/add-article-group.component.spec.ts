import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleGroupComponent } from './add-article-group.component';

describe('AddArticleGroupComponent', () => {
  let component: AddArticleGroupComponent;
  let fixture: ComponentFixture<AddArticleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
