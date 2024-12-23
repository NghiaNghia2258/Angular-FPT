import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCategory } from '../models/add-category-requset.model';
import { Observable } from 'rxjs';
import { RequestCategoryUpdate } from '../models/update-category-requset.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model:RequestCategory):Observable<void>{
    return this.http.post<void>('https://localhost:7011/api/CategoryCTRL/Create',model);
  }
  updateCategory(model:RequestCategoryUpdate):Observable<void>{
    return this.http.put<void>(`https://localhost:7011/api/CategoryCTRL/update_category?id=${model.id}`,model);
  }
  getbyidCategory(id:string):Observable<any>{
    return this.http.get<any>(`https://localhost:7011/api/Category/Get_BY_ID?id=${id}`);
  }
}
