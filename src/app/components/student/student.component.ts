import { StudentService } from './../../services/Student/student.service';
import { Student, StudentAdd } from './../../interfaces/Student';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    NavbarComponent,
    HeaderComponent
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  students: Student[] = [];
  student: StudentAdd = {} as StudentAdd;
  displayDialog: boolean = false;
  isNewStudent: boolean = false;

  constructor(
    private studentService: StudentService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudent().subscribe(
      (data) => {
         this.students = data;
      },
      (error) => {
        console.error('Error fetching departments', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to fetch departments'});
      }
    );
  }

  showDialogToAdd() {
    this.isNewStudent = true;
    this.student = {} as StudentAdd;
    this.displayDialog = true;
  }

  save() {
    // if (this.isNewStudent) {
    //   this.departmentService.addDepartment(this.student).subscribe(
    //     () => {
    //       this.messageService.add({severity:'success', summary: 'Success', detail: 'Department added'});
    //       this.loadDepartments();
    //     },
    //     (error) => {
    //       console.error('Error adding department', error);
    //       this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to add department'});
    //     }
    //   );
    // } else {
    //   this.departmentService.updateDepartment(this.department).subscribe(
    //     () => {
    //       this.messageService.add({severity:'success', summary: 'Success', detail: 'Department updated'});
    //       this.loadDepartments();
    //     },
    //     (error) => {
    //       console.error('Error updating department', error);
    //       this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to update department'});
    //     }
    //   );
    // }
    this.displayDialog = false;
  }

  edit(student: StudentAdd) {
    this.student = {...student};
    this.isNewStudent = false;
    this.displayDialog = true;
  }

  delete(Student: Student) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this department?',
      accept: () => {
        this.studentService.deleteStudent(Student.Code).subscribe(
          () => {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Department deleted'});
            this.loadStudents();
          },
          (error) => {
            console.error('Error deleting department', error);
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to delete department'});
          }
        );
      }
    });
  }
}
