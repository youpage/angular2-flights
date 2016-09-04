import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { app_routing } from './app.routing';
import { DataService } from './shared/data.service';

import { AppComponent }  from './app.component';
import { FlightsComponent }  from './flights/flights.component';
import { FlightItem }  from './flights/flight.item';
import { FlightDetails }  from './flights/flight.details';

import { CheckNull } from './flights/pipes/flight.checkNull';
import { FlightNumberFilter } from './flights/pipes/flight.NumberFilter';
import { FlightPriceFilter } from './flights/pipes/flight.PriceFilter';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightItem,
    FlightDetails,
    CheckNull,
    FlightNumberFilter,
    FlightPriceFilter
  ],
  providers: [
    DataService
  ],
  imports: [
    BrowserModule,
    //added to be able to use ngModel
    FormsModule,
    HttpModule,
    app_routing
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }

//enableProdMode(); //Uncomment for production

platformBrowserDynamic().bootstrapModule(AppModule);
