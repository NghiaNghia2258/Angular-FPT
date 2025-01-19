import { URL } from './../../shared/url/url_services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Faculty } from '../../interfaces/Faculty';
import { map } from 'rxjs/operators';
import { Major } from '../../interfaces/Major';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) { }

 
  getDepartments(): Observable<Faculty[]> {
    return this.http.get<{ data: Faculty[] }>(URL.Faculty.GETALL).pipe(
      map((response) => response.data) 
    );
  }

  getFacultyByID(id:number):Observable<Major[]>{
    return this.http.get<{data:Major[]}>(URL.Faculty.GETMAJORBYID(id)).pipe(
      map((response)=> response.data)
    );
  }

  addDepartment(department: Faculty): Observable<Faculty> {
   return of(department);
  }

  updateDepartment(department: Faculty): Observable<Faculty> {
    
    return of(department);
  }

  deleteDepartment(id: number): Observable<void> {
    return of(void 0);
  }
}

