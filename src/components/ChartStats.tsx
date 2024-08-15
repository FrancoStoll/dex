import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Stat } from "../types/pokemon";

const attributeStyles = {
  hp: { color: "#32cd32", emoji: "❤️" }, // Verde lima
  attack: { color: "#ff4500", emoji: "⚔️" }, // Naranja rojizo
  defense: { color: "#ffd700", emoji: "🛡️" }, // Dorado
  "special-attack": { color: "#1e90ff", emoji: "🔥" }, // Azul brillante
  "special-defense": { color: "#ff8c00", emoji: "🌟" }, // Naranja oscuro
  speed: { color: "#708090", emoji: "💨" }, // Gris pizarra
};
export const ChartStats = ({ stats }: { stats: Stat[] }) => {
  const dataForChart = stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
    // @ts-ignore
    fill: attributeStyles[stat.stat.name].color,
    // @ts-ignore
    emoji: attributeStyles[stat.stat.name].emoji,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={400}>
        <Pie
          className="p-5"
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={dataForChart}
          cx="40%"
          cy="80%"
          innerRadius={60}
          label={({ name, payload, value }) =>
            `${payload.emoji} ${name}: ${value}`
          }
          isAnimationActive={true}
        />
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
};
