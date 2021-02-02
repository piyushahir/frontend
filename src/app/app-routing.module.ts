import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './auth/component/login/login.component';
import {RegisterComponent} from './auth/component/register/register.component';
import{AdminDashBoardComponent}from './admin/admin-dash-board/admin-dash-board.component'
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { UpdatecourseComponent } from './admin/courses/updatecourse/updatecourse.component';
import { UpdatestudentComponent } from './admin/astudent/updatestudent/updatestudent.component';
import { AfeedbackComponent } from './admin/afeedback/afeedback.component';


const routes: Routes = [
  {path:'',component: FrontpageComponent},
   {path:'login' ,component:LoginComponent},
   {path:'register' ,component:RegisterComponent},
   {path:'dash',component:AdminDashBoardComponent},
   {path:'login/sdash',component:StudentdashboardComponent},
   {path:'updatecourse/:id',component:UpdatecourseComponent},
   {path:'updatestudent/:id',component:UpdatestudentComponent},
   {path:'afeedback',component:AfeedbackComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }



