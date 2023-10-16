import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { DecidingserviceService } from './decidingservice.service';

export const protectmylinkGuard: CanActivateFn = (route, state) => {

  const v=inject(DecidingserviceService);
  return v.getVal();
};
