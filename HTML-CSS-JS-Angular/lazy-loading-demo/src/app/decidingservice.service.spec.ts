import { TestBed } from '@angular/core/testing';

import { DecidingserviceService } from './decidingservice.service';

describe('DecidingserviceService', () => {
  let service: DecidingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecidingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
