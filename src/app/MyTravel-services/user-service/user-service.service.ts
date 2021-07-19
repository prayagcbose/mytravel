import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IHotel } from '../../MyTravel-Interfaces/IHotel';
import { catchError } from 'rxjs/operators';
import { IBooking } from '../../MyTravel-Interfaces/IBooking';
import { strict } from 'assert';
import { IUser } from '../../MyTravel-Interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<IHotel[]> {
    var table = this.http.get<IHotel[]>('https://mytravelapp.azurewebsites.net/api/user/gethotels').pipe(catchError(this.errorHandler));
    return table;
  }


  login(email: string, password: string): Observable<number> {
    var params: string = '?email=' + email + '&password=' + password;
    var userRole = this.http.get<number>('https://mytravelapp.azurewebsites.net/api/user/login' + params);
    return userRole;
  }

  bookHotel(email: string, hotelId: number): Observable<boolean> {
    var booking: IBooking = {
      bookingId: 0,
      userEmail: email,
      hotelId: hotelId
      
    }
    var status = this.http.post<boolean>('https://mytravelapp.azurewebsites.net/api/user/bookHotel', booking);
    return status;
  }


  getBookingsByEmail(email: string): Observable<IBooking[]> {
    var params: string = "?email=" + email;
    var table = this.http.get<IBooking[]>('https://mytravelapp.azurewebsites.net/api/user/getBookingsByEmailId' + params);
    return table;
  }

  // Sprint 2

  registerUser(email: string, password: string, userRole: number): Observable<boolean> {
    var user: IUser = {
      EmailId: email,
      Password: password,
      Userrole: userRole
    }

    var status = this.http.post<boolean>("https://mytravelapp.azurewebsites.net/api/user/registerUser", user).pipe(catchError(this.errorHandler));
    return status;

  }

  addHotel(hotelName: string, stars: number, city: string): Observable<boolean> {
    var hotel: IHotel = {
      hotelId: 0,
      hotelName: hotelName,
      stars: stars,
      city: city
    }

    var status = this.http.post<boolean>("https://mytravelapp.azurewebsites.net/api/user/addHotel", hotel).pipe(catchError(this.errorHandler));
    return status;
  }

  //---------------------------------




  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error");
  }
}
