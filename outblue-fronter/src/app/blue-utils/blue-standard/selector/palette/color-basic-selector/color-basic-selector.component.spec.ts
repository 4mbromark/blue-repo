import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBasicSelectorComponent } from './color-basic-selector.component';

describe('ColorBasicSelectorComponent', () => {
  let component: ColorBasicSelectorComponent;
  let fixture: ComponentFixture<ColorBasicSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorBasicSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBasicSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
