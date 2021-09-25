import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormRegisterComponent } from './login-form-register.component';

describe('LoginFormRegisterComponent', () => {
  let component: LoginFormRegisterComponent;
  let fixture: ComponentFixture<LoginFormRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
