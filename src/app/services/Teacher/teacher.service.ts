import { Teacher } from './../../interfaces/Teacher';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachers:Teacher[]=[
    {Code:'10621306',FullName:'Trịnh Thị Nhị', Email:'trinhthinhi@gmail.com', Phone:'0369809203'}
  ]
  constructor(private http:HttpClient) { }

  getAllTeacher():Observable<Teacher[]>{
    return of(this.teachers);
  }

  addTeacher():Observable<string>{
    try {
      return of('Đã thêm thành công!');
    } catch {
      return of('Có lỗi xảy ra!');
    }
  }

  updateTeacher():Observable<string>{
    try{
      return of('Cập nhập thành công !');
    }
    catch{
      return of('cập nhập thất bại!');
    }
  }
  deleteTeacher(id: string): Observable<void> {
    return of(void 0);
  }
}
