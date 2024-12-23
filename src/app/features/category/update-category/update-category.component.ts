import { CategoryService } from './../services/category.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestCategory } from '../models/add-category-requset.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-update-category',
  imports: [FormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent {
      model:RequestCategory;
      addCategorySubscription?:Subscription;
      constructor (private CategoryService:CategoryService){
        this.model={
          id:'',
          name:'',
          urlHandle:''
        }
      }
      ngOnDestroy(){
        this.addCategorySubscription?.unsubscribe();
      }
      onFormSubmit(){
        
      }
}
