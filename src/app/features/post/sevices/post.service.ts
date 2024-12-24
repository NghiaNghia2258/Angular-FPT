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
      return this.http.post<void>(`${BASE_URL}/PostCtrl/Create_post`,model);
    }
    updatePost(id: string, model: any): Observable<void> {
      return this.http.put<void>(`${BASE_URL}/PostCtrl/update_Post?id=${model.id}`,model);
    }
    getPostById(id: string): Observable<any> {
      console.log(`Lấy thông tin danh mục với ID: ${id}`);
      
      const fakePost = {
        id: id,
        name: 'Danh Mục Fake',
        urlHandlle: 'danh-muc-fake'
      };
  
      return of(fakePost); 
    }

    getAllPost():Observable<BlogPost[]>{
      return this.http.get<BlogPost[]>(`${BASE_URL}/api/PostCtrl/Get_all_post`);
    }
    deletePost(Id:string):Observable<void>{
      return this.http.delete<void>(`${BASE_URL}/api/PostCtrl/Delete_post?id=${Id}`);
    }
}
