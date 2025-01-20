import { TeacherService } from './../../services/Teacher/teacher.service';
import { GETTeacherReviews, TeacherReviews } from './../../interfaces/TeacherReviews';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'app-show-teacher-review',
  standalone: true,
  imports: [
    CommonModule, TableModule,
    NavbarComponent,HeaderComponent,
    DialogModule,FormsModule,RatingModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './show-teacher-review.component.html',
  styleUrl: './show-teacher-review.component.css'
})
export class ShowTeacherReviewComponent implements OnInit {
  TeacherID: string = ''; 
  ReviewTeacher: GETTeacherReviews[] = []; 
  displayDialog: boolean = false;
  teacherReviews:GETTeacherReviews={} as GETTeacherReviews;
  StudentGradeId?:number=undefined;
  constructor(
    private TeacherService:TeacherService
   ) {}

  ngOnInit(): void {
    this.loadTeacherReview();
  }
  showTeacherReviews(gradeId:number){
      this.displayDialog=true;
      this.StudentGradeId=gradeId;
  }
  
  loadTeacherReview() {
    this.TeacherID = localStorage.getItem('userLoginId') || '';
    if (!this.TeacherID) {
      alert('Không tìm thấy mã sinh viên. Vui lòng đăng nhập lại!');
      return;
    }
    this.TeacherService.getFeedBack_By_ID(Number(this.TeacherID)).subscribe(
      (data) => {
        this.ReviewTeacher = data;
      },
      (error) => {
        alert('Có l��i xảy ra khi tải dữ liệu điểm!');
      }
    );
  }

}

