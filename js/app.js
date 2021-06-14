// Init Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  // Change location
  weather.changeLocation(city);

  // Set location in LS
  storage.setLocationData(city);

  // Get and display weather
  getWeather();
  // Close modal
  $('#locModal').modal('hide');
});

//weather.changeLocation('France');

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
