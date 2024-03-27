"use client";

import { useState, FC } from "react";
import styles from "./chart.module.css";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { ActiveShape } from "recharts/types/util/types";
import { currencyFormatter } from "@/app/util/formatting";

const data = [
  { name: "Cash", value: 1000.23 },
  { name: "Stock", value: 3250.43 },
  { name: "Crypto", value: 2500.66 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const portfolioValue = data
  .map((element) => element.value)
  .reduce((acc, curr) => acc + curr);

type ActiveShapeProps = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: { name: string; value: number };
  percent: number;
  value: number;
};

const renderActiveShape: ActiveShape<PieSectorDataItem> = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy - 30} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy + 30} textAnchor="middle" fill="white" fontSize={35}>
        {currencyFormatter.format(payload.value)}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill={fill}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const CustomLabel: FC<{ cx: number; cy: number }> = (props) => {
  const { cx, cy } = props;
  return (
    <>
      <text
        x={`${cx}%`}
        y={`${cy - 6}%`}
        fill="white"
        className={styles.labelTitle}
        textAnchor="middle"
        dominantBaseline="central"
      >
        Portfolio Value
      </text>
      <text
        x={`${cx}%`}
        y={`${cy + 4}%`}
        fill="white"
        className={styles.labelNumber}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={35}
      >
        {currencyFormatter.format(portfolioValue)}
      </text>
    </>
  );
};

const Chart = () => {
  const [activeIndex, setActiveIndex] = useState(
    undefined as number | undefined
  );

  function onPieEnter(_: any, index: number) {
    setActiveIndex(index);
  }

  return (
    <div className={styles.container}>
      <h2>Portfolio</h2>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={800} height={700}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={180}
            outerRadius={200}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={() => setActiveIndex(undefined)}
          >
            {activeIndex === undefined && (
              <Label width={30} content={<CustomLabel cx={50} cy={50} />} />
            )}
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
