import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './features/auth/login/login.component';
import { CreateQuizComponent } from './features/quiz/create-quiz/create-quiz.component';
import { RegistComponent } from './features/auth/regist/regist.component';
import { authGuard } from './features/guard/auth.guard';
import { ListQuizComponent } from './features/quiz/list-quiz/list-quiz.component';
import { UpdateQuizComponent } from './features/quiz/update-quiz/update-quiz.component';

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
        component: CreateQuizComponent,
        canActivate: [authGuard]
    },
    {
        path: 'update-quiz/:id',
        component: UpdateQuizComponent,
        canActivate: [authGuard]
    },
    {
        path: 'quiz-list',
        component: ListQuizComponent,
        canActivate: [authGuard]
    }
];
