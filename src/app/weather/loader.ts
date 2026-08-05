import { fetchWeather } from "../infrastructure/http/geosphereClinet";

export async function loadWeather(location: string) {
  const data = await fetchWeather(location);
  const temp = data?.features?.[0]?.properties?.parameters?.TL?.data?.[0];
  return { location, temperature: temp };
}
