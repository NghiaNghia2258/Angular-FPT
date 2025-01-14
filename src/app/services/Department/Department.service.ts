import { URL } from './../../shared/url/url_services';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Faculty } from '../../interfaces/Faculty';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Faculty[] = [

      { id: 1, name: 'Khoa Công nghệ Thông tin',code: 'Khoa Cntt' },
 
  ];

  constructor(private http: HttpClient) { }

 
  getDepartments(): Observable<Faculty[]> {
    return this.http.get<{ data: Faculty[] }>(URL.Faculty.GETALL).pipe(
      map((response) => response.data) 
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

