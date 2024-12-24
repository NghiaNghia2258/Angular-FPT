import { PostService } from './../sevices/post.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-post-lisst',
  imports: [CommonModule],
  templateUrl: './post-lisst.component.html',
  styleUrl: './post-lisst.component.css'
})
export class PostLisstComponent implements OnInit {

  constructor(
      private PostService:PostService,
      private router: Router  
  ){}
  post: any[] = [];

  ngOnInit():void{
    this.PostService.getAllPost().subscribe({
      next:(data)=>{
        this.post=data;
      }
    })
  }

  update(Id: string): void {
    this.router.navigate([`admin/post/update/${Id}`]);
  }


  
  onDelete(Id: string): void {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
      this.PostService.deletePost(Id).subscribe({
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
