import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { TableModule } from 'primeng/table'; 
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
@Component({
  selector: 'app-learningoutcomes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    TableModule ,
    NavbarComponent,
    HeaderComponent
  ],
  templateUrl: './learningoutcomes.component.html',
  styleUrls: ['./learningoutcomes.component.css']
})
export class LearningoutcomesComponent implements OnInit {
  
  classes: { id: string; name: string }[] = [];
  
  subjects: { id: string; name: string }[] = [];
  
  students: {
    id: string;
    name: string;
    className: string;
    AttendanceGrade: number;
    HomeworkGrade: number;
    ExamGrade: number;
    PracticalGrade: number;
  }[] = [];
  
  selectedClass: string | null = null;
  
  selectedSubject: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.loadClasses();
    this.loadSubjects();
  }

  
  loadClasses() {
    this.classes = [
      { id: '1', name: 'CNTT K20' },
      { id: '2', name: 'Kinh Tế K20' },
      { id: '3', name: 'Cơ Điện Tử K20' }
    ];
  }

  
  loadSubjects() {
    this.subjects = [
      { id: '1', name: 'Toán cao cấp' },
      { id: '2', name: 'Lập trình Web' },
      { id: '3', name: 'Cơ sở dữ liệu' }
    ];
  }

  
  searchStudents() {
    if (!this.selectedClass || !this.selectedSubject) {
      alert('Vui lòng chọn lớp học và môn học!');
      return;
    }

    
    this.students = [
      {
        id: 'SV001',
        name: 'Nguyễn Văn A',
        className: 'CNTT K20',
        AttendanceGrade: 0,
        HomeworkGrade: 0,
        ExamGrade: 0,
        PracticalGrade: 0
      },
      {
        id: 'SV002',
        name: 'Trần Thị B',
        className: 'CNTT K20',
        AttendanceGrade: 0,
        HomeworkGrade: 0,
        ExamGrade: 0,
        PracticalGrade: 0
      },
      {
        id: 'SV003',
        name: 'Lê Văn C',
        className: 'CNTT K20',
        AttendanceGrade: 0,
        HomeworkGrade: 0,
        ExamGrade: 0,
        PracticalGrade: 0
      }
    ];
  }

  
  saveGrades() {
    if (!this.students || this.students.length === 0) {
      alert('Không có dữ liệu sinh viên để lưu!');
      return;
    }
    console.log('Dữ liệu điểm cần lưu:', this.students);
    alert('Lưu điểm thành công!');
  }

  
  cancel() {
    this.selectedClass = null;
    this.selectedSubject = null;
    this.students = [];
    alert('Đã hủy thao tác!');
  }
}
