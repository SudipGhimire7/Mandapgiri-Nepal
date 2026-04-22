import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import type { ElevationPoint } from '../data/packageDetails';

interface ElevationProfileProps {
  data: ElevationPoint[];
  maxAltitude?: number;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload as ElevationPoint;
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 text-sm">
        {d.label && (
          <p className="font-bold text-[#1B4D3E] mb-1">{d.label}</p>
        )}
        <p className="text-gray-600">
          <span className="font-semibold text-[#C8102E]">{d.altitude.toLocaleString()} m</span> altitude
        </p>
        <p className="text-gray-500">{d.distance} km from start</p>
      </div>
    );
  }
  return null;
};

export function ElevationProfile({ data, maxAltitude }: ElevationProfileProps) {
  const peak = maxAltitude ?? Math.max(...data.map((d) => d.altitude));
  const peakPoint = data.find((d) => d.altitude === peak);

  return (
    <div className="rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1B4D3E]/5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-sm font-semibold text-gray-700">Elevation Profile</span>
        </div>
        <div className="flex gap-4 text-xs text-gray-500">
          <span>
            <span className="font-bold text-[#C8102E]">{peak.toLocaleString()} m</span> peak
          </span>
          <span>
            <span className="font-bold text-gray-700">{data[data.length - 1].distance} km</span> total
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="p-4 bg-white">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="elevGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1B4D3E" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#1B4D3E" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="distance"
              tickFormatter={(v) => `${v}km`}
              tick={{ fontSize: 11, fill: '#9ca3af' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`}
              tick={{ fontSize: 11, fill: '#9ca3af' }}
              axisLine={false}
              tickLine={false}
              width={38}
              domain={[0, Math.ceil(peak / 500) * 500 + 200]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C8102E', strokeWidth: 1.5, strokeDasharray: '4 2' }} />
            {peakPoint && (
              <ReferenceLine
                x={peakPoint.distance}
                stroke="#C8102E"
                strokeDasharray="4 3"
                strokeWidth={1.5}
                label={{
                  value: `▲ ${peak.toLocaleString()}m`,
                  position: 'insideTopRight',
                  fontSize: 10,
                  fill: '#C8102E',
                  fontWeight: 700,
                }}
              />
            )}
            <Area
              type="monotone"
              dataKey="altitude"
              stroke="#1B4D3E"
              strokeWidth={2.5}
              fill="url(#elevGradient)"
              dot={false}
              activeDot={{ r: 5, fill: '#C8102E', stroke: 'white', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-center text-xs text-gray-400 mt-1">Hover along the chart to explore altitude points</p>
      </div>
    </div>
  );
}
