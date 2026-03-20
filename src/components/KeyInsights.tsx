"use client";

import { Lightbulb } from "lucide-react";

export function KeyInsights() {
  return (
    <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/30 backdrop-blur-sm p-6 animate-in zoom-in-95 duration-700 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Lightbulb className="w-5 h-5 text-indigo-400" />
        </div>
        <h3 className="text-lg font-bold text-indigo-100 italic tracking-wide">
          💡 Key Insights: ความเป็นจริงที่ตัวเลขไม่ได้บอกทั้งหมด
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2 group transition-all duration-300">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-indigo-500">01</span>
            <h4>พื้นที่และผู้รายงาน</h4>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            พบเหตุการณ์มากที่สุดในเขต <span className="text-indigo-200 font-semibold">กทม.</span> และได้รับแจ้งผ่าน <span className="text-indigo-200 font-semibold">สายด่วน 1300</span> เป็นหลัก ซึ่งสะท้อนถึงการเข้าถึงระบบความช่วยเหลือในเมืองใหญ่
          </p>
        </div>

        <div className="space-y-2 group transition-all duration-300">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-indigo-500">02</span>
            <h4>กลุ่มเสี่ยงสำคัญ</h4>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            เหยื่อกว่า <span className="text-white font-bold underline decoration-rose-500/50">80% เป็นเพศหญิง</span> โดยกลุ่มอายุที่ได้รับผลกระทบสูงสุดคือ วัยผู้ใหญ่ตอนต้น (19 - 35 ปี) ซึ่งเป็นวัยที่กำลังสร้างครอบครัว
          </p>
        </div>

        <div className="space-y-2 group transition-all duration-300">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-indigo-500">03</span>
            <h4>ตัวจุดระเบิด (Triggers)</h4>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            <span className="text-rose-400 font-bold">ยาเสพติด</span> และ <span className="text-amber-400 font-bold">แอลกอฮอล์</span> คือปัจจัยหลักครองสัดส่วนเกือบครึ่งหนึ่ง นี่คือ "สัญญาณเตือน" ที่คนรอบข้างต้องสังเกตก่อนเกิดเหตุ
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-indigo-900/40">
        <div className="flex items-start gap-2 text-xs text-indigo-300/60 bg-indigo-500/5 p-3 rounded-lg border border-indigo-500/10">
          <span className="text-rose-500 font-bold shrink-0">🚩</span>
          <p>
            สถิตินี้เป็นเพียง <span className="text-rose-400 font-bold italic underline decoration-rose-500/30">ยอดภูเขาน้ำแข็ง (The Dark Figure of Crime)</span> เนื่องจากสังคมไทยยังมีความเชื่อดั้งเดิมที่ว่า "เรื่องในครอบครัวคนนอกไม่ควรยุ่ง" ทำให้เหตุการณ์จริงอาจสูงกว่าที่รายงานในแดชบอร์ดนี้หลายเท่า
          </p>
        </div>
      </div>
    </div>
  );
}
