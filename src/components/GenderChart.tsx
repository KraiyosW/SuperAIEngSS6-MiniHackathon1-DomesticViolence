"use client";

import { getGenderStats } from "@/lib/data";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS: Record<string, string> = {
  ชาย: "#4f46e5",
  หญิง: "#e11d48",
  ไม่ระบุเพศ: "#64748b",
};

export function GenderChart() {
  const stats = getGenderStats();
  
  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/5">
      <h3 className="text-base font-bold text-slate-200 mb-1">
        สัดส่วนของเหยื่อแยกตามเพศ
      </h3>
      <p className="text-sm text-slate-400 mb-4">สัดส่วนผู้เสียหายแบ่งตามเพศ</p>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={stats}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              strokeWidth={0}
            >
              {stats.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[entry.name] || "#6b7280"}
                />
              ))}
            </Pie>
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
              formatter={(value, _name, item) => [
                `${value} เคส (${item?.payload?.pct ?? 0}%)`,
                "จำนวน",
              ]}
            />
            <Legend
              iconType="square"
              iconSize={10}
              wrapperStyle={{ fontSize: "14px", color: "#94a3b8" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
