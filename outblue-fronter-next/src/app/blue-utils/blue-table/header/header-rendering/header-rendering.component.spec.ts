import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRenderingComponent } from './header-rendering.component';

describe('HeaderRenderingComponent', () => {
  let component: HeaderRenderingComponent;
  let fixture: ComponentFixture<HeaderRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
