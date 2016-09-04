import { RouterModule, Routes } from '@angular/router';

import { FlightsComponent }     from './flights/flights.component';
import { FlightDetails }     from './flights/flight.details';

const app_routes: Routes = [
  { path: 'flights', component: FlightsComponent },
  { path: 'flights/:id', component: FlightDetails },
  { path: '**', pathMatch: 'full', redirectTo: '/flights' }
];

export const app_routing = RouterModule.forRoot(app_routes);