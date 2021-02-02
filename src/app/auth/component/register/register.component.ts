import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StudentModule } from '../../../student/student.module';
import { Student } from '../../../student/student' 
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../student/student-service.service';
import Swal from 'sweetalert2';
//import { StudentEnrolls } from 'src/app/student/student-enrolls';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
      s_student_name: string;
      s_email: string;
      s_contact_no: number;
      s_password:string;
      s_confirm_password: string;
      s_student_address:string;
      s_gender:string;
      s_qualification:string;
      s_payment:1000;
      s_course_id:number;
      s_reg_date:any;
     
        
              

  courses: any = [
    {cs_id: 2,cs_name: 'Java' },
    { cs_id: 3, cs_name: 'C++'},
    {  cs_id: 4, cs_name: 'OS'},
    { cs_id: 5, cs_name: 'C' },
    ];


 // student:Student=new Student();

  
  constructor(private studentAdd: StudentService) { }
  
  ngOnInit(): void {
    
  }

  dateChanged($event)
  { 
    console.log($event.target.value );
    
  }
  getValues() {
    var ob={
      student_name:this.s_student_name,
      email:this.s_email,
      contact_no:this.s_contact_no,
      password:this.s_password,
      confirm_password:this.s_confirm_password,
      student_address:this.s_student_address,
      gender:this.s_gender,
      qualification:this.s_qualification,
      studentEnrolls: 
          [{
              payment:this.s_payment,
              reg_date:this.s_reg_date,
              course:{
                course_id:this.s_course_id
              }
          }
          ]
      
       };
       console.log(ob); 
                                 // this.student.studentEnrolls=new StudentEnrolls()[3];
                                //    this.student.studentEnrolls.push({payment:3000,reg_date:"1-1-2021"});
  // this.studentAdd.AddStudent(this.student).subscribe(data => {
       this.studentAdd.AddStudent(ob).subscribe(data => {
     console.log(data);
   Swal.fire({
        title: 'Saved?',
       text: 'You Registered Successfully',
       icon: 'success',
        confirmButtonText: 'Ok',
      })

    }, err => {
      console.log(err);
    })
  }   
}
