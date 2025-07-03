// bot/utils/quotes.js
const quotesByWeather = {
    Clear: [
      "☀️ A sunny day is a perfect excuse to smile a little wider.",
      "💫 Shine bright like the sun today!",
      "🌻 Keep your face to the sunshine and you'll never see the shadows."
    ],
    Clouds: [
      "☁️ Even cloudy skies can’t dim your sparkle.",
      "🌥 Every cloud has a silver lining.",
      "✨ Embrace the gray—your energy brings the color."
    ],
    Rain: [
      "🌧 A little rain never hurt anyone—dance in it!",
      "🌈 Rainy days make cozy moments.",
      "💦 Let the rain wash away the worries."
    ],
    Drizzle: [
      "💧 Tiny drops, big smiles!",
      "🌦 Even a drizzle brings peace.",
      "🎵 Drizzle outside, calm inside."
    ],
    Thunderstorm: [
      "⛈ Storms make trees take deeper roots.",
      "⚡ Bravery is built in the storm.",
      "💪 Weather the storm. Shine after."
    ],
    Snow: [
      "❄️ You're one of a kind—just like every snowflake!",
      "⛄ Cold weather, warm hearts.",
      "🎿 Let it snow, let it glow!"
    ],
    Mist: [
      "🌫 Sometimes the best view comes after the mist clears.",
      "🧘‍♂️ Breathe deep. Stay grounded.",
      "🔮 The fog will lift—keep walking."
    ],
    Default: [
      "🌤 Enjoy today, no matter the forecast.",
      "🌀 Let nature remind you of your own rhythms.",
      "😊 Smile, it's a new day!"
    ]
  };
  
  function getQuoteByWeather(main) {
    return (
      quotesByWeather[main] ||
      quotesByWeather["Default"]
    )[Math.floor(Math.random() * (quotesByWeather[main]?.length || quotesByWeather["Default"].length))];
  }
  
  module.exports = { getQuoteByWeather };
  