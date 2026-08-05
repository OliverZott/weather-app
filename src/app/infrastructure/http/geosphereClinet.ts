export async function fetchWeather(location: string) {
  const res = await fetch(
    `https://dataset.api.hub.geosphere.at/v1/timeseries/${location}`,
    { next: { revalidate: 300 } },
  );

  if (!res.ok) throw new Error("Weather API failed");
  return res.json();
}
