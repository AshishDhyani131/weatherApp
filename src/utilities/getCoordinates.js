async function getCoordinates(cityName) {
  const API_URL = `https://nominatim.openstreetmap.org/search.php?q=${cityName}&format=json&type=city`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      return { latitude: lat, longitude: lon };
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}
export default getCoordinates;
