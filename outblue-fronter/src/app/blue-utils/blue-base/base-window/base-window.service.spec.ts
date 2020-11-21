import { TestBed } from '@angular/core/testing';

import { BaseWindowService } from './base-window.service';

describe('BaseWindowService', () => {
  let service: BaseWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
