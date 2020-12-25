import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionRenderingComponent } from './version-rendering.component';

describe('VersionRenderingComponent', () => {
  let component: VersionRenderingComponent;
  let fixture: ComponentFixture<VersionRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
