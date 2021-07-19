import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerLayoutComponent,
    ViewHotelsComponent,
    ViewBookingsComponent,
    CustomerLoginComponent,
    AddHotelComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
