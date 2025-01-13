import { Faculty } from './../../interfaces/Faculty';
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
import { DepartmentService } from '../../services/Department/Department.service';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import {HeaderComponent} from '../../core/header/header.component'
@Component({
  selector: 'app-departmant',
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
  templateUrl: './departmant.component.html',
  styleUrl: './departmant.component.css'
})
export class DepartmantComponent implements OnInit{
  departments: Faculty[] = [];
  department: Faculty = {} as Faculty;
  displayDialog: boolean = false;
  isNewDepartment: boolean = false;

  constructor(
    private departmentService: DepartmentService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to fetch departments'});
      }
    );
  }

  showDialogToAdd() {
    this.isNewDepartment = true;
    this.department = {} as Faculty;
    this.displayDialog = true;
  }

  save() {
    if (this.isNewDepartment) {
      this.departmentService.addDepartment(this.department).subscribe(
        () => {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Department added'});
          this.loadDepartments();
        },
        (error) => {
          console.error('Error adding department', error);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to add department'});
        }
      );
    } else {
      this.departmentService.updateDepartment(this.department).subscribe(
        () => {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Department updated'});
          this.loadDepartments();
        },
        (error) => {
          console.error('Error updating department', error);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Unable to update department'});
        }
      );
    }
    this.displayDialog = false;
  }

  edit(department: Faculty) {
    this.department = {...department};
    this.isNewDepartment = false;
    this.displayDialog = true;
  }

  delete(department: Faculty) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this department?',
      accept: () => {
        this.departmentService.deleteDepartment(department.id).subscribe(
          () => {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Department deleted'});
            this.loadDepartments();
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
