"use client";

import { Lightbulb } from "lucide-react";

export function KeyInsights() {
  return (
    <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 shadow-sm mb-4">
      <div className="flex items-start gap-3">
        <div className="p-2bg-indigo-100 text-indigo-600 rounded-lg shrink-0 mt-0.5">
          <Lightbulb className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-base font-bold text-indigo-900 mb-2">💡 Key Insights (ข้อค้นพบสำคัญ)</h3>
          <ul className="space-y-1.5 text-sm text-indigo-800">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span><strong>พื้นที่และผู้รายงาน:</strong> พบเหตุการณ์มากที่สุดในเขต กทม. และได้รับแจ้งผ่าน สายด่วน 1300 เป็นหลัก</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span><strong>กลุ่มเสี่ยง:</strong> เหยื่อกว่า 80% เป็นเพศหญิง โดยกลุ่มอายุที่ได้รับผลกระทบสูงสุดคือ วัยผู้ใหญ่ตอนต้น (19 - 35 ปี)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">•</span>
              <span><strong>ปัจจัยกระตุ้น:</strong> ยาเสพติด (433 เคส) และ แอลกอฮอล์ (377 เคส) มีบทบาทนำไปสู่ความรุนแรงในครอบครัวมากที่สุด ครองสัดส่วนเกือบครึ่งหนึ่งของปัจจัยทั้งหมด</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
