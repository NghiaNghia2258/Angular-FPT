import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieUtils } from '../../../utils/cookie-utils';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService,private router: Router ) {}
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });
  regist(){
    this.router.navigate(['/regist']);
  }
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        CookieUtils.setCookie('token', res.data.accessToken, { 
          expires: 7, 
          secure: true, 
          sameSite: 'Strict' 
        });
        this.router.navigate(['/quiz-list']);
      },
      error: (err) => {
        alert('Tài khoản hoặc mật khẩu không đúng');
      }
    });
  }
}
