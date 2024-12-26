import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './features/auth/login/login.component';
import { CreateQuizComponent } from './features/quiz/create-quiz/create-quiz.component';
import { RegistComponent } from './features/auth/regist/regist.component';
export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'regist',
        component: RegistComponent
    }
    ,
    {
        path: 'create-quiz',
        component: CreateQuizComponent
    }
];
