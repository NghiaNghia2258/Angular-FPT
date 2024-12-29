import { inject } from '@angular/core';
import { CanActivateFn, Router  } from '@angular/router';
import { CookieUtils } from '../../utils/cookie-utils';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = CookieUtils.getCookie("token");
  const router = inject(Router); 

  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false; 
  }
  return true;
};
