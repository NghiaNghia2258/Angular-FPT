import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../category/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../sevices/post.service';

@Component({
  selector: 'app-post-update',
  imports: [FormsModule,CommonModule],
  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent {
  model: any = {
    title: '',
    shortDescription: '',
    content: '',
    featuredImageUrl: '',
    urlHandle: '',
    publishedDate: '',
    author: '',
    isVisible: false,
    catagoryId: ''
  };
  id: string = "";
  categories: any[] = []; 

  constructor(
    private categoryServices: CategoryService,  
    private postService: PostService,  
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.postService.getPostById(this.id).subscribe(
      (post) => {
        this.model = post;
      },
      (error) => {
        console.error('Đã có lỗi xảy ra khi lấy danh mục:', error);
      }
    );
  }

  onFormSubmit(): void {
    this.postService.updatePost(this.model.id,this.model).subscribe(
      (post) => {
        this.model = post;
      },
      (error) => {
        console.error('Đã có lỗi xảy ra khi lấy danh mục:', error);
      }
    );
  }
}
