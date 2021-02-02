import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  localvalue:string=" "
  
  constructor() { }

  ngOnInit(): void {
    this.localvalue=localStorage.getItem("student_name");
  }

}
