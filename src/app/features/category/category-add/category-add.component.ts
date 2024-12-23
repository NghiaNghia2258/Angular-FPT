import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestCategory } from '../models/add-category-requset.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-add',
  imports: [FormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  model:RequestCategory;

  addCategorySubscription?:Subscription;

  constructor(private categoryServices:CategoryService){
    this.model={
      name:'',
      urlHandle:''
    }
  }
  ngOnDestroy(){
    this.addCategorySubscription?.unsubscribe();
  }
  onFormSubmit(){
    console.log(this.model)
    this.addCategorySubscription= this.categoryServices.addCategory(this.model).subscribe(
      {
        next:Response=>{
          console.log('thành công')
        },
        error:err=>{
          console.log('lỗi');
        }
      }
    );
  }
}
