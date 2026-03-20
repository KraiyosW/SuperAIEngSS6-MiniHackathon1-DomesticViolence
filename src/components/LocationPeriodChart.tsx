"use client";

import { useMemo } from "react";
import { getLocationPeriodStats } from "@/lib/data";

export function LocationPeriodChart() {
  const { data, locales } = getLocationPeriodStats();

  const { maxCount, heatmapData, sortedLocales } = useMemo(() => {
    let max = 0;
    const computedData: { period: string; values: Record<string, number> }[] =
      [];
    const localeTotals: Record<string, number> = {};

    data.forEach((d) => {
      const values: Record<string, number> = {};
      locales.forEach((loc) => {
        const val = Number(d[loc]) || 0;
        if (val > max) max = val;
        values[loc] = val;
        localeTotals[loc] = (localeTotals[loc] || 0) + val;
      });
      computedData.push({ period: String(d.period), values });
    });

    // Sort locales by total count descending so the most frequent are at the top
    const sorted = [...locales].sort(
      (a, b) => (localeTotals[b] || 0) - (localeTotals[a] || 0),
    );

    return { maxCount: max, heatmapData: computedData, sortedLocales: sorted };
  }, [data, locales]);

  // Color functions based on intensity (using rose-600 RGB: 225, 29, 72 or indigo: 79, 70, 229)
  // Let's use an orange/red heat scale: bg-orange-500 is 249, 115, 22 -> rose-600
  const getBackgroundColor = (value: number) => {
    if (value === 0) return "rgba(30, 41, 59, 0.5)"; // faint slate-800 for 0
    // To make it punchy, we scale intensity heavily
    const intensity = Math.max(0.15, value / maxCount);
    return `rgba(225, 29, 72, ${intensity})`; // Rose 600
  };

  const getTextColor = (value: number) => {
    const intensity = value / maxCount;
    return intensity > 0.4 ? "#ffffff" : "#cbd5e1"; // slate-300
  };

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-base font-bold text-slate-200 mb-1 flex items-center gap-2">
          Heatmap: สถานที่เกิดเหตุแยกตามช่วงเวลา
        </h3>
        <p className="text-sm text-slate-400">
          ความหนาแน่นของการเกิดความรุนแรงในแต่ละช่วงเวลา
        </p>
      </div>

      <div className="flex-1 w-full overflow-x-auto overflow-y-visible pb-2 pt-1">
        <div className="min-w-[400px] flex flex-col h-full">
          {/* Header Row (Periods) */}
          <div className="flex mb-2 items-end">
            <div className="w-[120px] shrink-0"></div>
            <div className="flex-1 flex gap-1">
              {heatmapData.map((col) => (
                <div
                  key={col.period}
                  className="flex-1 text-center text-[11px] font-semibold text-slate-400 px-1 leading-tight"
                >
                  {col.period.replace(" – ", "-")}
                </div>
              ))}
            </div>
          </div>

          {/* Data Rows (Locales) */}
          <div className="flex flex-col flex-1 gap-1">
            {sortedLocales.map((locale) => (
              <div key={locale} className="flex flex-1 min-h-[36px]">
                {/* Y-axis Label */}
                <div className="w-[120px] shrink-0 flex items-center text-xs text-slate-300 font-medium pr-3 justify-end text-right leading-tight">
                  <span className="line-clamp-2">{locale}</span>
                </div>

                {/* Heatmap Cells */}
                <div className="flex-1 flex gap-1">
                  {heatmapData.map((col) => {
                    const val = col.values[locale];
                    return (
                      <div
                        key={`${locale}-${col.period}`}
                        className="flex-1 rounded flex items-center justify-center text-sm font-semibold transition-all hover:ring-2 hover:ring-indigo-400 relative group cursor-pointer"
                        style={{
                          backgroundColor: getBackgroundColor(val),
                          color: getTextColor(val),
                        }}
                      >
                        {val > 0 ? val : ""}

                        {/* Tooltip */}
                        <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-md whitespace-nowrap z-50 pointer-events-none transition-opacity shadow-lg">
                          <span className="font-bold text-rose-300">{val}</span>{" "}
                          เคส
                          <div className="text-[10px] text-slate-300 mt-0.5">
                            {locale} | {col.period}
                          </div>
                          {/* Triangle indicator */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-5 flex items-center justify-end gap-2 text-[11px] text-slate-400">
            <span>น้อย</span>
            <div className="flex h-3 border border-slate-700 rounded overflow-hidden">
              <div
                className="w-6"
                style={{ backgroundColor: getBackgroundColor(0) }}
              ></div>
              <div
                className="w-6"
                style={{ backgroundColor: getBackgroundColor(maxCount * 0.25) }}
              ></div>
              <div
                className="w-6"
                style={{ backgroundColor: getBackgroundColor(maxCount * 0.5) }}
              ></div>
              <div
                className="w-6"
                style={{ backgroundColor: getBackgroundColor(maxCount * 0.75) }}
              ></div>
              <div
                className="w-6"
                style={{ backgroundColor: getBackgroundColor(maxCount) }}
              ></div>
            </div>
            <span>มาก ({maxCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
