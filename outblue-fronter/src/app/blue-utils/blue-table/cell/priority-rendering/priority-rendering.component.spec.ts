import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityRenderingComponent } from './priority-rendering.component';

describe('PriorityRenderingComponent', () => {
  let component: PriorityRenderingComponent;
  let fixture: ComponentFixture<PriorityRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
