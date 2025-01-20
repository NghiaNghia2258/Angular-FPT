import { TeacherReviews } from './../../interfaces/TeacherReviews';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
import { StudentService } from '../../services/Student/student.service';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-student-grades',
  standalone: true,
  imports: [CommonModule, TableModule,
    NavbarComponent,HeaderComponent,
    DialogModule,FormsModule
  ],
  providers: [ConfirmationService, MessageService],

  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css'],
})
export class StudentGradesComponent implements OnInit {
  studentId: string = ''; // Mã sinh viên lấy từ localStorage
  studentGrades: any[] = []; // Bảng điểm của sinh viên
  displayDialog: boolean = false;
  teacherReviews:TeacherReviews={} as TeacherReviews;
  StudentGradeId?:number=undefined;
  constructor(private studentService:StudentService,
    private messageService:MessageService
   ) {}

  ngOnInit(): void {
    console.log("he");
    this.loadStudentGrades();
  }
  showTeacherReviews(gradeId:number){
      this.displayDialog=true;
      this.StudentGradeId=gradeId;
  }
  // Tải bảng điểm sinh viên
  loadStudentGrades() {
    this.studentId = localStorage.getItem('userLoginId') || ''; // Lấy mã sinh viên từ localStorage
    if (!this.studentId) {
      alert('Không tìm thấy mã sinh viên. Vui lòng đăng nhập lại!');
      return;
    }
    this.studentService.getGradeById(Number(this.studentId)).subscribe(
      (grades) => {
        this.studentGrades = grades;
      },
      (error) => {
        alert('Có l��i xảy ra khi tải dữ liệu điểm!');
      }
    );
  }

  // Tính điểm tổng kết
  calculateFinalGrade(grade:any): number {
    return (
      grade.attendanceGrade * 0.1 +
      grade.homeworkGrade * 0.2 +
      grade.examGrade * 0.5 +
      grade.practicalGrade * 0.2
    );
  }

  addTeacherReview(value:any){
        const data={
          ...value,
          StudentGradeId:this.StudentGradeId
        }
        this.studentService.TeacherReviews(data).subscribe(
          ()=>{
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Teacher added successfully' });
            this.loadStudentGrades()
          }
        )

  }
}
