import { TeacherReviews } from './../../interfaces/TeacherReviews';
import { Injectable } from '@angular/core';
import { Student, StudentAdd } from '../../interfaces/Student';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { URL } from '../../shared/url/url_services';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  

  constructor(private http: HttpClient) {}

  // Lấy danh sách sinh viên
  getAllStudent(): Observable<Student[]> {
    return this.http.get<{data:Student[]}>(URL.STUDEN.GET).pipe(
      map((repon)=>repon.data)
    );
  }



  getStudent_IdClass(id:number): Observable<Student[]> {
    return this.http.get<{data:Student[]}>(URL.STUDEN.GETSTUDENT_IDCLASS(id)).pipe(
      map((repon)=>repon.data)
    );
  }
  
  getGradeById(id:number): Observable<Student[]> {
    return this.http.get<{data:Student[]}>(URL.STUDEN.GETGRADEBYID(id)).pipe(
      map((repon)=>repon.data)
    );
  }

  // Thêm sinh viên mới
  addStudent(student: StudentAdd): Observable<string> {
    return  this.http.post<string>(URL.STUDEN.ADD,student);
  }

  // Cập nhật thông tin sinh viên
  updateStudent(code: string, updatedStudent: Student): Observable<string> {
    // try {
    //   const index = this.students.findIndex((stu) => stu.Code === code);
    //   if (index !== -1) {
    //     this.students[index] = { ...this.students[index], ...updatedStudent };
    //     return of('Cập nhật thông tin sinh viên thành công!');
    //   }
    //   return of('Không tìm thấy sinh viên để cập nhật!');
    // } catch {
      return of('Có lỗi xảy ra khi cập nhật sinh viên!');
    // }
  }

  // Xóa sinh viên
  deleteStudent(id:number): Observable<string> {
    try {
     return this.http.delete<string>(URL.STUDEN.DELETE(id));
    } catch {
      return of('Có lỗi xảy ra khi xóa sinh viên!');
    }
  }

  TeacherReviews(value:TeacherReviews):Observable<string>{
    return this.http.post<string>(URL.STUDEN.TEACHEREVIEW,value);
  }
}
