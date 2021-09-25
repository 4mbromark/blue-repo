import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageRenderingComponent } from './percentage-rendering.component';

describe('PercentageRenderingComponent', () => {
  let component: PercentageRenderingComponent;
  let fixture: ComponentFixture<PercentageRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
