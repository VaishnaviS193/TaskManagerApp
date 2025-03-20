import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class DbAccessService {

  constructor(private http:HttpClient) { }

  GetAllUsers():Observable<any>{
    return this.http.get("http://localhost:3004/UserInfo");
  }

  AddNewUser(inpUser:UserInfo):Observable<UserInfo>{
    console.log(inpUser);
    return this.http.post<UserInfo>("http://localhost:3004/UserInfo", inpUser);
  }

  DeleteUser(id:string){
    return this.http.delete("http://localhost:3004/UserInfo/${id}");
  }

  GetAllProjects():Observable<any>{
    return this.http.get("http://localhost:3004/Project");
  }

  updateProject(id: string, updatedProject: any): Observable<any> {
    return this.http.put("http://localhost:3004/Project/${id}", updatedProject);
  }
}
