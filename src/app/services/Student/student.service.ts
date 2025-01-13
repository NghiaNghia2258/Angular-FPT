import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/Student';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    {
      Code: '10621306',
      FullName: 'Phạm Thanh Long',
      EnrollmentYear: 2021,
      Status: 1,
    },
  ];

  constructor(private http: HttpClient) {}

  // Lấy danh sách sinh viên
  getAllStudent(): Observable<Student[]> {
    return of(this.students);
  }

  // Thêm sinh viên mới
  addStudent(student: Student): Observable<string> {
    try {
      this.students.push(student);
      return of('Đã thêm sinh viên thành công!');
    } catch {
      return of('Có lỗi xảy ra khi thêm sinh viên!');
    }
  }

  // Cập nhật thông tin sinh viên
  updateStudent(code: string, updatedStudent: Student): Observable<string> {
    try {
      const index = this.students.findIndex((stu) => stu.Code === code);
      if (index !== -1) {
        this.students[index] = { ...this.students[index], ...updatedStudent };
        return of('Cập nhật thông tin sinh viên thành công!');
      }
      return of('Không tìm thấy sinh viên để cập nhật!');
    } catch {
      return of('Có lỗi xảy ra khi cập nhật sinh viên!');
    }
  }

  // Xóa sinh viên
  deleteStudent(code: string): Observable<string> {
    try {
      const index = this.students.findIndex((stu) => stu.Code === code);
      if (index !== -1) {
        this.students.splice(index, 1);
        return of('Đã xóa sinh viên thành công!');
      }
      return of('Không tìm thấy sinh viên để xóa!');
    } catch {
      return of('Có lỗi xảy ra khi xóa sinh viên!');
    }
  }
}
