import TemperatureChart from "@/ui/components/TemperatureChart";
import { loadWeather } from "./loader";

export default async function WeatherPage() {
  const { temperature } = await loadWeather("innsbruck");

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Weather</h1>
      <TemperatureChart value={temperature} />
    </div>
  );
}
