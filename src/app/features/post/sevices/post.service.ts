import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BASE_URL } from '../../../app.config';
import {BlogPost} from '../model/interfacePost';
@Injectable({
  providedIn: 'root'
})
export class PostService {

   constructor(private http:HttpClient) { }
    addPost(model:any):Observable<void>{
      model.isVisible = model.isVisible === "true";
      return this.http.post<void>(`${BASE_URL}/PostCtrl/Create_post`,model);
    }
    updatePost(id: string, model: any): Observable<void> {
      model.isVisible = model.isVisible === "true";
      return this.http.put<void>(`${BASE_URL}/PostCtrl/Updte_Post?Id=${model.id}`,model);
    }
    getPostById(id: string): Observable<any> {
      return this.http.get<BlogPost[]>(`${BASE_URL}/PostCtrl/get_post_id?Id=${id}`);
    }

    getAllPost():Observable<BlogPost[]>{
      return this.http.get<BlogPost[]>(`${BASE_URL}/PostCtrl/Get_all_post`);
    }
    deletePost(Id:string):Observable<void>{
      return this.http.delete<void>(`${BASE_URL}/PostCtrl/Delete_post?id=${Id}`);
    }
}
