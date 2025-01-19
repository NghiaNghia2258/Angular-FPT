import { addTeacher, GetTeacher, Teacher } from './../../interfaces/Teacher';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { URL } from '../../shared/url/url_services';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private teachers: Teacher[] = [
    {
      Code: 10621306,
      FullName: 'Trịnh Thị Nhị',
      Email: 'trinhthinhi@gmail.com',
      Phone: '0369809203',
      IdKhoa: 1,
    },
  ];

  constructor(private http: HttpClient) {}

  // Lấy danh sách giáo viên
  getAllTeacher(): Observable<GetTeacher[]> {
    return this.http.get<{ data: GetTeacher[] }>(URL.TEACHER.GET).pipe(
      map((response) => response.data) 
    );
  }
  // Thêm giáo viên mới
  addTeacher(teacher: addTeacher): Observable<string> {   
    return  this.http.post<string>(URL.TEACHER.ADD,teacher);
  }

  // Cập nhật thông tin giáo viên
  updateTeacher(code: number, updatedTeacher: Teacher): Observable<string> {
    try {
      const index = this.teachers.findIndex((t) => t.Code === code);
      if (index !== -1) {
        this.teachers[index] = { ...this.teachers[index], ...updatedTeacher };
        return of('Cập nhật thành công!');
      }
      return of('Không tìm thấy giáo viên!');
    } catch {
      return of('Cập nhật thất bại!');
    }
  }

  // Xóa giáo viên
  deleteTeacher(id: number): Observable<string> {
    try {
     return this.http.delete<string>(URL.TEACHER.DELETE(id));
    } catch {
      return of('Có lỗi xảy ra khi xóa!');
    }
  }
}
