import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiCards } from "@/components/KpiCards";
import { KeyInsights } from "@/components/KeyInsights";
import { DashboardCharts } from "@/components/DashboardCharts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <DashboardHeader />
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* KPI Summary */}
        <KpiCards />

        {/* Key Insights */}
        <KeyInsights />

        {/* Charts Section (Client Component) */}
        <DashboardCharts />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-4 text-center text-slate-500">
        <p className="text-[11px]">
          ระบบวิเคราะห์ข้อมูลความรุนแรงในครอบครัว — Mini Hackathon 2026
        </p>
      </footer>
    </div>
  );
}
