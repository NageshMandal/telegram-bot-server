const axios = require('axios');

const getWeatherByCoordsFactory = (token) => {
  return async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${token}&units=metric`;

      const res = await axios.get(url);
      const data = res.data;

      const weatherMain = data.weather[0]?.main || 'Clear';
      const description = data.weather[0]?.description || '';
      const temp = data.main?.temp;
      const humidity = data.main?.humidity;
      const location = data.name;

      return {
        main: weatherMain,
        text: `📍 *${location}*\n🌡️ Temp: ${temp}°C\n💧 Humidity: ${humidity}%\n🌤️ ${description}`
      };
    } catch (err) {
      console.error('❌ Error fetching weather:', err.response?.data || err.message);
      return {
        main: 'Unknown',
        text: '⚠️ Unable to fetch weather data. Please check your city name or try again later.'
      };
    }
  };
};

module.exports = { getWeatherByCoordsFactory };
