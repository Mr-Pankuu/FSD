import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'course',
    component: CourseComponent
  }
];
