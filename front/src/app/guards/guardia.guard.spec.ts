import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { guardiaGuard } from './guardia.guard';

describe('guardiaGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardiaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
