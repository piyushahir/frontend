import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import{Student} from '../../../student/student';
import{StudentService}from '../../../student/student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  Students=new Student();
  id:number;
  constructor(private service:StudentService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getById( this.id).subscribe(res=>{
      console.log(res);
      this.Students=res;
    }, err=>{

    })
  }
  getValues(Students){
    this.service.updateStudents(this.id,Students).subscribe(data=>{
      console.log(data);

      Swal.fire({
        title: 'Updated?',
        text: 'You Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Ok',
        
      })  
      
 
    },err=>{
      console.log(err);
    })  
  }

}
