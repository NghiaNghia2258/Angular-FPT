import { TeacherService } from '../../../services/Teacher/teacher.service';
import { addTeacher, GetTeacher, Teacher } from '../../../interfaces/Teacher';
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
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { SubjectService } from '../../../services/Subject/subject.service';
@Component({
  selector: 'app-add-teacher',
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
    DropdownModule,
    CheckboxModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent implements OnInit{
  teachers: GetTeacher[] = [];
  departments:Faculty[]=[];
  teacher: Teacher = {} as Teacher;
  subjects: any[] = [];
  selectedSubjects: number[] = [];
  addTeacher:addTeacher={} as addTeacher;

  constructor(
    private departmentService:DepartmentService,
    private teacherService: TeacherService,
    private messageService: MessageService,
    private router: Router,
    private subjectService:SubjectService
  ) { }
  ngOnInit() {
    this.loadTeacher();
    this.loadDepartment();
    this.loadSubject();
  }

  onFacultyChange(event:any){
    this.departmentService.getFacultyByID(event.value).subscribe(
      (data)=>this.subjects=data
    );
  }
  loadSubject(){
    this.subjectService.getAllSubject().subscribe(
      (data)=>{
        this.subjects=data;
      },
      (error) => {
        console.error('Error fetching departments', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to fetch departments'});
      }
    );
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


  save() {
    if (this.teacher && this.selectedSubjects.length > 0) {
      const teacherData: addTeacher = {
        fullName: this.teacher.FullName,
        email: this.teacher.Email,
        phone: this.teacher.Phone,
        facultyId: this.teacher.IdKhoa,  
        subjectIds: this.selectedSubjects  
      };
      this.teacherService.addTeacher(teacherData).subscribe(
        () => {
          
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Teacher added successfully' });
          
          
          this.resetForm();
        },
        (error) => {
          console.error('Error adding teacher', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Unable to add teacher' });
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all required fields' });
    }
  }
  
  
  resetForm() {
    this.teacher = {} as Teacher;  
    this.selectedSubjects = [];   
  }
  
  managementTeacher() {
    this.router.navigate(['/teacheraaaa']);
  }

}