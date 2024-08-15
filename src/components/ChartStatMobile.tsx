import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Stat } from "../types/pokemon";

export const ChartStatMobile = ({ stats }: { stats: Stat[] }) => {
  const dataForChart = stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart outerRadius="80%" data={dataForChart}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Stats"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />

        <Tooltip />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};
