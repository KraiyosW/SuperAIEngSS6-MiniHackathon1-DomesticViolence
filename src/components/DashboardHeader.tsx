import { Shield } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-2">
              <Shield className="h-5 w-5 text-rose-500" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-50 tracking-tight">
                Dashboard แสดงผลข้อมูลความรุนแรงในครอบครัว
              </h1>
              <p className="text-[11px] text-slate-400 -mt-0.5">
                Domestic Violence Analytics Dashboard
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>ข้อมูลจาก THackle</span>
          </div>
        </div>
      </div>
    </header>
  );
}
