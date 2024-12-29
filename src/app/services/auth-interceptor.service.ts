import { HttpInterceptorFn } from '@angular/common/http';
import { CookieUtils } from '../utils/cookie-utils';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = CookieUtils.getCookie("token");

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, // Gắn token vào header Authorization
      },
    });
    return next(clonedRequest);
  }

  return next(req); // Nếu không có token, tiếp tục request gốc
};

