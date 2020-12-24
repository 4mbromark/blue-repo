import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRenderingComponent } from './project-rendering.component';

describe('ProjectRenderingComponent', () => {
  let component: ProjectRenderingComponent;
  let fixture: ComponentFixture<ProjectRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
