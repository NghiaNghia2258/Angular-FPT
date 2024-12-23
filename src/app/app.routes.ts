import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { CategoryAddComponent } from './features/category/category-add/category-add.component';
import{AppComponent} from './app.component'
export const routes: Routes = [
    {
        path:'',
        component:AppComponent
    },
    {
        path:'admin/categories',
        component:CategoryListComponent
    },
    {
        path:'admin/categories/add',
        component:CategoryAddComponent
    }
];
