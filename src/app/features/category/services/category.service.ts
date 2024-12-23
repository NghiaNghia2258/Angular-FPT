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

  getAllCategory(): Observable<RequestCategory[]> {
    return this.http.get<RequestCategory[]>(`https://localhost:7011/api/CategoryCTRL/Get_all_category`);
  }
  deleteCategory(Id:string):Observable<void>{
    return this.http.delete<void>(`https://localhost:7011/api/CategoryCTRL/delete_category?id=${Id}`);
  }

  GetById(Id:string):Observable<RequestCategory>{
    return this.http.get<RequestCategory>(`https://localhost:7011/api/CategoryCTRL/Get_BY_ID?id=${Id}`);
  }
}
