"use client";

import { useState } from "react";
import { getAgeRangeStats } from "@/lib/data";
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

const COLORS = ["#0f766e", "#0e7490", "#0369a1", "#1d4ed8", "#4338ca"];

export function AgeDistributionChart() {
  const [mode, setMode] = useState<"victim" | "offender">("victim");
  const stats = getAgeRangeStats(mode);

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200 mb-1">
            การกระจายตามช่วงอายุ
          </h3>
          <p className="text-sm text-slate-400">จำนวนเคสแบ่งตามช่วงอายุ</p>
        </div>
        <div className="flex bg-slate-800/50 p-1 rounded-lg">
          <button
            onClick={() => setMode("victim")}
            className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${
              mode === "victim"
                ? "bg-slate-700 text-blue-400 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            เหยื่อ
          </button>
          <button
            onClick={() => setMode("offender")}
            className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${
              mode === "offender"
                ? "bg-slate-700 text-rose-400 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ผู้กระทำผิด
          </button>
        </div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stats}
            layout="vertical"
            margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fill: "#94a3b8", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#94a3b8", fontSize: 13 }}
              width={160}
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
            <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={24}>
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
