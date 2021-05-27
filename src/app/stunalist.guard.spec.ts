import { TestBed } from '@angular/core/testing';

import { StunalistGuard } from './stunalist.guard';

describe('StunalistGuard', () => {
  let guard: StunalistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StunalistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
