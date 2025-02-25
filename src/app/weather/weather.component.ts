import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any; 
  forecastData: any; 
  city: string = 'Sakakah, SA'; 
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.isLoading = true; 

    const apiKey = '6dedf0f03b45247715946135a6518701'; 

    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`)
      .subscribe(
        data => {
          console.log('Current Weather Data:', data); 
          this.weatherData = data;
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching current weather data:', error); 
          this.isLoading = false; 
        }
      );

    this.http.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.city}&appid=${apiKey}&units=metric&cnt=8`)
      .subscribe(
        data => {
          console.log('Forecast Data:', data); 
          this.forecastData = data;
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching forecast data:', error); 
          this.isLoading = false; 
        }
      );
  }

  getWeatherIcon(weather: string): string {
    switch (weather) {
      case 'Clear':
        return 'fas fa-sun';
      case 'Clouds':
        return 'fas fa-cloud';
      case 'Rain':
        return 'fas fa-cloud-rain';
      case 'Thunderstorm':
        return 'fas fa-bolt';
      case 'Snow':
        return 'fas fa-snowflake';
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Dust':
      case 'Fog':
      case 'Sand':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        return 'fas fa-smog';
      default:
        return 'fas fa-sun';
    }
  }

  getDayOfWeek(dt: number): string {
    const date = new Date(dt * 1000);
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    return days[date.getDay()];
  }

  getCurrentDate(): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-SA', options);
  }

  getFormattedDate(dt: number): string {
    const date = new Date(dt * 1000);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-SA', options);
  }
}