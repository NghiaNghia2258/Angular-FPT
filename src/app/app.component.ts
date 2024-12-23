import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./todo/todo.component";
import{Assignment2Component} from './assignment2/assignment2.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent,Assignment2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-app';
}
