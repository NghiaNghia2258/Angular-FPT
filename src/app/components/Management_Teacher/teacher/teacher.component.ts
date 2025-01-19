import { TeacherService } from '../../../services/Teacher/teacher.service';
import { GetTeacher, Teacher } from '../../../interfaces/Teacher';
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
import { NavbarComponent } from "../../../core/navbar/navbar.component";
import {HeaderComponent} from '../../../core/header/header.component'
import { DepartmentService } from '../../../services/Department/Department.service';
import { Faculty } from '../../../interfaces/Faculty';
import { DropdownModule } from 'primeng/dropdown';
import { Route, Router } from '@angular/router';
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
    HeaderComponent,
    DropdownModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit{
  teachers: GetTeacher[] = [];
  departments:Faculty[]=[];
  teacher: Teacher = {} as Teacher;
  displayDialog: boolean = false;
  isNewTeacher: boolean = false;

  constructor(
    private departmentService:DepartmentService,
    private teacherService: TeacherService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router:Router
  ) { }
  ngOnInit() {
    this.loadTeacher();
    this.loadDepartment();
  }

  loadDepartment(){
    this.departmentService.getDepartments().subscribe(
      (data)=>{
        this.departments=data;
      },
      (error) => {
        console.error('Error fetching departments', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to fetch departments'});
      }
    );
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

 

  edit(teacher: Teacher) {
    this.teacher = {...teacher};
    this.isNewTeacher = false;
    this.displayDialog = true;
  }

  delete(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this teacher?',
      accept: () => {
        this.teacherService.deleteTeacher(id).subscribe(
          () => {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'teacher deleted'});
            this.loadTeacher();
          },
          (error) => {
            console.error('Error deleting teacher', error);
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to delete teacher'});
          }
        );
      }
    });
  }

  addTeacher() {
    this.router.navigate(['/formaddTeacher']);
  }

}
