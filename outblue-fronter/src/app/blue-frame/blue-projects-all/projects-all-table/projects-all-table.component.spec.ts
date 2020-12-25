import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAllTableComponent } from './projects-all-table.component';

describe('ProjectsAllTableComponent', () => {
  let component: ProjectsAllTableComponent;
  let fixture: ComponentFixture<ProjectsAllTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsAllTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
