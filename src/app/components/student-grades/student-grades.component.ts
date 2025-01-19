import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
import { StudentService } from '../../services/Student/student.service';
@Component({
  selector: 'app-student-grades',
  standalone: true,
  imports: [CommonModule, TableModule,
    NavbarComponent,HeaderComponent
  ],
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css'],
})
export class StudentGradesComponent implements OnInit {
  studentId: string = ''; // Mã sinh viên lấy từ localStorage
  studentGrades: any[] = []; // Bảng điểm của sinh viên

  constructor(private studentService:StudentService ) {}

  ngOnInit(): void {
    console.log("he");
    this.loadStudentGrades();
  }

  // Tải bảng điểm sinh viên
  loadStudentGrades() {
    console.log("he");
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
}
