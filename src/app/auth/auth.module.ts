import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule}from '@angular/material/core';
import{StudentModule} from '../student/student.module';
import { FormsModule } from '@angular/forms';
import{StudentService} from '../student/student-service.service'



@NgModule({
  declarations: [LoginComponent, RegisterComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StudentModule,
    FormsModule 

    
  ],
  exports:[
    LoginComponent, 
    RegisterComponent
  ]
})
export class AuthModule { }
