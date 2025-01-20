import { GetSchoolClass } from '../../interfaces/SchoolClass';
import { URL } from '../../shared/url/url_services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Faculty } from '../../interfaces/Faculty';
import { map } from 'rxjs/operators';
import { Major } from '../../interfaces/Major';
import { SchoolClassStudent } from '../../interfaces/SchoolClassStudent';
import { Account } from '../../interfaces/auth';
@Injectable({
  providedIn: 'root'
})
export class AccountServices {
  constructor(private http: HttpClient) { }

 
  GetAllAccount(): Observable<Account[]> {
    return this.http.get<{ data: any[] }>(URL.ACCOUNT.GET).pipe(
      map((response) => response.data) 
    );
  }

  
  addStudent_Class(value:SchoolClassStudent):Observable<string>{
    try{
        return this.http.post<string>(URL.CLASS.ADD_STUDENT,value);
    }
    catch{
        return of("Có lỗi sảy ra khi thêm !");
    }
  }

  UpdateAccount(value:any):Observable<string>{
    return this.http.put<string>(URL.ACCOUNT.UPDATE,value);
  }
}

