import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuModule, BadgeModule, RippleModule, AvatarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        separator: true
      },
      {
        label: 'Danh Mục',
        items: [
          {
            label: 'Quản lý khoa',
            icon: 'pi pi-plus',
            command: () => this.navigateTo('/departman')
          },
          {
            label: 'Quản Lý Lớp',
            icon: 'pi pi-search',
            command: () => this.navigateTo('/documents/search')
          },
          {
            label: 'Quản Lý sinh viên',
            icon: 'pi pi-search',
            command: () => this.navigateTo('/student')
          },
          {
            label: 'Quản Lý giảng viên',
            icon: 'pi pi-search',
            command: () => this.navigateTo('/teacheraaaa')
          },
          {
            label: 'Quản Lý môn học',
            icon: 'pi pi-search',
            command: () => this.navigateTo('/subject')
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
            command: () => this.navigateTo('/profile/settings')
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
            command: () => this.navigateTo('/profile/messages')
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
            command: () => this.logout()
          }
        ]
      },
      {
        separator: true
      }
    ];
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }
}