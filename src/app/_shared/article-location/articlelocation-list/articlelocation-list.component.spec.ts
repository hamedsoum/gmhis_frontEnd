import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlelocationListComponent } from './articlelocation-list.component';

describe('ArticlelocationListComponent', () => {
  let component: ArticlelocationListComponent;
  let fixture: ComponentFixture<ArticlelocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlelocationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlelocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
