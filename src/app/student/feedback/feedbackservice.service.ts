import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackserviceService {

  url="http://localhost:7070/feedback";
  constructor(private Http:HttpClient) { }

  public AddFeedback(obj):Observable<any>
  {
    return this.Http.post(this.url,obj);
  }}
