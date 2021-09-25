import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyOverlayComponent } from './empty-overlay.component';

describe('EmptyOverlayComponent', () => {
  let component: EmptyOverlayComponent;
  let fixture: ComponentFixture<EmptyOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
