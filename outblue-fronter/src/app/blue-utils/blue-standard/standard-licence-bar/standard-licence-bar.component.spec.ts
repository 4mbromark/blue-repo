import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardLicenceBarComponent } from './standard-licence-bar.component';

describe('StandardLicenceBarComponent', () => {
  let component: StandardLicenceBarComponent;
  let fixture: ComponentFixture<StandardLicenceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardLicenceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardLicenceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
