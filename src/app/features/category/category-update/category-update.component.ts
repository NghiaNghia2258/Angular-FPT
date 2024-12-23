import { Component,OnInit  } from '@angular/core';
import { RequestCategoryUpdate } from '../models/update-category-requset.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-update',
  imports: [FormsModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent {
  model:RequestCategoryUpdate;
  
    updateCategorySubscription?:Subscription;
  
    constructor(private categoryServices:CategoryService,private route: ActivatedRoute){
      this.model={
        id:'',
        name:'',
        urlHandle:''
      }
    }
    ngOnInit(): void {
      this.model.id = this.route.snapshot.paramMap.get('id') ?? "";
      this.categoryServices.GetById(this.model.id).subscribe(
        {
          next:Response=>{
            this.model = Response;
          },
          error:err=>{
            console.log('lỗi');
          }
        }
      );
    }
    ngOnDestroy(){
      this.updateCategorySubscription?.unsubscribe();
    }
    onFormSubmit(){
      console.log(this.model)
      this.updateCategorySubscription= this.categoryServices.updateCategory(this.model).subscribe(
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
