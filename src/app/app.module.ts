import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthModule} from './auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CComponent } from './c/c.component';
import {AdminModule} from './admin/admin.module';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule}from '@angular/material/core';
import{StudentModule}from './student/student.module';
import { FormsModule } from '@angular/forms';
import{StudentService}from './student/student-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AuthModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,MatIconModule,
    MatSelectModule,AdminModule,
    MatTableModule,
    MatDatepickerModule,MatNativeDateModule,
    StudentModule,
    FormsModule,
    HttpClientModule 

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
