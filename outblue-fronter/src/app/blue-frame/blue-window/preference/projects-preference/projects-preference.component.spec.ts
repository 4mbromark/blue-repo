import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPreferenceComponent } from './projects-preference.component';

describe('ProjectsPreferenceComponent', () => {
  let component: ProjectsPreferenceComponent;
  let fixture: ComponentFixture<ProjectsPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
