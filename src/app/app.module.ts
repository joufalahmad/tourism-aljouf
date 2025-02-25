import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SitesComponent } from './sites/sites.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ServicesComponent } from './services/services.component';
import { CafesComponent } from './cafes/cafes.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { MallsComponent } from './malls/malls.component';
import { TransportComponent } from './transport/transport.component';
import { HotelsComponent } from './hotels/hotels.component';
import { EnergyComponent } from './energy/energy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SitesComponent,
    RestaurantsComponent,
    FooterComponent,
    FestivalsComponent,
    WeatherComponent,
    EntertainmentComponent,
    ServicesComponent,
    CafesComponent,
    HospitalsComponent,
    MallsComponent,
    TransportComponent,
    HotelsComponent,
    EnergyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
