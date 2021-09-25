import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueLoginComponent } from './blue-login.component';

describe('BlueLoginComponent', () => {
  let component: BlueLoginComponent;
  let fixture: ComponentFixture<BlueLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
