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

@Component({
  selector: 'app-subject',
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
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{
  subjects: Subject[] = [];
  subject: Subject = {} as Subject;
  displayDialog: boolean = false;
  isNewSubject: boolean = false;

  constructor(
    private subjectService: SubjectService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
    this.loadSubject();
  }
  loadSubject() {
      this.subjectService.getAllSubject().subscribe(
        (data) => {
           this.subjects = data;
        },
        (error) => {
          console.error('Error fetching departments', error);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to fetch departments'});
        }
      );
    }
  
    showDialogToAdd() {
      this.isNewSubject = true;
      this.subject = {} as Subject;
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
  
    edit(subject: Subject) {
      this.subject = {...subject};
      this.isNewSubject = false;
      this.displayDialog = true;
    }
  
    delete(subject: Subject) {
      this.confirmationService.confirm({
        message: 'Are you sure you want to delete this department?',
        accept: () => {
          this.subjectService.deleteSubject(subject.SubjectId).subscribe(
            () => {
              this.messageService.add({severity:'success', summary: 'Success', detail: 'Department deleted'});
              this.loadSubject();
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
