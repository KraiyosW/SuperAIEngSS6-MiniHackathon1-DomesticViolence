"use client";

import { getProvinceStats } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function ProvinceChart() {
  const stats = getProvinceStats().slice(0, 15);

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-500 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/5">
      <h3 className="text-base font-bold text-slate-200 mb-1">
        Top 15 จังหวัดที่พบเหตุการณ์มากสุด
      </h3>
      <p className="text-sm text-slate-400 mb-4">แสดงจำนวนเคสในแต่ละจังหวัด</p>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stats}
            layout="vertical"
            margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
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
              width={130}
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
            <Bar
              dataKey="count"
              fill="#4f46e5"
              radius={[0, 6, 6, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
