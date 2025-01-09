import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "../../core/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private router = inject(Router);
  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
