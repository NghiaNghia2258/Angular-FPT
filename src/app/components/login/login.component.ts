import { CookieService } from 'ngx-cookie-service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login = {
    email: '',
    password: '',
  };
  constructor(private authService:AuthService,
    private cookieService:CookieService,private router:Router,
    private messageService:MessageService
  ){}

  onLogin() {
    const { email, password } = this.login;
    debugger;
    this.authService.getUserDetails(email, password).subscribe({
      next: (response) => {
        const studentId = 'SV001'; 
        localStorage.setItem('studentId', studentId);
            // this.cookieService.set("Authentication",
            // `Bearer ${response}`, undefined, '/', undefined, true, 'Strict');
          this.router.navigate(['home']);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
      },
    });
  }
}
