"use client";

import { getRegionStats } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#475569", "#64748b"];

export function RegionalChart() {
  const stats = getRegionStats();

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/5">
      <h3 className="text-base font-bold text-slate-200 mb-1">
        เปรียบเทียบตามภูมิภาค
      </h3>
      <p className="text-sm text-slate-400 mb-4">จำนวนเคสแบ่งตามภูมิภาค</p>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stats}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#94a3b8", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.3)",
              }}
              itemStyle={{ color: "#f8fafc" }}
              labelStyle={{ color: "#f8fafc", fontWeight: "bold", marginBottom: "4px" }}
              cursor={{ fill: "#334155" }}
              formatter={(value, _name, item) => [
                `${value} เคส (${item?.payload?.pct ?? 0}%)`,
                "จำนวน",
              ]}
            />
            <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={60}>
              {stats.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
