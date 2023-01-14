import React from "react";
import { CartesianGrid, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip } from "recharts";

interface DataPoint {
  name: string;
  $: number;
  color: string;
}

const data: DataPoint[] = [
  { name: "Eating Out", $: 2300, color: "##000000" },
  { name: "Meal Plan", $: 2000, color: "##000000" },
  { name: "Groceries", $: 1100, color: "#000000" },
  { name: "Khana", $: 960, color: "#FFD070" },
];

const Chart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, left: 20, bottom: 60 }}
        style={{ margin: "0 auto" }}
      >
        <CartesianGrid strokeDasharray="0 0" stroke="#cbcbcb52" />
        <XAxis
          dataKey="name"
          axisLine={true}
          tickLine={false}
          label={{
            value: "",
            position: "insideBottom",
            offset: -30,
            fill: "black",
          }}
          angle={-90}
          textAnchor="end"
          interval={0}
          style={{
            fontSize: "1.9rem",
            position: "relative",
            fontWeight: 900,
          }}
        />

        <YAxis
          axisLine={true}
          label={{
            value: "$",
            position: "insideLeft",
            offset: -10,
            fontWeight: "bold",
            fontSize: "2.5rem",
            fill: "#333",
          }}
          tickLine={true}
          style={{ fontSize: "1.9rem", fontWeight: 900 }}
        />

        <Tooltip
          wrapperStyle={{ backgroundColor: "red" }}
          labelStyle={{ color: "black", fontWeight: 600 }}
          itemStyle={{ color: "#333" }}
        />

        <Bar dataKey="$" barSize={40} radius={30}>
          {data.map((entry, index) => (
            <Cell fill={entry.color} key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
