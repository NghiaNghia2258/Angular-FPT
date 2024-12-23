import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCategory } from '../models/add-category-requset.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model:RequestCategory):Observable<void>{
    return this.http.post<void>('https://localhost:7011/api/CategoryCTRL/Create',model);
  }
}
