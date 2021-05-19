import { TestBed } from '@angular/core/testing';

import { StunalistService } from './stunalist.service';

describe('StunalistService', () => {
  let service: StunalistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StunalistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
