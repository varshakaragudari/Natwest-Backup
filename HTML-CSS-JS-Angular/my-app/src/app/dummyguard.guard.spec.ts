import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dummyguardGuard } from './dummyguard.guard';

describe('dummyguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dummyguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
