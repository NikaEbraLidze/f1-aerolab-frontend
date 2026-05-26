'use client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useLocale } from '@/hooks/useLocale';
import { useTheme } from '@/hooks/useTheme';
import { useSimulationStore } from '@/store/simulationStore';
import { Typography } from '@/components/ui/Typography';

const CHART_COLORS = {
  dark: {
    grid: '#242424',
    axis: '#242424',
    tick: '#6b6b6b',
    tooltipBg: '#141414',
    tooltipBorder: '#242424',
  },
  light: {
    grid: '#e0e0e0',
    axis: '#e0e0e0',
    tick: '#737373',
    tooltipBg: '#ffffff',
    tooltipBorder: '#e0e0e0',
  },
} as const;

export function AeroChart() {
  const t = useLocale();
  const { theme } = useTheme();
  const result = useSimulationStore((s) => s.result);
  const colors = CHART_COLORS[theme];

  return (
    <div className="rounded-xl bg-f1-surface border border-f1-border p-6 flex flex-col gap-4">
      <Typography variant="label" color="white" className="font-semibold">
        {t.simulation.chartTitle}
      </Typography>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={result?.chartData ?? []}
            margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
            <XAxis
              dataKey="speed"
              tick={{ fill: colors.tick, fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: colors.axis }}
            />
            <YAxis
              tick={{ fill: colors.tick, fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: colors.axis }}
              width={52}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.tooltipBg,
                border: `1px solid ${colors.tooltipBorder}`,
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: colors.tick, fontSize: 11 }}
            />
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              formatter={(value) => (
                <span style={{ color: colors.tick }}>{value}</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="downforce"
              name={t.simulation.downforce}
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#3b82f6' }}
            />
            <Line
              type="monotone"
              dataKey="drag"
              name={t.simulation.drag}
              stroke="#f97316"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#f97316' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
