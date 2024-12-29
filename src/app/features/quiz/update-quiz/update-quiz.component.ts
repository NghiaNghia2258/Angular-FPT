import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz-service';
import { SubjectService } from '../../subject/sevices/subject-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-quiz',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent {
  quiz = {
    id: 0,
    title: '',
    description: '',
    duration: 0,
    subjectId: 0,
  };

  subjects: { id: number; name: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private subjectService: SubjectService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadQuiz(id);
    this.loadSubjects();
  }

  loadQuiz(id: number) {
    this.quizService.getById(id).subscribe({
      next: (res) => {
        this.quiz = res.data;
      }
    });
  }

  // Lấy danh sách Subject từ API
  loadSubjects() {
    this.subjectService.getAllSubjects().subscribe({
      next: (res) => {
        this.subjects = res.data;
      }
    });
  }

  // Cập nhật Quiz
  onSubmit() {
    this.quizService.updateQuiz(this.quiz).subscribe({
      next: (res) => {
       this.router.navigate(['/quiz-list']);
      }
    });
  }

  // Quay lại danh sách Quiz
  cancelUpdate() {
    this.router.navigate(['/quiz-list']);
  }
}
