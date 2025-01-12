import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/Student';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students:Student[]=[
    {Code:'10621306',FullName:'Phạm Thanh Long', EnrollmentYear:2021, Status:1}
  ]
  constructor(private http:HttpClient) { }

  getAllStudent():Observable<Student[]>{
    return of(this.students);
  }

  addStudent():Observable<string>{
    try {
      return of('Đã thêm thành công!');
    } catch {
      return of('Có lỗi xảy ra!');
    }
  }

  updateStudent():Observable<string>{
    try{
      return of('Cập nhập thành công !');
    }
    catch{
      return of('cập nhập thất bại!');
    }
  }
  deleteStudent(id: string): Observable<void> {
    return of(void 0);
  }
}
