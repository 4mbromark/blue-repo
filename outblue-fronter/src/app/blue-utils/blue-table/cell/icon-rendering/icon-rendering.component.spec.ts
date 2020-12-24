import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRenderingComponent } from './icon-rendering.component';

describe('IconRenderingComponent', () => {
  let component: IconRenderingComponent;
  let fixture: ComponentFixture<IconRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
