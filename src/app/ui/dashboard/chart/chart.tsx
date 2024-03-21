"use client";

import styles from "./chart.module.css";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Text,
  Label,
} from "recharts";

const data = [
  { name: "Cash", value: 1000.23 },
  { name: "Stock", value: 3250.43 },
  { name: "Cash", value: 2500.66 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const portfolioValue = data
  .map((element) => element.value)
  .reduce((acc, curr) => acc + curr);

function CustomLabel() {
  return (
    <>
      <text
        x={425}
        y={210}
        fill="white"
        className={styles.labelTitle}
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan alignmentBaseline="middle">Portfolio Value</tspan>
      </text>
      <text
        x={425}
        y={250}
        fill="white"
        className={styles.labelNumber}
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="44px">£{portfolioValue}</tspan>
      </text>
    </>
  );
}

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2>Portfolio</h2>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={800} height={700}>
          <Pie
            data={data}
            innerRadius={180}
            outerRadius={200}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            <Label
              width={30}
              position="center"
              content={<CustomLabel />}
            ></Label>

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
