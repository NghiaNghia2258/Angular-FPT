import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(model:any):Observable<void>{
    return this.http.post<void>(`${BASE_URL}/Auth/sign-in`,model);
  }
  regist(model:any):Observable<void>{
    model.roleGroupId = 1;
    return this.http.post<void>(`${BASE_URL}/Auth/sign-up`,model);
  }
 
}
