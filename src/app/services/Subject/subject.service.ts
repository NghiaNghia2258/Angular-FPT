import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Subject } from './../../interfaces/Subject';
import { URL } from '../../shared/url/url_services';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  // Lấy danh sách môn học
  getAllSubject(): Observable<Subject[]> {
    return this.http.get<{data:Subject[]}>(URL.Subject(1,10)).pipe(
      map((response)=>response.data)
    ); 
  }

  // Thêm môn học mới
  addSubject(subject: Subject): Observable<string> {
    try {

      return of('Đã thêm môn học thành công!');
    } catch {
      return of('Có lỗi xảy ra khi thêm môn học!');
    }
  }

  // Cập nhật thông tin môn học
  updateSubject(subjectId: string, updatedSubject: Subject): Observable<string> {
    try {
     
      
      return of('Không tìm thấy môn học để cập nhật!');
    } catch {
      return of('Có lỗi xảy ra khi cập nhật môn học!');
    }
  }

  // Xóa môn học
  deleteSubject(subjectId:number): Observable<string> {
    try {
      
      return of('Không tìm thấy môn học để xóa!');
    } catch {
      return of('Có lỗi xảy ra khi xóa môn học!');
    }
  }
}
