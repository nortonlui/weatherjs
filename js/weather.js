class Weather {
  constructor(city) {
    this.newApiKey = '461ab64fe52a47daa36181342211606';
    this.query = city;
    this.newUrl = `https://api.weatherapi.com/v1/current.json?key=${this.newApiKey}&q=${this.query}&aqi=yes`;
  }

  // Change weather location
  changeLocation(newLocation) {
    this.query = newLocation;
    this.newUrl = `https://api.weatherapi.com/v1/current.json?key=${this.newApiKey}&q=${this.query}&aqi=yes`;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(this.newUrl);
    const responseData = await response.json();
    return responseData;
  }
}
