import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../MyTravel-services/user-service/user-service.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private _user: UserServiceService, private router: Router) { }

  userRoleCode: number;

  ngOnInit(): void {
  }

  submitLoginForm(form: NgForm) {
    this._user.login(form.value.email, form.value.password).subscribe(
      resp => {
        this.userRoleCode = resp;
        if (this.userRoleCode == 2) {
          sessionStorage.setItem("userRole", "Customer");
          sessionStorage.setItem("email", form.value.email);
          alert("customer");
          this.router.navigate(['/home']);
        } else if (this.userRoleCode == 1) {
          sessionStorage.setItem("userRole", "Employee");
          sessionStorage.setItem("email", form.value.email);
          this.router.navigate(['/home']);
        } else {
          alert("No user");
        }
      },
      err => {
        alert("error");
      }
    )
  }
}
