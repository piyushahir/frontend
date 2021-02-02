import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/student-service.service';
import Swal from 'sweetalert2';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-astudent',
  templateUrl: './astudent.component.html',
  styleUrls: ['./astudent.component.css']
})

export class AstudentComponent implements OnInit {

  // id: number;
  // name: string;
  // email: string;
  // course:string;
  // contact: number;
  // gender:string;
  // qualification:string;
  // address:string;

  constructor(private student:StudentService,private router:Router) { }

  Student:any=[];
  ngOnInit(): void {
    this.student.getAllStudents( ).subscribe(res=>{
      this.Student=res;
    }, err=>{

    })
  }

  onDelete(id)
  {
    this.student.deleteStudents(id).subscribe
    ( data=>{
      console.log(data);
      if(data==true)
      Swal.fire({
        title: 'Deleted?',
        text: 'You Deleted Successfully',
        icon: 'success',
        confirmButtonText: 'Ok',

      })
      window.location.reload();
    },err=>{
      console.log(err);
    }
    )  

  }
  onUpdate(id){   
    this.router.navigate(['updatestudent',id]);
  }
}
