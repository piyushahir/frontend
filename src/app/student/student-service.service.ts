import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  url="http://localhost:7070/student";
  constructor(private Http:HttpClient) { }

  public AddStudent(ob):Observable<any>
  {
    return this.Http.post(this.url,ob);
  }
  public getAllStudents():Observable<any>
  {
     return this.Http.get(this.url);
   }
   deleteStudents(id:any):Observable<any>
   {
     return this.Http.delete(this.url+'/'+id);
   }
   public getById(cid:any):Observable<any>
   {
     return this.Http.get(this.url+'/'+cid);
   }
   public updateStudents(id:any,Students):Observable<any>
   {
     return this.Http.put(this.url+'/'+id,Students);
   }
   public getAllFeedback():Observable<any>
   {
      return this.Http.get('http://localhost:7070/feedback');
    }
    deleteFeedback(id:any):Observable<any>
   {
     return this.Http.delete('http://localhost:7070/feedback'+'/'+id);
   }
  // public getStudent(id:number):Observable<any>
  // {
  //  // return this.Http.get();
  // }
  // public updateStudent():Observable<any>
  // {
  //  // return this.Http.get();
  // }
  // public deleteStudent():Observable<any>
  // {
  //  // return this.Http.get();
  // }
   public getAllCourses():Observable<any>
   {
      return this.Http.get('http://localhost:7070/course');
    }
    
}