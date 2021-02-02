import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CoursefacultyService } from '../coursefaculty.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import{Course} from '../model/courses'

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  Course=new Course();
  id:number
  constructor(private service:CoursefacultyService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getById( this.id).subscribe(res=>{
      console.log(res);
      this.Course=res;
    }, err=>{

    })
  }
  getValues(Course){
    this.service.updateCourse(this.id,Course).subscribe(data=>{
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
