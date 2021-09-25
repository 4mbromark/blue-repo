import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProjectChipComponent } from './standard-project-chip.component';

describe('StandardProjectChipComponent', () => {
  let component: StandardProjectChipComponent;
  let fixture: ComponentFixture<StandardProjectChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardProjectChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardProjectChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
