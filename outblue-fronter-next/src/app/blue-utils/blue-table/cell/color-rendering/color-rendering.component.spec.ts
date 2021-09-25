import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRenderingComponent } from './color-rendering.component';

describe('ColorRenderingComponent', () => {
  let component: ColorRenderingComponent;
  let fixture: ComponentFixture<ColorRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
