import { GetSchoolClass } from './../../interfaces/SchoolClass';
import { URL } from './../../shared/url/url_services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Faculty } from '../../interfaces/Faculty';
import { map } from 'rxjs/operators';
import { Major } from '../../interfaces/Major';
import { SchoolClassStudent } from '../../interfaces/SchoolClassStudent';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private http: HttpClient) { }

 
  GetSchoolClass(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(URL.CLASS.GET).pipe(
      map((response) => response.data) 
    );
  }

  deleteSchoolClass(id: number): Observable<string> {
    try{
        return this.http.delete<string>(URL.CLASS.DELETE(id));
    }
    catch{
        return of("Có lỗi sảy ra khi xóa !");
    }
  }


  addStudent_Class(value:SchoolClassStudent):Observable<string>{
    try{
        return this.http.post<string>(URL.CLASS.ADD_STUDENT,value);
    }
    catch{
        return of("Có lỗi sảy ra khi thêm !");
    }
  }


  DellStuden_Class(idStuden:number,idClass:number):Observable<string>{
    try{
        return this.http.delete<string>(URL.CLASS.DEL_STUDENT(idStuden,idClass));
    }
    catch{
        return of("Có lỗi sảy ra khi xóa !");
    }
  }
}

