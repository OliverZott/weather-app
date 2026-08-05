"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TemperatureChart({ value }: { value: number }) {
  const data = [{ name: "Now", temp: value }];

  return (
    <LineChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}
