import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CourseGuardService } from './services/course-guard.service'

export const dummyguardGuard: CanActivateFn = (route, state) => {
  const s=inject(CourseGuardService);
  return s.xyz(route,state);
};
