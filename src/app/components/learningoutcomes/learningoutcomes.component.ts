import { StudentService } from './../../services/Student/student.service';
import { TeacherService } from './../../services/Teacher/teacher.service';
import { SubjectService } from './../../services/Subject/subject.service';
import { ClassService } from './../../services/Class/ClassServices';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { TableModule } from 'primeng/table'; 
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
import { GetSchoolClass } from '../../interfaces/SchoolClass';
import { Subject } from '../../interfaces/Subject';
import { StudentGrades } from '../../interfaces/StudentGrades';
import { Student } from '../../interfaces/Student';
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
  
  classes:GetSchoolClass[] = [];
  
  subjects: Subject[] = [];
  students:Student[]=[];
  studentGradeDetails: any[] = [];
  studentGrade:StudentGrades[] = [];
  
  selectedClass?: number ;
  
  selectedSubject?: number ;

  constructor(private ClassService:ClassService,
         private SubjectService:SubjectService,
         private TeacherService:TeacherService,
         private StudentService:StudentService
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    this.loadSubjects();
    this.loadStudent();
  }

  
  loadClasses() {
    this.ClassService.GetSchoolClass().subscribe(
      (data)=>this.classes=data
    );
  }

  loadStudent(){
    this.StudentService.getAllStudent().subscribe(
      (data)=>this.students=data
    );
  }
  loadSubjects() {
    this.SubjectService.getAllSubject().subscribe(
      (data)=>this.subjects=data
    );
  }

  
  searchStudents() {
    if (!this.selectedClass || !this.selectedSubject) {
      alert('Vui lòng chọn lớp học và môn học!');
      return;
    }

    // Gọi API để lấy điểm của học sinh
    this.TeacherService.getGrade_By_IdClass_IdSubject(this.selectedClass, this.selectedSubject).subscribe(
      (data) => {
        this.studentGrade = data; // Lưu dữ liệu điểm học sinh

        // Xử lý và kết hợp dữ liệu sinh viên, môn học và điểm
        this.studentGradeDetails = this.studentGrade.map((grade) => {
          const student = this.students.find(s => s.id === grade.studentId);
          const subject = this.subjects.find(s => s.id === grade.subjectId);
          
          return {
            studentId: student?.id,
            studentName: student?.fullName,
            subjectId: subject?.id,
            subjectName: subject?.name,
            practicalGrade: grade.practicalGrade,
            homeworkGrade: grade.homeworkGrade,
            examGrade: grade.examGrade,
            attendanceGrade: grade.attendanceGrade
          };
        });

        // Nếu không có kết quả điểm, cảnh báo cho người dùng
        if (this.studentGradeDetails.length === 0) {
          alert('Không có dữ liệu điểm cho sinh viên trong lớp và môn học này!');
        }
      },
      (error) => {
        console.error('Có lỗi xảy ra khi lấy điểm: ', error);
        alert('Đã có lỗi xảy ra khi lấy dữ liệu điểm!');
      }
    );
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
    this.selectedClass = undefined;
    this.selectedSubject = undefined;
    this.students = [];
    alert('Đã hủy thao tác!');
  }
}

