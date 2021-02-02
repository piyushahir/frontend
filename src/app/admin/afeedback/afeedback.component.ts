import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import{StudentService}from '../../student/student-service.service';
import{Feed} from './model/feed';
@Component({
  selector: 'app-afeedback',
  templateUrl: './afeedback.component.html',
  styleUrls: ['./afeedback.component.css']
})
export class AfeedbackComponent implements OnInit {
  Feed:any=[];
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.service.getAllFeedback( ).subscribe(res=>{
      this.Feed=res;
      console.log(res);
    }, err=>{

    })
  }
  onDelete(id)
  {
    this.service.deleteFeedback(id).subscribe
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

}
