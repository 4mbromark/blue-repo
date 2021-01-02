import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBasicSelectorV2Component } from './color-basic-selector-v2.component';

describe('ColorBasicSelectorV2Component', () => {
  let component: ColorBasicSelectorV2Component;
  let fixture: ComponentFixture<ColorBasicSelectorV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorBasicSelectorV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBasicSelectorV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
