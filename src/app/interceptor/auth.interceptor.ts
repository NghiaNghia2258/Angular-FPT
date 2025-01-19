import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<any> => {
    const token = localStorage.getItem('accessToken') ?? `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTG9naW5JZCI6IjEiLCJGdWxsTmFtZSI6Ik5vIG5hbWUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDUkVBVEVfVEVBQ0hFUiIsImV4cCI6MTc2ODM2MTU0OX0.rARQDcyqZ3XcbRmokVntvZi6HcBnhYOxhh5uLRRZk8Q`; 

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  
    return next(req); 
  };