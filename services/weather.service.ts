import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private options = {
    method: 'GET',
    url: 'https://weather-api167.p.rapidapi.com/api/weather/forecast',
    params: {
      lon: '-70.64827',
      lat: '-33.45694',
      place: 'santiago',
      zip: '1030000',
      cnt: '20',
      units: 'C',
      type: 'three_hour',
      mode: 'json',
      lang: 'es'
    },
    headers: {
      'x-rapidapi-key': '61a94d644bmsh15352cd563d610bp1176cbjsn77e2f0d641d8',
      'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
      Accept: 'application/json'
    }
  };

  constructor() {}

  async getWeatherData() {
    try {
      const response = await axios.request(this.options);
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  }
}
