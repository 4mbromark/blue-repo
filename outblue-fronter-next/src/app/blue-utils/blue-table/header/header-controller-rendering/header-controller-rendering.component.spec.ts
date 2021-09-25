import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderControllerRenderingComponent } from './header-controller-rendering.component';

describe('HeaderControllerRenderingComponent', () => {
  let component: HeaderControllerRenderingComponent;
  let fixture: ComponentFixture<HeaderControllerRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderControllerRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderControllerRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
