import { StudentService } from './../../services/Student/student.service';
import { ClassService } from './../../services/Class/ClassServices';
import { GetSchoolClass, SchoolClass } from './../../interfaces/SchoolClass';
import { Subject } from './../../interfaces/Subject';
import { SubjectService } from './../../services/Subject/subject.service';
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
import { Student } from '../../interfaces/Student';
import { SchoolClassStudent } from '../../interfaces/SchoolClassStudent';
@Component({
  selector: 'app-class',
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
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent implements OnInit{
  IdClass!:number;
  ListStudent:Student[]=[];
  Student_Class:Student[]=[];
  schoolClasss:GetSchoolClass[]=[];
  displayDialog: boolean = false;
  isNewSubject: boolean = false;
  searchAllStudents: string = '';
  searchClassStudents: string = '';
  allStudents: any[] = []; 
  classStudents: any[] = []; 
  selectedStudent: any;
  selectedClassStudent: any;
  selectedStudents: Student[] = []; 
  selectedClassStudents: Student[] = []; 
  

  constructor(private classService:ClassService,
    private studentService:StudentService,
    private messageService: MessageService
  ){}

  ngOnInit(){
   this.loadSchoolClass();
  }

  loadStudent(){
      this.studentService.getAllStudent().subscribe(
        (data)=>this.ListStudent=data
      );
  }
  loadSchoolClass(){
    this.classService.GetSchoolClass().subscribe(
      (data)=>this.schoolClasss=data
    );
  }

  loadStudent_Class(id:number){
    this.studentService.getStudent_IdClass(id).subscribe(
      (data)=>this.Student_Class=data
    );
  }
  showDialogToAdd(id:number) {
    this.IdClass=id;
    this.loadStudent_Class(id);
    this.isNewSubject = true;
    this.loadStudent();
    this.displayDialog = true;
  }
  searchAllStudentsFn() {
    
  }
  
  searchClassStudentsFn() {
    
  }
  
  addStudentToClass(idStudent:number) {
    const student_class: SchoolClassStudent = {
      schoolClassId: this.IdClass, 
      studentIds: [idStudent] 
  };
    this.classService.addStudent_Class(student_class).subscribe(
      () => {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Student add'});
        this.loadStudent_Class(this.IdClass);
      },
      (error) => {
        console.error('Error adding department', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to add department'});
      }
    );
  }
  
  removeStudentFromClass(idStudent:number) {
    this.classService.DellStuden_Class(idStudent,this.IdClass).subscribe(
      () => {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Student Delete'});
        this.loadStudent_Class(this.IdClass);
      },
      (error) => {
        console.error('Error adding department', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to add department'});
      }
    );
  }

  
}
