import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { CategoryAddComponent } from './features/category/category-add/category-add.component';
import { AppComponent } from './app.component'
import { CategoryUpdateComponent } from './features/category/category-update/category-update.component';
import { PostAddComponent } from './features/post/post-add/post-add.component';
import { PostUpdateComponent } from './features/post/post-update/post-update.component';

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
    },
    {
        path: 'admin/categories/update/:id',
        component: CategoryUpdateComponent
    },
    {
        path: 'admin/post/add',
        component: PostAddComponent
    },
    {
        path: 'admin/post/update/:id',
        component: PostUpdateComponent
    }
];
