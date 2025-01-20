import { TeacherService } from './../../services/Teacher/teacher.service';
import { StudentService } from './../../services/Student/student.service';
import { ClassService } from './../../services/Class/ClassServices';
import { GetSchoolClass, SchoolClass, UpdateSchoolClass } from './../../interfaces/SchoolClass';
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
import { DropdownModule } from 'primeng/dropdown';
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
    HeaderComponent,
    DropdownModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent implements OnInit{
selectTeacher(_t145: any) {
  console.log(_t145);
}

  IdClass!:number;
  ListStudent:Student[]=[];
  Student_Class:Student[]=[];
  schoolClasss:GetSchoolClass[]=[];
  displayDialog: boolean = false;
  displayDialog2: boolean = false;
  isNewSubject: boolean = false;
  searchAllStudents: string = '';
  searchClassStudents: string = '';
  allStudents: any[] = []; 
  classStudents: any[] = []; 
  selectedStudent: any;
  selectedClassStudent: any;
  selectedStudents: Student[] = []; 
  selectedClassStudents: Student[] = []; 
  selectedTeacher?: number ;
  Teachers:any[] = [];
  SchoolClassItem:GetSchoolClass={} as GetSchoolClass;
  subjects:any[]=[];
  model:any = {
    schoolClasssId:0,
    teachers:[
      {
        teacherId: 0,
        subjectId: 0
      }
    ]
  };

  constructor(private classService:ClassService,
    private studentService:StudentService,
    private messageService: MessageService,
    private teacherService:TeacherService,
    private subjectService:SubjectService
  ){}

  ngOnInit(){
   this.loadSchoolClass();
  }
  loadTeachers(){
      this.teacherService.getAllTeacher().subscribe(
        (data)=>this.Teachers=data
      );
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
  showDialogToAdd(id:any) {
    this.SchoolClassItem=id;
    this.loadTeachers();
    this.IdClass=id;
    this.loadStudent_Class(id.id);
    this.isNewSubject = true;
    this.loadStudent();
    this.displayDialog = true;
  }
  showDialog2(arg0: any) {
    this.displayDialog2 = true;
    this.model = {
      schoolClasssId:arg0
    };
    this.subjectService.getAllSubject(arg0).subscribe(
      (data)=>{
        this.subjects=data.map((item) => {
          return {
            ...item,
            teachers: [
              {
                id:1,
                name:"Abc"
              },
              {
                id:2,
                name:"Abc 2"
              }
            ]
          }
        })
        console.log(this.subjects);
      }
    );

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
  getTeacherName(teacherId: number): string {
    const teacher = this.Teachers.find(t => t.id === teacherId);
    return teacher ? teacher.name : 'N/A';
  }
  saveClassInfo() {
    this.classService.GetSchoolClass_ByID(this.SchoolClassItem.id).subscribe(
      (data)=>{
        var updateTeacher={
          ...data,
          homeroomTeacherId:this.selectedTeacher,
          maxStudents:this.SchoolClassItem.maxStudents
        }
        this.classService.UpdateSchoolClass(updateTeacher).subscribe(
          ()=>{
            this.messageService.add({severity:'success', summary: 'Success', detail: 'SchoolClass added'});
            this.isNewSubject = false;
            this.loadSchoolClass();
            this.displayDialog = false;
          }
        )
      }
    )
    
  }
}
