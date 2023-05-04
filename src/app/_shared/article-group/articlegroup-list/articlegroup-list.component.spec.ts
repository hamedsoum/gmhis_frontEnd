import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlegroupListComponent } from './articlegroup-list.component';

describe('ArticlegroupListComponent', () => {
  let component: ArticlegroupListComponent;
  let fixture: ComponentFixture<ArticlegroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlegroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlegroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
