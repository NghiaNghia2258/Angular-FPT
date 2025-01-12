import { TeacherService } from './../../services/Teacher/teacher.service';
import { Teacher } from './../../interfaces/Teacher';
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
  selector: 'app-teacher',
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
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit{
  teachers: Teacher[] = [];
  teacher: Teacher = {} as Teacher;
  displayDialog: boolean = false;
  isNewTeacher: boolean = false;

  constructor(
    private teacherService: TeacherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
    this.loadTeacher();
  }

  loadTeacher() {
    this.teacherService.getAllTeacher().subscribe(
      (data) => {
         this.teachers = data;
      },
      (error) => {
        console.error('Error fetching departments', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to fetch departments'});
      }
    );
  }

  showDialogToAdd() {
    this.isNewTeacher = true;
    this.teacher = {} as Teacher;
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

  edit(teacher: Teacher) {
    this.teacher = {...teacher};
    this.isNewTeacher = false;
    this.displayDialog = true;
  }

  delete(teacher: Teacher) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this department?',
      accept: () => {
        this.teacherService.deleteTeacher(teacher.Code).subscribe(
          () => {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Department deleted'});
            this.loadTeacher();
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
