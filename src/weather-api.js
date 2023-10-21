async function getWeatherData(city) {
  try {
    const apiKey = "54b78e2924da4590a25162644232509";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    return extractWeatherInfo(weatherData);
  } catch (error) {
    console.log(error);
  }
}

function extractWeatherInfo(weatherData) {
  console.log(weatherData);
  const extractedData = {
    name: weatherData.location.name,
    country: weatherData.location.country,

    temp_c: weatherData.current.temp_c,
    temp_f: weatherData.current.temp_f,
    feelslike_c: weatherData.current.feelslike_c,
    feelslike_f: weatherData.current.feelslike_f,
    condition: weatherData.current.condition.text,
    humidity: weatherData.current.humidity,
    windSpeed: weatherData.current.wind_kph,
  };

  return extractedData;
}

export { getWeatherData };
