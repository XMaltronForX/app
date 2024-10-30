import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'clima.page.html',
  styleUrls: ['clima.page.scss'],
})
export class ClimaPage implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadWeatherData();
  }

  async loadWeatherData() {
    try {
      this.weatherData = await this.weatherService.getWeatherData();
      console.log(this.weatherData); // Muestra los datos en la consola
    } catch (error) {
      console.error('Error loading weather data:', error);
    }
  }
}