import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell,
  LineChart, Line,
  Tooltip as RechartsTooltip,
} from "recharts";

const barData = [
  { month: "Jan", jobs: 12, revenue: 18500 },
  { month: "Feb", jobs: 15, revenue: 22000 },
  { month: "Mar", jobs: 22, revenue: 34000 },
  { month: "Apr", jobs: 18, revenue: 27500 },
  { month: "May", jobs: 25, revenue: 38000 },
  { month: "Jun", jobs: 20, revenue: 31000 },
];

const donutData = [
  { name: "Booked", value: 68, color: "hsl(var(--primary))" },
  { name: "Available", value: 22, color: "hsl(var(--status-confirmed))" },
  { name: "Off", value: 10, color: "hsl(var(--muted))" },
];

const sparkData1 = [
  { v: 5 }, { v: 8 }, { v: 6 }, { v: 12 }, { v: 9 }, { v: 15 }, { v: 18 }, { v: 14 }, { v: 22 },
];
const sparkData2 = [
  { v: 14 }, { v: 12 }, { v: 16 }, { v: 11 }, { v: 18 }, { v: 15 }, { v: 13 }, { v: 17 }, { v: 19 },
];
const sparkData3 = [
  { v: 3 }, { v: 5 }, { v: 4 }, { v: 7 }, { v: 6 }, { v: 5 }, { v: 8 }, { v: 7 }, { v: 6 },
];

const sparklines = [
  { label: "Jobs This Month", value: "22", data: sparkData1, color: "hsl(var(--primary))" },
  { label: "Active Crew", value: "18", data: sparkData2, color: "hsl(var(--status-confirmed))" },
  { label: "Vehicles Out", value: "6", data: sparkData3, color: "hsl(var(--status-prepping))" },
];

export function ChartsDemo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-semibold">Charts & Visualizations</h3>
        <p className="text-xs text-muted-foreground">Recharts with themed design tokens</p>
      </div>

      {/* KPI Sparklines */}
      <div className="grid grid-cols-3 gap-3">
        {sparklines.map((spark, i) => (
          <motion.div
            key={spark.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-4"
          >
            <span className="text-xs text-muted-foreground">{spark.label}</span>
            <div className="flex items-end justify-between mt-1">
              <span className="text-xl font-bold">{spark.value}</span>
              <div className="w-20 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={spark.data}>
                    <Line
                      type="monotone"
                      dataKey="v"
                      stroke={spark.color}
                      strokeWidth={2}
                      dot={false}
                      isAnimationActive={true}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4">
        {/* Bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="col-span-3 rounded-xl border border-border bg-card p-4"
        >
          <h4 className="text-sm font-semibold mb-1">Monthly Revenue</h4>
          <p className="text-xs text-muted-foreground mb-4">Jobs completed & revenue earned</p>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <RechartsTooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="jobs" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={1000} animationEasing="ease-out" />
                <Bar dataKey="revenue" fill="hsl(var(--status-confirmed))" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={1000} animationBegin={300} animationEasing="ease-out" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Donut chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="col-span-2 rounded-xl border border-border bg-card p-4"
        >
          <h4 className="text-sm font-semibold mb-1">Crew Utilization</h4>
          <p className="text-xs text-muted-foreground mb-2">Hours booked vs available</p>
          <div className="h-44 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                  isAnimationActive={true}
                  animationDuration={1200}
                  animationBegin={200}
                  animationEasing="ease-out"
                >
                  {donutData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-lg font-bold">68%</span>
              <span className="text-[10px] text-muted-foreground">Utilized</span>
            </div>
          </div>
          {/* Legend */}
          <div className="flex justify-center gap-4 mt-1">
            {donutData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-[10px] text-muted-foreground">{d.name} {d.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
