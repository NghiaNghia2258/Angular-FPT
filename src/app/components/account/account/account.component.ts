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
  providers: [ConfirmationService, MessageService],

  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  accounts:Account[]=[];
  account:Account={} as Account;
  displayDialog:boolean=false;
  newPassword: string = '';
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
    this.account = {...account};
    this.displayDialog=true;
  }

  delete(id:number){

  }

  save() {
    if (this.newPassword.trim() === '') {
      alert('Vui lòng nhập mật khẩu mới!');
      return;
    }

    const data={
      id:this.account.id,
      newPass:this.newPassword
    }

      this.accountServices.UpdateAccount(data).subscribe(
        () => {
          alert('Đổi mật khẩu thành công!');
          this.LoadAccount(); 
          this.displayDialog = false; 
          this.newPassword='';
        },
        (error) => {
          alert('Đã xảy ra lỗi khi đổi mật khẩu: ' + error.message);
        }
      );
    
  }
}
