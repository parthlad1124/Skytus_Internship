export const getWeatherByCity = async (city) => {
  const API_KEY = "e36ee6fd4a038b7dad872a562443596e"; // Replace with your key

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch weather");
  }

  return data;
};
