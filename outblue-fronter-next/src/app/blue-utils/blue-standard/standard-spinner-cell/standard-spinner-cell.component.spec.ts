import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSpinnerCellComponent } from './standard-spinner-cell.component';

describe('StandardSpinnerCellComponent', () => {
  let component: StandardSpinnerCellComponent;
  let fixture: ComponentFixture<StandardSpinnerCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardSpinnerCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSpinnerCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
