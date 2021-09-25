import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProductBarComponent } from './standard-product-bar.component';

describe('StandardProductBarComponent', () => {
  let component: StandardProductBarComponent;
  let fixture: ComponentFixture<StandardProductBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardProductBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardProductBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
