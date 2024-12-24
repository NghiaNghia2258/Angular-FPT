import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../category/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  imports: [FormsModule,CommonModule],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  model: any = {
    title: '',
    shortDescription: '',
    content: '',
    featuredImageUrl: '',
    urlHandle: '',
    publishedDate: '',
    author: '',
    isVisible: false,
    categoryId: ''
  };

  categories: any[] = []; 

  constructor(
     private categoryServices: CategoryService,  
     private router: Router  
  ) {}

  ngOnInit(): void {
    this.categoryServices.getAllCategory().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách danh mục:', err);
      }
    });
   
  }

  onFormSubmit(): void {
    console.log('Form submitted:', this.model);
  }
}
