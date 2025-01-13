import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { DepartmantComponent } from './components/departmant/departmant.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/Management_Teacher/teacher/teacher.component';
import { SubjectComponent } from './components/subject/subject.component';
import { AddTeacherComponent } from './components/Management_Teacher/add-teacher/add-teacher.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'departman', component: DepartmantComponent },
  { path: 'student', component: StudentComponent },
  {
    path: 'teacheraaaa',
    component: TeacherComponent,
    canActivate: [authGuard],
  },
  { path: 'subject', component: SubjectComponent },
  { path: 'formaddTeacher', component: AddTeacherComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
