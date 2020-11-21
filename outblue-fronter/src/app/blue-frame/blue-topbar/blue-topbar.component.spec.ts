import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueTopbarComponent } from './blue-topbar.component';

describe('BlueTopbarComponent', () => {
  let component: BlueTopbarComponent;
  let fixture: ComponentFixture<BlueTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
