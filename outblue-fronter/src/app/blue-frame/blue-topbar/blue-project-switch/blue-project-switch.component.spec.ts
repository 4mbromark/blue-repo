import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSwitchComponent } from './blue-project-switch.component';

describe('ProjectSwitchComponent', () => {
  let component: ProjectSwitchComponent;
  let fixture: ComponentFixture<ProjectSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
