import { AccountServices } from './../../../services/Account/AccountServices';
import { Account } from './../../../interfaces/auth';
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
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-account',
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
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  accounts:Account[]=[];
  account:Account={} as Account;
  displayDialog:boolean=false;

  constructor(private accountServices:AccountServices){}
  ngOnInit(): void {
    this.LoadAccount();
  }

  LoadAccount(){
    this.accountServices.GetAllAccount().subscribe(
      (data)=>{
        this.accounts=data
      }
    )
  }
  edit(account:Account){
      this.accountServices.UpdateAccount(account).subscribe(
        ()=>{

        }
      )
  }

  delete(id:number){

  }

  save(){
    
  }
}
