import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuizService } from '../services/quiz-service';
import { Router } from '@angular/router';
import { SubjectService } from '../../subject/sevices/subject-service';

@Component({
  selector: 'app-create-quiz',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent {
  model: any = {
    title: '',
    description: '',
    duration: 0,
    subjectId: null
  };

  subjects: any[] = []; // Danh sách Subject

  constructor(
    private subjectService: SubjectService,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Lấy danh sách Subject từ API
    this.subjectService.getAllSubjects().subscribe({
      next: (res) => {
        this.subjects = res.data;
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách môn học:', err);
      }
    });
  }

  onFormSubmit(): void {
    if (!this.model.subjectId) {
      console.error('Subject chưa được chọn!');
      return;
    }

    this.quizService.addQuiz(this.model).subscribe({
      next: () => {
        console.log('Quiz đã được thêm thành công!');
        this.router.navigate(['/quiz-list']);
      },
      error: (error) => {
        console.error('Đã có lỗi xảy ra khi thêm Quiz:', error);
      }
    });
  }
}
