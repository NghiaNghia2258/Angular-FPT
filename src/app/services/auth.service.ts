import { env } from './../shared/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, RegisterPostData, User } from '../interfaces/auth';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}
  $user = new BehaviorSubject<User | undefined>(undefined);

  registerUser(postData: RegisterPostData) {
    return this.http.post(`${env.baseUrl}/users`, postData);
  }
  signIn(username: string, password: string): Observable<any> {
    const data={
       username: username,
       password: password 
    }
    return this.http.post<{data:Login[]}>(
      `${env.baseUrl}/Auth/sign-in`,data
    );
  }
  getUserDetails(email: string, password: string): Observable<Login[]> {
    const data={
        username: email,
        password: password
    }
    return this.http.post<{data:Login[]}>(
      `https://localhost:7170/api/Auth/sign-in`,data
    ).pipe(map((reponse)=>reponse.data));
  }


  setUser(user: User): void {
    this.$user.next(user);
    localStorage.setItem('user-email', user.email);
  }

  user(): Observable<User | undefined> {
    return this.$user.asObservable();
  }

  getUser(): User | undefined {
    const email = localStorage.getItem("user-email");

    if (email) {
      return {
        email:email
      };
    }

    return undefined;
  }

  logout(): void {
    
  }
}
