import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/navbar/navbar.component";

@Component({
  selector: 'app-dashboard-base',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard-base.component.html',
  styleUrl: './dashboard-base.component.css'
})
export class DashboardBaseComponent {

}
