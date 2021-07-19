import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../MyTravel-services/user-service/user-service.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private _user: UserServiceService) { }

  ngOnInit(): void {
  }

  addHotel(form: NgForm) {
    if (!form.valid) {
      alert("form Not valid");
    }
    else {
      this._user.addHotel(
        form.value.hotelName,
        parseInt(form.value.stars),
        form.value.city
      ).subscribe(
        resp => {
          if (resp) {
            alert("Success");
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
