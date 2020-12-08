import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEntryProjectsComponent } from './dialog-entry-projects.component';

describe('DialogEntryProjectsComponent', () => {
  let component: DialogEntryProjectsComponent;
  let fixture: ComponentFixture<DialogEntryProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEntryProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEntryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
