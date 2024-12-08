//const apiKey = '28df117d67941a7635e7524094758e97'; // Replace with your actual API key
const city = 'Phoenix'; // Replace with your desired city and country code
//const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${"New River,US"}&appid=${28df117d67941a7635e7524094758e97}&units=imperial`;
//const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={"33.86917"}&lon={"-112.08583"}&exclude={part}&appid={28df117d67941a7635e7524094758e97}%units=imperial`;
//const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=38.8&lon=12.09&callback=test&appid=${apiKey}&units=imperial`;

// THIS WORKS in browswer::  https://api.openweathermap.org/data/2.5/weather?q=London&appid=3a698e2b644c8191215e6415b997defe


const apiKey = '3a698e2b644c8191215e6415b997defe'; // Replace with your actual API key

// Correct latitude and longitude
const latitude = 33.86917; // Latitude for the location
const longitude = -112.08583; // Longitude for the location

// Use the correct API endpoint for the "One Call API"
// const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`;
// NEED SUBSCRIPTION TO ONECALL:   const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=3a698e2b644c8191215e6415b997defe

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    weatherDiv.innerHTML = `<p>The current temperature in ${city} is ${temperature}°F with ${description}.</p>`;
  })
  .catch(error => {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `<p>Failed to load weather data: ${error.message}</p>`;
  });
