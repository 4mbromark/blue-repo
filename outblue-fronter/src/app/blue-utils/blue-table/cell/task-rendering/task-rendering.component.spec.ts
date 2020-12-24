import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRenderingComponent } from './task-rendering.component';

describe('TaskRenderingComponent', () => {
  let component: TaskRenderingComponent;
  let fixture: ComponentFixture<TaskRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
