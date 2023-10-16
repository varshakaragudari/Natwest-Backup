import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protectmylinkGuard } from './protectmylink.guard';

describe('protectmylinkGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protectmylinkGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
