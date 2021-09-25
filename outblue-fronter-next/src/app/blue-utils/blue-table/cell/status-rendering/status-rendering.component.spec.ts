import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRenderingComponent } from './status-rendering.component';

describe('StatusRenderingComponent', () => {
  let component: StatusRenderingComponent;
  let fixture: ComponentFixture<StatusRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
