import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  imports: [ReactiveFormsModule],
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.css'
})
export class RegistComponent {
  constructor(private authService:AuthService,private router: Router) {}
    loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required]),
      repassword: new FormControl('', [Validators.required])
    });
    login(){
      this.router.navigate(['/login']);
    }
    onSubmit() {
      if(this.loginForm.value.password != this.loginForm.value.repassword){
        alert('Mật khẩu không khớp');
        return;
      }
      this.authService.regist(this.loginForm.value).subscribe({
        next: (res) => {
          alert(' Đăng ký thành công');
        },
        error: (err) => {
          alert('Có lỗi khi đăng ký');
        }
      });
    }
}
