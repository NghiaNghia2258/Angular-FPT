import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent {
 quizForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    questions: new FormControl([])
  });

  onSubmit() {
    console.log(this.quizForm.value);
  }
}
