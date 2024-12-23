import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todos.push({ title: this.newTodo.trim(), completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  toggleTodoCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
