"use client";

import { getSourceStats } from "@/lib/data";
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

const COLORS = ["#10b981", "#059669", "#047857", "#065f46", "#8b5cf6", "#7c3aed", "#6d28d9"];

export function SourceChart() {
  const stats = getSourceStats();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-slate-900 mb-1">
        แหล่งที่ได้รับแจ้งเหตุ
      </h3>
      <p className="text-sm text-slate-600 mb-4">ช่องทางการรับแจ้งเหตุมากที่สุด</p>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stats}
            layout="vertical"
            margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f1f5f9"
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fill: "#475569", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#475569", fontSize: 13 }}
              width={160}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                color: "#0f172a",
                fontSize: "12px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              formatter={(value: any) => [`${value} เคส`, "จำนวน"]}
            />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={22}>
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
