import { Component, OnInit } from '@angular/core';
import { cwd } from 'process';
import { IHotel } from '../MyTravel-Interfaces/IHotel';
import { UserServiceService } from '../MyTravel-services/user-service/user-service.service';

@Component({
  selector: 'app-view-hotels',
  templateUrl: './view-hotels.component.html',
  styleUrls: ['./view-hotels.component.css']
})
export class ViewHotelsComponent implements OnInit {

  hotels: IHotel[];
  status: boolean;
  email: string;

  constructor(private _user: UserServiceService) {
    this.email = sessionStorage.getItem("email");
  }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this._user.getHotels().subscribe(
      resp => {
        this.hotels = resp;
      },
      err => {
        this.hotels = null;
        alert("some error occured");
      }
    );
  }

  bookHotel(hotel: IHotel) {
    this._user.bookHotel(this.email, hotel.hotelId).subscribe(
      resp => {
        this.status = resp;
        if (this.status) {
          alert("Sucess");
        }
      },
      err => {
        this.status = false;
        alert("Failure");
      }
    );
  }
}
