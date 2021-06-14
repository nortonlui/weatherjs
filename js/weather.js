class Weather {
  constructor(city) {
    this.apiKey = '6c113c8ae4c7a6c3e3c7c30cb4e37107';
    this.query = city;
    this.url = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.query}`;
  }

  // Change weather location
  changeLocation(newLocation) {
    this.query = newLocation;
    this.url = `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.query}`;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(this.url);
    const responseData = await response.json();
    return responseData;
  }
}
