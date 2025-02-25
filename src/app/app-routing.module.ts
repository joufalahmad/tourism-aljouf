import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SitesComponent } from './sites/sites.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { WeatherComponent } from './weather/weather.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ServicesComponent } from './services/services.component';
import { CafesComponent } from './cafes/cafes.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { MallsComponent } from './malls/malls.component';
import { TransportComponent } from './transport/transport.component';
import { HotelsComponent } from './hotels/hotels.component';
import { EnergyComponent } from './energy/energy.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'sites',component:SitesComponent},
  {path:'footer',component:FooterComponent},
  {path:'festivals',component:FestivalsComponent},
  {path:'restaurants',component:RestaurantsComponent},
  {path:'weather',component:WeatherComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'services',component:ServicesComponent},
  {path:'cafes',component:CafesComponent},
  {path:'hospitals',component:HospitalsComponent},
  {path:'malls',component:MallsComponent},
  {path:'transport',component:TransportComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'energy',component:EnergyComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
