import { Component, OnInit } from '@angular/core';

import{StudentService} from '../student/student-service.service'

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
 
  Course:any=[];
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.service.getAllCourses( ).subscribe(res=>{
      this.Course=res;
    }, err=>{

    })
  }
 

}

  