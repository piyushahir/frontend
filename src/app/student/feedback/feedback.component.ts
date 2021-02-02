import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import {FeedbackserviceService} from './feedbackservice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  enroll_id:number;
  comment:string;
  rating:string;
  constructor(private feedbackadd:FeedbackserviceService) { }

  ngOnInit(): void {
  }
  getValues() {
    var obj={   
     
        rating:this.rating,
        comments:this.comment,
        enroll:{
            enroll_id:this.enroll_id
       
                }
 
         
      }; console.log(obj);
      this.feedbackadd.AddFeedback(obj).subscribe(data => {
        console.log(data);
      Swal.fire({
           title: 'Saved?',
          text: 'Your feedback added Successfully',
          icon: 'success',
           confirmButtonText: 'Ok',
         })
   
       }, err => {
         console.log(err);
       })
  }

}
