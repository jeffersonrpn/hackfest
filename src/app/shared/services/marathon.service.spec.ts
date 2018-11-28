import { TestBed } from '@angular/core/testing';

import { MarathonService } from './marathon.service';

describe('MarathonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarathonService = TestBed.get(MarathonService);
    expect(service).toBeTruthy();
  });
});
