"use client";

import { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { getProvinceCountMap, provinceEngToThai, getProvinceFactorBreakdown } from "@/lib/data";

const GEO_URL = "/thailand-provinces.json";

function getColor(count: number, maxCount: number): string {
  if (count === 0) return "#f8fafc"; // Light mode empty state
  const intensity = Math.min(count / maxCount, 1);
  // Red gradient for light mode: low intensity = light red, high = dark red
  if (intensity < 0.1) return "#fee2e2"; // red-100
  if (intensity < 0.3) return "#fca5a5"; // red-300
  if (intensity < 0.5) return "#ef4444"; // red-500
  if (intensity < 0.75) return "#b91c1c"; // red-700
  return "#7f1d1d"; // red-900
}

interface TooltipData {
  name: string;
  nameThai: string;
  count: number;
  topFactor: string;
  x: number;
  y: number;
}

export function ThailandMap() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const provinceCounts = useMemo(() => getProvinceCountMap(), []);
  const maxCount = useMemo(
    () => Math.max(...Object.values(provinceCounts), 1),
    [provinceCounts]
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm relative">
      <h3 className="text-base font-bold text-slate-900 mb-1">
        🗺️ แผนที่ความรุนแรงในครอบครัว — ระดับจังหวัด
      </h3>
      <p className="text-sm text-slate-600 mb-3">
        Choropleth Heatmap แสดงจำนวนเคสในแต่ละจังหวัด (เลื่อนเมาส์เพื่อดูรายละเอียด)
      </p>

      {/* Legend */}
      <div className="flex items-center gap-2 mb-3 text-xs text-slate-600 font-medium">
        <span>น้อย</span>
        <div className="flex h-3 rounded overflow-hidden border border-slate-200">
          {["#f8fafc", "#fee2e2", "#fca5a5", "#ef4444", "#b91c1c", "#7f1d1d"].map((c) => (
            <div key={c} className="w-6 h-full" style={{ background: c }} />
          ))}
        </div>
        <span>มาก</span>
      </div>

      <div className="h-[500px] w-full relative">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 2200,
            center: [101, 13.5],
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = geo.properties.name;
                  const count = provinceCounts[name] || 0;
                  const color = getColor(count, maxCount);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={color}
                      stroke="#cbd5e1"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          outline: "none",
                          fill: "#f97316",
                          stroke: "#94a3b8",
                          strokeWidth: 1,
                          cursor: "pointer",
                        },
                        pressed: { outline: "none" },
                      }}
                      onMouseEnter={(evt) => {
                        const nameThai = provinceEngToThai[name] || name;
                        const breakdown = getProvinceFactorBreakdown(nameThai);
                        const topFactor = breakdown.length > 0 && breakdown[0].count > 0
                          ? `${breakdown[0].name} (${breakdown[0].count})`
                          : "ไม่มีข้อมูล";
                        
                        setTooltip({
                          name,
                          nameThai,
                          count,
                          topFactor,
                          x: evt.clientX,
                          y: evt.clientY,
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="fixed z-[100] pointer-events-none px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-xl text-xs text-slate-800 min-w-[160px]"
            style={{
              left: tooltip.x + 12,
              top: tooltip.y - 60,
            }}
          >
            <p className="font-bold text-sm text-slate-900">{tooltip.nameThai}</p>
            <p className="text-slate-500 text-[10px] mb-1">{tooltip.name}</p>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">จำนวนเคส</span>
              <span className="font-semibold text-blue-600">{tooltip.count}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">ปัจจัยหลัก</span>
              <span className="font-semibold text-amber-600">{tooltip.topFactor}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
