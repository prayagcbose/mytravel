import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "viewBookings", component: ViewBookingsComponent },
  { path: "viewHotels", component: ViewHotelsComponent },
  { path: "customerLogin", component: CustomerLoginComponent },
  { path: "registerUser", component: RegisterUserComponent },
  { path: "addHotel", component: AddHotelComponent },



  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
