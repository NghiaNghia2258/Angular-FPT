import { Component } from '@angular/core';
import { QuizService } from '../services/quiz-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-quiz',
  imports: [CommonModule],
  templateUrl: './list-quiz.component.html',
  styleUrl: './list-quiz.component.css'
})
export class ListQuizComponent {
  quizzes: any[] = []; // Danh sách quiz
  optionFilter: any = {
    PageSize: 50,
    PageIndex: 1,
  };

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    // Lấy danh sách Quiz từ API
    this.quizService.getAll(this.optionFilter).subscribe({
      next: (res) => {
        this.quizzes = res.data;
        console.log(this.quizzes  );
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách Quiz:', err);
      },
    });
  }
  addNewQuiz() {
    this.router.navigate(['/create-quiz']); 
  }
  viewQuiz(quizId: number): void {
    this.router.navigate([`/update-quiz/${quizId}`]);
  }

  deleteQuiz(quizId: number): void {
    if (confirm('Are you sure you want to delete this quiz?')) {
      this.quizService.deleteQuiz(quizId).subscribe({
        next: () => {
          console.log('Quiz đã được xóa thành công!');
          this.quizzes = this.quizzes.filter((quiz) => quiz.id !== quizId);
        },
        error: (err) => {
          console.error('Lỗi khi xóa Quiz:', err);
        },
      });
    }
  }
}
