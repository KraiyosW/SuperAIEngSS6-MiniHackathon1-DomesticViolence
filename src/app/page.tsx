import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiCards } from "@/components/KpiCards";
import { KeyInsights } from "@/components/KeyInsights";
import { DashboardCharts } from "@/components/DashboardCharts";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <DashboardHeader />
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* KPI Summary */}
        <KpiCards />

        {/* Key Insights */}
        <KeyInsights />

        {/* Charts Section (Client Component) */}
        <DashboardCharts />

        {/* Executive Summary */}
        <ExecutiveSummary />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-300 py-8 text-center text-slate-600 bg-slate-100">
        <div className="max-w-2xl mx-auto space-y-2">
          <p className="text-sm font-semibold text-slate-800">
            Super AI Engineer season 6 | 603081_Kraiyos Wanna
          </p>
          <p className="text-xs">
            Mini-Hackathon 1 Theme: Data ชุดข้อมูลเหตุความรุนแรงในครอบครัว
            <br />
            AIAT : สมาคมปัญญาประดิษฐ์แห่งประเทศไทย
            <br />
            Thackle : Big Data Institute
          </p>
        </div>
      </footer>
    </div>
  );
}
