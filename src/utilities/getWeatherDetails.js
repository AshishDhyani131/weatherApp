// {
//   weatherType: "sunny",
//   day: "Tue",
//   date: "12 Apr",
//   temperatures: [24, 16],
//   wind: 23,
//   humditiy: 29,
//   rain: 8,
// },
function formatDate(timestamp) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(timestamp);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dateOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return { day: dayOfWeek, date: ` ${dateOfMonth} ${month}` };
}
import { ICON_MAP } from "./iconMap";
function parseDailyWeather({ daily }) {
  return daily.time.map((ele, index) => {
    const { day, date } = formatDate(ele * 1000);
    return {
      day,
      date,
      weatherType: ICON_MAP.get(daily.weather_code[index]),
      temperatures: [
        Math.round(daily.temperature_2m_max[index]),
        Math.round(daily.temperature_2m_min[index]),
      ],
      humidity: Math.round(daily.precipitation_sum[index] * 100) / 100,
      rain: Math.round(daily.rain_sum[index]),
      wind: Math.round(daily.wind_speed_10m_max[index]),
    };
  });
}
async function getWeatherDetails(coords, timezone) {
  const { latitude, longitude } = coords;
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,wind_speed_10m_max&timeformat=unixtime&timezone=${timezone}&forecast_days=4`
    );
    const data = await res.json();
    if (!res.ok) throw new Error("City not found");
    console.log(data);
    return {
      dailyWeather: parseDailyWeather(data),
    };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}
export default getWeatherDetails;
