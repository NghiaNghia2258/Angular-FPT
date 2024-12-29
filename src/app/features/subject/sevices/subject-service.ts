import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  getAllSubjects():Observable<any>{
    return this.http.get<any>(`${BASE_URL}/Subject?PageIndex=1&PageSize=50`);
  }
 
}
