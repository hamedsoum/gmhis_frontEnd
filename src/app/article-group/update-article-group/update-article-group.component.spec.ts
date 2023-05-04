import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleGroupComponent } from './update-article-group.component';

describe('UpdateArticleGroupComponent', () => {
  let component: UpdateArticleGroupComponent;
  let fixture: ComponentFixture<UpdateArticleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArticleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
