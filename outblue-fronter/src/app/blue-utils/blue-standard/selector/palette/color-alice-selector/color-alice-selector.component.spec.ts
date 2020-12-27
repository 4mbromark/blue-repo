import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAliceSelectorComponent } from './color-alice-selector.component';

describe('ColorAliceSelectorComponent', () => {
  let component: ColorAliceSelectorComponent;
  let fixture: ComponentFixture<ColorAliceSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAliceSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAliceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
