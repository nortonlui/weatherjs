class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    const { current, location } = weather;
    //console.log(current);
    //console.log(location);
    this.location.textContent = location.name;
    this.desc.textContent = current.condition.text;
    this.string.textContent = current.temp_c;
    this.icon.setAttribute('src', current.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${current.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${current.feelslike_c}`;
    this.dewpoint.textContent = `DewPoint: ${current.cloud}`;
    this.wind.textContent = `Wind: ${current.wind_mph}`;
  }
}
