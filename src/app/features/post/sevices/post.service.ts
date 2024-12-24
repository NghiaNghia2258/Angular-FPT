import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BASE_URL } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   constructor(private http:HttpClient) { }
    addPost(model:any):Observable<void>{
    console.log('Dữ liệu gửi lên:', model); 

    return of(undefined);
    }
    updatePost(id: string, model: any): Observable<void> {
      console.log(`Cập nhật danh mục với ID: ${id}`, model); 
      return of(undefined);  
    }
    getPostById(id: string): Observable<any> {
      console.log(`Lấy thông tin danh mục với ID: ${id}`);
      
      const fakePost = {
        id: id,
        name: 'Danh Mục Fake',
        urlHandle: 'danh-muc-fake'
      };
  
      return of(fakePost); 
    }
}
