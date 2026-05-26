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
import { useSimulationStore } from '@/store/simulationStore';
import { Typography } from '@/components/ui/Typography';

export function AeroChart() {
  const t = useLocale();
  const result = useSimulationStore((s) => s.result);

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
            <CartesianGrid strokeDasharray="3 3" stroke="#242424" />
            <XAxis
              dataKey="speed"
              tick={{ fill: '#6b6b6b', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#242424' }}
            />
            <YAxis
              tick={{ fill: '#6b6b6b', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#242424' }}
              width={52}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#141414',
                border: '1px solid #242424',
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: '#6b6b6b', fontSize: 11 }}
            />
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              formatter={(value) => (
                <span style={{ color: '#6b6b6b' }}>{value}</span>
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
