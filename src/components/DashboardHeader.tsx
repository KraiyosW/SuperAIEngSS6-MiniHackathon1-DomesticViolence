import { Shield } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-2">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 tracking-tight">
                ระบบวิเคราะห์ข้อมูลความรุนแรงในครอบครัว
              </h1>
              <p className="text-[11px] text-slate-500 -mt-0.5">
                Domestic Violence Analytics Dashboard
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ข้อมูลปัจจุบัน</span>
          </div>
        </div>
      </div>
    </header>
  );
}
