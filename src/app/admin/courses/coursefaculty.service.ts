import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursefacultyService {

  url="http://localhost:7070/course";
  constructor(private Http:HttpClient) { }

  public AddCourse(ob):Observable<any>
  {
    return this.Http.post(this.url,ob);
  } 
   deleteCourse(id:any):Observable<any>
  {
    return this.Http.delete(this.url+'/'+id);
  }
  public getById(cid:any):Observable<any>
  {
    return this.Http.get(this.url+'/'+cid);
  }public
  public updateCourse(cid:any,course):Observable<any>
  {
    return this.Http.put(this.url+'/'+cid,course);
  }

}
