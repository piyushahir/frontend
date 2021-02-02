import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private Http:HttpClient) { }

  public LoginStudent(student:any):Observable<any>
  {
    return this.Http.post("http://localhost:7070/student/validate",student);
  }
}
