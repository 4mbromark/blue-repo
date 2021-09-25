import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueLoginFormComponent } from './blue-login-form.component';

describe('BlueLoginFormComponent', () => {
  let component: BlueLoginFormComponent;
  let fixture: ComponentFixture<BlueLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
