import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import{CoursefacultyService}from './coursefaculty.service';
import { StudentService } from 'src/app/student/student-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
// export interface PeriodicElement {
//   c_id: number
//   c_name: string;
//   size: number;
//   start_date: string;
//   end_date: string;
//   fees:number;
//   f_id:number;
//   name:string;
//   contact:number;
//   address:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//  { c_id: 1, c_name: 'c++', size:100,  start_date:'01//1/2021',end_date:'03/04/2021',fees:20000,f_id: 1, name: 'Prashant sir',contact: 9089897,address:'Pune'},
//  {c_id: 2, c_name: 'java', size: 150, start_date:'01//1/2021',end_date:'03/04/2021',fees:20000,f_id: 2, name: 'Rohit sir',contact: 9089897,address:'Pune'},
//  {c_id: 3, c_name: 'angular', size:100,  start_date:'01//1/2021',end_date:'03/04/2021',fees:20000,f_id: 3, name: 'Keshav sir',contact: 9089897,address:'Pune'},
// ];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Course:any=[];
  constructor( private course : CoursefacultyService,private service:StudentService,private router:Router
              ) { }
  ngOnInit(): void {
    this.service.getAllCourses( ).subscribe(res=>{
      this.Course=res;
    }, err=>{

    })
  }
  onDelete(id)
  {
    this.course.deleteCourse(id).subscribe
    (
      data=>{
        console.log(data);
        if(data==true)
        {
              Swal.fire({
                title: 'Deleted?',
                text: 'You Deleted Successfully',
                icon: 'success',
                confirmButtonText: 'Ok',  
              })
        }        
      
      else {err=>{
                    console.log(err);
                  }
           }
        }
    )  

  }
  onUpdate(id){   
    this.router.navigate(['updatecourse/',id]);
  }
  
      
    course_name:string;
    start_date: any;
    end_date: any;
    batch_size: number;
    fees: number;
    faculty_name:string;
    faculty_address: string;
    faculty_contact_no: string;

    getValues() {
      var ob={    
        course_name:this.course_name,
        start_date:this.start_date,
        end_date:this.end_date,
        batch_size:this.batch_size,
        fees:this.fees,
        faculty :
           {
        
        faculty_name: this.faculty_name,
        address:this.faculty_address,
        contact_no:this.faculty_contact_no
   
           }
        }; console.log(ob);
        this.course.AddCourse(ob).subscribe(data => {
          console.log(data);
        Swal.fire({
             title: 'Saved?',
            text: 'Your course added Successfully',
            icon: 'success',
             confirmButtonText: 'Ok',
           })
     
         }, err => {
           console.log(err);
         })
    }
 
}
