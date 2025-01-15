import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
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
  studentGrades: {
    subjectCode: string;
    subjectName: string;
    attendance: number;
    homework: number;
    exam: number;
    practical: number;
  }[] = []; // Bảng điểm của sinh viên

  constructor() {}

  ngOnInit(): void {
    this.loadStudentGrades();
  }

  // Tải bảng điểm sinh viên
  loadStudentGrades() {
    this.studentId = localStorage.getItem('studentId') || ''; // Lấy mã sinh viên từ localStorage

    if (!this.studentId) {
      alert('Không tìm thấy mã sinh viên. Vui lòng đăng nhập lại!');
      return;
    }

    // Dữ liệu giả lập bảng điểm
    this.studentGrades = [
      {
        subjectCode: 'MH001',
        subjectName: 'Toán cao cấp',
        attendance: 8,
        homework: 9,
        exam: 7,
        practical: 8,
      },
      {
        subjectCode: 'MH002',
        subjectName: 'Lập trình Web',
        attendance: 7,
        homework: 8,
        exam: 9,
        practical: 10,
      },
      {
        subjectCode: 'MH003',
        subjectName: 'Cơ sở dữ liệu',
        attendance: 9,
        homework: 8,
        exam: 10,
        practical: 9,
      },
    ];
  }

  // Tính điểm tổng kết
  calculateFinalGrade(grade: {
    attendance: number;
    homework: number;
    exam: number;
    practical: number;
  }): number {
    return (
      grade.attendance * 0.1 +
      grade.homework * 0.2 +
      grade.exam * 0.5 +
      grade.practical * 0.2
    );
  }
}
