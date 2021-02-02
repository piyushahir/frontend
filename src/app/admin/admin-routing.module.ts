import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent} from './courses/courses.component';
import { AstudentComponent} from './astudent/astudent.component';

const routes: Routes = [
  {path:'courses',component: CoursesComponent},
  {path:'student',component: AstudentComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
