import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [FeedbackComponent, StudentdashboardComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,MatIconModule,
    MatSelectModule,
    MatTableModule,
    FormsModule
  ]
})
export class StudentModule { }
