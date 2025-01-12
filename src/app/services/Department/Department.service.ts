import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Faculty } from '../../interfaces/Faculty';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Faculty[] = [
    { FacultyID: 'CNTT', FacultyName: 'Khoa Công nghệ Thông tin', Abbreviation: 'CNTT',Description: 'Khoa Cntt' },
  ];

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Faculty[]> {
    return of(this.departments);
  }

  addDepartment(department: Faculty): Observable<Faculty> {
   return of(department);
  }

  updateDepartment(department: Faculty): Observable<Faculty> {
    
    return of(department);
  }

  deleteDepartment(id: string): Observable<void> {
    return of(void 0);
  }
}

