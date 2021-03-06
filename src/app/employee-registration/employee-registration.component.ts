import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../Models/student';



@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private router:Router, private StudentService:StudentService) { }


  ngOnInit(): void {
  }

    onSubmit( loginForm: NgForm){

      this.StudentService.createStudentForm(loginForm.value).subscribe(
        (data) => {
          alert("Vous êtes bien enregistré");
          this.router.navigate(['home']);
        },
        (erreur) => {
        console.log(erreur);}
      )
    }


}

