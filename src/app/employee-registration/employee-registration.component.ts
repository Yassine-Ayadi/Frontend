import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../Models/student';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private router:Router, private StudentService:StudentService, private userService:UserService) { }


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

