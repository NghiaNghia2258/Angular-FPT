import { Subject } from './../../interfaces/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private Subjects:Subject[]=[
    {SubjectId:'TRR',SubjectName:'Toán rời rạc', Credits:2,Semester:'Kọc kỳ 1', MajorId:'CNPM',Description:'Học về toán rời rạc'}
  ]
  constructor(private http:HttpClient) { }

  getAllSubject():Observable<Subject[]>{
    return of(this.Subjects);
  }

  addSubject():Observable<string>{
    try {
      return of('Đã thêm thành công!');
    } catch {
      return of('Có lỗi xảy ra!');
    }
  }

  updateSubject():Observable<string>{
    try{
      return of('Cập nhập thành công !');
    }
    catch{
      return of('cập nhập thất bại!');
    }
  }
  deleteSubject(id: string): Observable<void> {
    return of(void 0);
  }
}
