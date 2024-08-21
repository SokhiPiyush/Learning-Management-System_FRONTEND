import { Routes } from '@angular/router';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { apiurls } from '../api.url';

export const routes: Routes = [
    {path:'courses/:id', component:CourseDetailComponent}
];
