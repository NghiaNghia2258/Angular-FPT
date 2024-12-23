import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCategory } from '../models/add-category-requset.model';
import { Observable } from 'rxjs';
import { RequestCategoryUpdate } from '../models/update-category-requset.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  root: string = 'https://localhost:7011/api/Category';
  constructor(private http:HttpClient) { }

  addCategory(model:RequestCategory):Observable<void>{
    return this.http.post<void>(`${this.root}/Create`,model);
  }

  getAllCategory(): Observable<RequestCategory[]> {
    return this.http.get<RequestCategory[]>(`${this.root}/Get_all_category`);
  }
  deleteCategory(Id:string):Observable<void>{
    return this.http.delete<void>(`${this.root}/delete_category?id=${Id}`);
  }

  GetById(Id:string):Observable<RequestCategory>{
    return this.http.get<RequestCategory>(`${this.root}/Get_BY_ID?id=${Id}`);
  }
  updateCategory(model:RequestCategoryUpdate):Observable<void>{
    return this.http.put<void>(`${this.root}/update_category?id=${model.id}`,model);
  }
}
