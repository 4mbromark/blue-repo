import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEntryComponent } from './dialog-entry.component';

describe('DialogEntryComponent', () => {
  let component: DialogEntryComponent;
  let fixture: ComponentFixture<DialogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
