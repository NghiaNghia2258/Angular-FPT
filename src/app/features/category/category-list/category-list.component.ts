import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { CategoryService } from './../services/category.service';  
import { RequestCategory } from '../models/add-category-requset.model';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  imports:[CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: RequestCategory[] = [];  
  model: RequestCategory = { id: "", name: '', urlHandle: '' };  

  constructor(
    private categoryServices: CategoryService,  
    private router: Router  
  ) {}

  ngOnInit(): void {
    this.categoryServices.getAllCategory().subscribe({
      next: (data) => {
        this.categories = data;
        console.log('Danh sách danh mục:', this.categories);
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách danh mục:', err);
      }
    });
  }


  getById(Id: string): void {
    this.categoryServices.GetById(Id).subscribe({
      next: (data) => {
        this.model = data;  
        this.router.navigate(['/admin/categories/add'], { state: { categoryData: this.model } });

      },
      error: (err) => {
        alert("Lỗi server!");
      }
    });
  }

 
  onDelete(Id: string): void {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
      this.categoryServices.deleteCategory(Id).subscribe({
        next: () => {
          alert("Xóa thành công!");
          this.ngOnInit(); 
        },
        error: (err) => {
          alert("Xóa thất bại!");
        }
      });
    }
  }
}
