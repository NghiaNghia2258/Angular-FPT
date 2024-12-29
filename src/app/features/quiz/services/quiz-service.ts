import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  addQuiz(model:any):Observable<any>{
    return this.http.post<any>(`${BASE_URL}/Quiz`,model);
  }
  updateQuiz(model:any):Observable<any>{
    return this.http.put<any>(`${BASE_URL}/Quiz`,model);
  }
  getById(id:any):Observable<any>{
    return this.http.get<any>(`${BASE_URL}/Quiz/${id}`);
  }
  deleteQuiz(id:any):Observable<any>{
    return this.http.delete<any>(`${BASE_URL}/Quiz/${id}`);
  }
  getAll(model:any):Observable<any>{
    return this.http.get<any>(`${BASE_URL}/Quiz?PageIndex=${model.PageIndex}&PageSize=${model.PageSize}`);
  }
}
