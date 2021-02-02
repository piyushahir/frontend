import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StudentModule } from '../../../student/student.module';
 import { FormsModule } from '@angular/forms';
import{Student} from'./model/student';
import{LoginServiceService} from '../../login-service.service';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  student:Student=new Student();
  constructor(private studentValidate:LoginServiceService,
              private router:Router
    ) { }

  ngOnInit(): void {
  }
  onClick()
  {
    this.studentValidate.LoginStudent(this.student).subscribe(data=>{
      console.warn(data);
      if(data!=null)
      {
      this.router.navigate(['/login/sdash/']);
      localStorage.setItem("student_name",data.student_name);
      console.warn(data.fname);
      localStorage.setItem("student_id",data.student_id);
      }
      else{
        if((this.student.email=="admin")&&(this.student.password=="admin123"))
         {
           this.router.navigate(['dash'])
         }
        else 
         {
           alert("Wrong Password");
         }
      }
    },err=>{
      alert(err);
    })  
  }

}
