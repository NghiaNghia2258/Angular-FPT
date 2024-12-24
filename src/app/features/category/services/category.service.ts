import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCategory } from '../models/add-category-requset.model';
import { Observable } from 'rxjs';
import { RequestCategoryUpdate } from '../models/update-category-requset.model';
import { BASE_URL } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model:RequestCategory):Observable<void>{
    return this.http.post<void>(`${BASE_URL}/CategoryCTRL/Create`,model);
  }

  getAllCategory(): Observable<RequestCategory[]> {
    return this.http.get<RequestCategory[]>(`${BASE_URL}/CategoryCTRL/Get_all_category`);
  }
  deleteCategory(Id:string):Observable<void>{
    return this.http.delete<void>(`${BASE_URL}/CategoryCTRL/delete_category?id=${Id}`);
  }

  GetById(Id:string):Observable<RequestCategory>{
    return this.http.get<RequestCategory>(`${BASE_URL}/CategoryCTRL/Get_BY_ID?id=${Id}`);
  }
  updateCategory(model:RequestCategoryUpdate):Observable<void>{
    return this.http.put<void>(`${BASE_URL}/CategoryCTRL/update_category?id=${model.id}`,model);
  }
}
