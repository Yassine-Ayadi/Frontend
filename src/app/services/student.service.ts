import { Injectable } from '@angular/core';
import  {basePath} from  "../constants"; 
import { HttpClient, HttpHeaders, HttpParams, }  from '@angular/common/http';
import { JobApplication } from '../model/jobApplication';
import { Student } from '../Models/student';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class StudentService {

    public defaultHeaders = new HttpHeaders();
  constructor(private httpClient: HttpClient) { }


  public createStudentForm(loginForm: Student): Observable<Student> {
      return this.httpClient.post<Student>('http://localhost:3000/student',loginForm, httpOptions)
  }

