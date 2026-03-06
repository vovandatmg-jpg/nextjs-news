"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  {
    time: "Jan",
    "VN-Index": 1200,
    "HNX-Index": 880,
    "CPCOM-Index1": 950,
    "CPCOM-Index2": 950,
    VN30: 1150,
  },
  {
    time: "Feb",
    "VN-Index": 1210,
    "HNX-Index": 985,
    "CPCOM-Index1": 1055,
    "CPCOM-Index2": 1055,
    VN30: 675,
  },
  {
    time: "Mar",
    "VN-Index": 1110,
    "HNX-Index": 1290,
    "CPCOM-Index1": 600,
    "CPCOM-Index2": 600,
    VN30: 300,
  },
  {
    time: "Apr",
    "VN-Index": 900,
    "HNX-Index": 1090,
    "CPCOM-Index1": 1060,
    "CPCOM-Index2": 1060,
    VN30: 500,
  },
  {
    time: "May",
    "VN-Index": 1000,
    "HNX-Index": 695,
    "CPCOM-Index1": 700,
    "CPCOM-Index2": 700,
    VN30: 783,
  },
  {
    time: "Jun",
    "VN-Index": 800,
    "HNX-Index": 1000,
    "CPCOM-Index1": 380,
    "CPCOM-Index2": 380,
    VN30: 1180,
  },
  {
    time: "Jul",
    "VN-Index": 1230,
    "HNX-Index": 1300,
    "CPCOM-Index1": 200,
    "CPCOM-Index2": 200,
    VN30: 0,
  },
];

export default function IndexChart({
  selectedIndex = "",
}: {
  selectedIndex?: string;
}) {
  const lineItems = [
    { key: "VN-Index", stroke: "#1d4ed8" },
    { key: "HNX-Index", stroke: "#dc2626" },
    { key: "CPCOM-Index1", stroke: "#059669" },
    { key: "CPCOM-Index2", stroke: "#059669" },
    { key: "VN30", stroke: "#f59e0b" },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 12, left: 0, bottom: 12 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#999" />
        <YAxis tick={{ fontSize: 10 }} stroke="#999" width={30} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
          }}
          labelStyle={{ color: "#000", fontSize: "14px" }}
        />
        <Legend
          wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }}
          height={20}
        />
        {lineItems.map(
          (item) =>
            selectedIndex === item.key && (
              <Line
                key={item.key}
                type="monotone"
                dataKey={item.key}
                stroke={item.stroke}
                dot={false}
                strokeWidth={2}
              />
            ),
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
