import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBooking } from '../MyTravel-Interfaces/IBooking';
import { UserServiceService } from '../MyTravel-services/user-service/user-service.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  bookings: IBooking[];
  email: string;

  constructor(private _user: UserServiceService, private router: Router) {
    this.email = sessionStorage.getItem("email");
  }

  ngOnInit(): void {
    if (this.email == null) {
      this.router.navigate(["/customerLogin"]);
    }
    this.getBookings();
  }

  getBookings() {
    this._user.getBookingsByEmail(this.email).subscribe(
      resp => {
        this.bookings = resp;
      },
      err => {
        this.bookings = null;
        alert("error");
      }
    )
  }
}
