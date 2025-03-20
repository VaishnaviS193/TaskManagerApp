import { CanActivateFn } from '@angular/router';

export const myrouteGuard: CanActivateFn = (route, state) => {
  console.log(route);
  return true;
};
 