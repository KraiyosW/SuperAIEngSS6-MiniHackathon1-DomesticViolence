"use client";

import { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import {
  getProvinceCountMap,
  provinceEngToThai,
  getProvinceFactorBreakdown,
} from "@/lib/data";

const GEO_URL = "/thailand-provinces.json";

function getColor(count: number, maxCount: number): string {
  if (count === 0) return "#1e293b"; // slate-800
  const intensity = Math.min(count / maxCount, 1);
  // Red gradient for dark mode: low intensity = dark red, high = bright red-pink
  if (intensity < 0.1) return "#4c0519"; // rose-950
  if (intensity < 0.3) return "#881337"; // rose-900
  if (intensity < 0.5) return "#be123c"; // rose-700
  if (intensity < 0.75) return "#e11d48"; // rose-600
  return "#fb7185"; // rose-400
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
  const [position, setPosition] = useState({
    coordinates: [101, 13.5] as [number, number],
    zoom: 1,
  });
  const provinceCounts = useMemo(() => getProvinceCountMap(), []);
  const maxCount = useMemo(
    () => Math.max(...Object.values(provinceCounts), 1),
    [provinceCounts],
  );

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  }

  function handleMoveEnd(position: { coordinates: [number, number]; zoom: number }) {
    setPosition(position);
  }

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 relative group overflow-hidden">
      <h3 className="text-base font-bold text-slate-200 mb-1">
        🗺️ แผนที่ความรุนแรงในครอบครัว — ระดับจังหวัด
      </h3>
      <p className="text-sm text-slate-400 mb-3">
        Choropleth Heatmap แสดงจำนวนเคสในแต่ละจังหวัด
        (เลื่อนเมาส์เพื่อดูรายละเอียด)
      </p>

      {/* Legend */}
      <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 font-medium">
        <span>น้อย</span>
        <div className="flex h-3 rounded overflow-hidden border border-slate-700">
          {[
            "#1e293b",
            "#4c0519",
            "#881337",
            "#be123c",
            "#e11d48",
            "#fb7185",
          ].map((c) => (
            <div key={c} className="w-6 h-full" style={{ background: c }} />
          ))}
        </div>
        <span>มาก</span>
      </div>

      <div className="h-[500px] w-full relative">
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleZoomIn}
            className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-slate-200 text-lg shadow-sm"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-slate-200 text-lg shadow-sm"
          >
            −
          </button>
        </div>

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 2200,
            center: [101, 13.5],
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            // @ts-expect-error react-simple-maps types are missing onMoveEnd
            onMoveEnd={handleMoveEnd}
          >
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
                      stroke="#334155"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          outline: "none",
                          fill: "#f43f5e",
                          stroke: "#94a3b8",
                          strokeWidth: 1,
                          cursor: "pointer",
                        },
                        pressed: { outline: "none" },
                      }}
                      onMouseEnter={(evt) => {
                        const nameThai = provinceEngToThai[name] || name;
                        const breakdown = getProvinceFactorBreakdown(nameThai);
                        const topFactor =
                          breakdown.length > 0 && breakdown[0].count > 0
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
            className="fixed z-[100] pointer-events-none px-3 py-2 rounded-lg bg-slate-800/95 border border-slate-700 shadow-xl text-xs text-slate-200 min-w-[160px] backdrop-blur-md"
            style={{
              left: tooltip.x + 12,
              top: tooltip.y - 60,
            }}
          >
            <p className="font-bold text-sm text-slate-100">
              {tooltip.nameThai}
            </p>
            <p className="text-slate-400 text-[10px] mb-1">{tooltip.name}</p>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">จำนวนเคส</span>
              <span className="font-semibold text-blue-400">
                {tooltip.count}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">ปัจจัยหลัก</span>
              <span className="font-semibold text-amber-400">
                {tooltip.topFactor}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
