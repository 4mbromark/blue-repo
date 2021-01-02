import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorHtmlSelectorComponent } from './color-html-selector.component';

describe('ColorHtmlSelectorComponent', () => {
  let component: ColorHtmlSelectorComponent;
  let fixture: ComponentFixture<ColorHtmlSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorHtmlSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorHtmlSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
