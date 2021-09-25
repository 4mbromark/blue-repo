import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSidepanelComponent } from './projects-sidepanel.component';

describe('ProjectsSidepanelComponent', () => {
  let component: ProjectsSidepanelComponent;
  let fixture: ComponentFixture<ProjectsSidepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSidepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
