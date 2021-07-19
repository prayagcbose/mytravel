import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../MyTravel-services/user-service/user-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private _user: UserServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    if (!form.valid || form.value.password != form.value.password1) {
      alert("form Not valid");
    }
    else {
      this._user.registerUser(
        form.value.email,
        form.value.password,
        parseInt(form.value.userRole)
      ).subscribe(
        resp => {
          if (resp) {
            alert("Success");
            this.route.navigate(["/customerLogin"])
          } else {
            alert("failed");
          }
        },
        err => {
          alert("error occuerd");
        }
      )
    }
  }

}
