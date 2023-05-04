import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrMListComponent } from './cr-mlist.component';

describe('CrMListComponent', () => {
  let component: CrMListComponent;
  let fixture: ComponentFixture<CrMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrMListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
