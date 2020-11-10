import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueLoginContactsComponent } from './blue-login-contacts.component';

describe('BlueLoginContactsComponent', () => {
  let component: BlueLoginContactsComponent;
  let fixture: ComponentFixture<BlueLoginContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueLoginContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueLoginContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
