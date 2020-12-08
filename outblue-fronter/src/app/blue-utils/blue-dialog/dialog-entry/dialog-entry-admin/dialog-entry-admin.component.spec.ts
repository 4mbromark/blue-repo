import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEntryAdminComponent } from './dialog-entry-admin.component';

describe('DialogEntryAdminComponent', () => {
  let component: DialogEntryAdminComponent;
  let fixture: ComponentFixture<DialogEntryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEntryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEntryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
