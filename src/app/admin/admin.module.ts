import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { CoursesComponent } from './courses/courses.component';
import { AstudentComponent } from './astudent/astudent.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { UpdatecourseComponent } from './courses/updatecourse/updatecourse.component';
import { UpdatestudentComponent } from './astudent/updatestudent/updatestudent.component';
import { AfeedbackComponent } from './afeedback/afeedback.component';


@NgModule({
  declarations: [AdminDashBoardComponent, CoursesComponent,  AstudentComponent, UpdatecourseComponent, UpdatestudentComponent, AfeedbackComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,MatIconModule,
    MatSelectModule,
    MatTableModule,FormsModule
  ]
})
export class AdminModule { }
