"use client";

import { useState } from "react";
import { Lightbulb, Target, Users, MapPin, AlertTriangle, ShieldAlert, Ban, Pill, Smartphone, Scale, Home as HomeIcon } from "lucide-react";

export function ExecutiveSummary() {
  const [activeTab, setActiveTab] = useState<"insights" | "policy">("insights");

  return (
    <div className="bg-white rounded-xl border border-slate-200 mt-8 text-slate-800 overflow-hidden shadow-sm">
      {/* Header Section */}
      <div className="p-6 md:p-8 border-b border-slate-200 bg-slate-50">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
          6️⃣ 🏆 Grand Finale: บทสรุปภาพรวมและข้อเสนอแนะเชิงนโยบาย
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          จากการวิเคราะห์ข้อมูลเหตุความรุนแรงในครอบครัวแบบเจาะลึก (Deep-Dive Analysis) ครอบคลุมทั้งมิติของผู้กระทำ, เหยื่อ, พื้นที่, เวลา, ปัจจัยกระตุ้น และช่องทางการแจ้งเหตุ ทีมงานสามารถสกัดข้อเท็จจริงที่สะท้อนถึงแก่นแท้ของปัญหาได้ดังนี้:
        </p>
        <blockquote className="border-l-4 border-rose-500 pl-4 py-2 italic bg-white text-slate-700 shadow-sm rounded-r-lg">
          <strong>&quot;ความรุนแรงในครอบครัว ไม่ใช่เพียงปัญหาการกระทบกระทั่งทั่วไป แต่เป็นผลลัพธ์ของโครงสร้างความเครียดในวัยทำงาน ที่ถูกจุดชนวนด้วยสารเสพติดและแอลกอฮอล์ จนนำไปสู่การระบายอารมณ์ในพื้นที่ที่ควรจะปลอดภัยที่สุดอย่าง &apos;บ้าน&apos; ในยามวิกาล... และที่เลวร้ายที่สุดคือ ระบบปัจจุบันทำได้เพียงรอให้เหยื่อเลือดตกยางออก จึงจะมองเห็นปัญหา&quot;</strong>
        </blockquote>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 px-6 md:px-8 pt-4">
        <button
          onClick={() => setActiveTab("insights")}
          className={`flex items-center gap-2 pb-4 px-4 text-sm font-bold border-b-2 transition-colors ${
            activeTab === "insights"
              ? "border-indigo-600 text-indigo-700"
              : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          ส่วนที่ 1: สรุปข้อมูลเชิงลึก (Core Insights)
        </button>
        <button
          onClick={() => setActiveTab("policy")}
          className={`flex items-center gap-2 pb-4 px-4 text-sm font-bold border-b-2 transition-colors ${
            activeTab === "policy"
              ? "border-rose-600 text-rose-700"
              : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
          }`}
        >
          <Target className="w-4 h-4" />
          ส่วนที่ 2: ข้อเสนอแนะเชิงนโยบาย (Policy)
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 md:p-8 bg-slate-100/50">
        {activeTab === "insights" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 text-sm">
              <em>⚠️ <strong>ข้อสังเกตสำคัญ (Data Limitation):</strong> สถิติ 877 เคสนี้เป็นเพียง &quot;ยอดภูเขาน้ำแข็ง&quot; ในความเป็นจริงยังมีเหยื่ออีกจำนวนมหาศาลที่ต้องเผชิญกับ &quot;ตัวเลขที่ซ่อนเร้น (The Dark Figure of Crime)&quot; เนื่องจากถูกกรอบสังคมกดทับและไม่กล้าแจ้งเหตุ</em>
            </div>

            <p className="font-semibold text-slate-700 mb-4">เพื่อความเข้าใจที่ตรงจุด เราสามารถเจาะลึกภาพใหญ่ของปัญหาออกเป็น 4 มิติหลัก:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Users className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">1. ใครเสี่ยงที่สุด?</h3>
                </div>
                <p className="text-sm font-semibold text-indigo-700 mb-3">&quot;วัยกลางคนคือจุดเดือด และคนใกล้ตัวคือผู้ทำร้าย&quot;</p>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  <li><strong>สลับขั้วตามเพศสภาพ:</strong> ปัญหาไม่ได้กระจุกตัวที่เด็กหรือผู้สูงอายุ แต่เป็น &quot;วัยทำงาน (36-59 ปี)&quot; โดย <strong>เพศชาย</strong> มีสถิติเป็นผู้ระบายอารมณ์สูงสุด (239 เคส) ในขณะที่ <strong>เพศหญิง</strong> ตกเป็นผู้รองรับอารมณ์</li>
                  <li><strong>Family Dynamics ที่บิดเบี้ยว:</strong> ผู้ก่อเหตุอันดับ 1 คือ <strong>&quot;คู่ชีวิต / สามี&quot; (168 เคส)</strong> และอันดับ 2 คือ <strong>&quot;บุตร&quot;</strong> ซึ่งสะท้อนปัญหาลูกทำร้ายพ่อแม่ตัวเอง</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><MapPin className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">2. เหตุเกิดที่ไหนและเมื่อไหร่?</h3>
                </div>
                <p className="text-sm font-semibold text-emerald-700 mb-3">สลายมายาคติ &quot;บ้านคือพื้นที่ปลอดภัย&quot;</p>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  <li><strong>ศูนย์กลางปัญหา:</strong> กรุงเทพมหานคร ครองอันดับ 1 ซึ่งสอดคล้องกับความหนาแน่นและชุมชนแออัด</li>
                  <li><strong>เวลาจุดเดือด:</strong> สถิติพุ่งสูงสุดช่วง 18:01 - 00:00 น. ซึ่งเกิดใน <strong>&quot;สถานที่ส่วนบุคคล (บ้าน)&quot;</strong> เป็นอันดับ 1 สะท้อนให้เห็นว่าเวลาที่ควรพักผ่อนพร้อมหน้า กลับกลายเป็นเวลาที่เปราะบางที่สุด</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-rose-100 text-rose-600 rounded-lg"><AlertTriangle className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">3. อะไรคือสัญญาณเตือน?</h3>
                </div>
                <p className="text-sm font-semibold text-rose-700 mb-3">&quot;สารเสพติด&quot; คือตัวจุดชนวนหายนะ</p>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  <li><strong>ตัวเร่งปฏิกิริยา:</strong> อันดับ 1 และ 2 คือ <strong>ยาเสพติด (Drug) และ สุรา (Alcohol)</strong> ซึ่งเข้าไปทำลายสติสัมปชัญญะและสารเคมีในสมอง</li>
                  <li><strong>ผลลัพธ์ที่ตามมา:</strong> นำไปสู่อันดับ 3 <strong>อารมณ์ฉุนเฉียว (Rage)</strong> และอันดับ 4 <strong>การใช้อำนาจครอบงำ (Authoritative)</strong></li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-100 text-slate-600 rounded-lg"><ShieldAlert className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">4. ใครคือผู้ส่งเสียงขอความช่วยเหลือ?</h3>
                </div>
                <p className="text-sm font-semibold text-slate-700 mb-3">&quot;ความเงียบของเหยื่อ และช่องโหว่ของระบบ&quot;</p>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                  <li><strong>เหยื่อถูกปิดปากด้วยความกลัว:</strong> สถิติชี้ชัดว่าเหยื่อส่วนใหญ่ไม่ได้เดินเข้ามาขอความช่วยเหลือด้วยตัวเอง (แจ้งเองเพียง 14.5%)</li>
                  <li><strong>รัฐทำงานเชิงรับ:</strong> ข้อมูลมักหลั่งไหลมาจาก <strong>&quot;สถานีตำรวจ และ โรงพยาบาล&quot;</strong> สะท้อนว่าเหตุการณ์ต้องรุนแรงจนบาดเจ็บสาหัส ระบบถึงจะมองเห็นเหยื่อ หรือต้องรอให้บุคคลที่สาม (พลเมืองดี) โทรแจ้งผ่านสายด่วน 1300</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "policy" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <p className="font-semibold text-slate-700 mb-4">
              จาก Insight ทางสถิติ ผนวกกับข้อเท็จจริงของช่องโหว่ในระบบสังคม ทีมงานขอเสนอ <strong>5 นโยบายเร่งด่วน</strong> เพื่อรื้อระบบและแก้ปัญหาที่รากเหง้าอย่างเด็ดขาด ดังนี้:
            </p>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-rose-500 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-rose-50 p-1.5 rounded-md text-rose-600"><Ban className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">นโยบายที่ 1: &quot;Zero Tolerance & No Mediation&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-rose-600 mb-2 pl-[42px]">(รื้อค่านิยมสังคม เลิกวาทกรรมเรื่องในบ้าน)</p>
                <p className="text-sm text-slate-600 pl-[42px]"><strong>แนวทางปฏิบัติ:</strong> ภาครัฐต้องเปลี่ยนทัศนคติของเจ้าหน้าที่ผู้บังคับใช้กฎหมายให้มองว่านี่คือ &quot;คดีอาชญากรรม&quot; และต้อง <strong>ออกกฎเหล็กห้ามเจ้าหน้าที่ไกล่เกลี่ยให้ยอมความกันเองเด็ดขาด</strong> พร้อมทั้งรณรงค์ระดับชาติเพื่อลบล้างค่านิยม &quot;เรื่องผัวเมียไม่ควรยุ่ง&quot;</p>
              </div>

              <div className="bg-white border-l-4 border-amber-500 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-50 p-1.5 rounded-md text-amber-600"><Pill className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">นโยบายที่ 2: &quot;Cut the Triggers&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-amber-600 mb-2 pl-[42px]">(ตัดวงจรยาเสพติดและคุมเข้มสุราเชิงรุก)</p>
                <p className="text-sm text-slate-600 pl-[42px]"><strong>แนวทางปฏิบัติ:</strong> รัฐต้องกวาดล้างยาเสพติดในชุมชนแออัด/พื้นที่ Hotspot อย่างจริงจัง ควบคุมการเข้าถึงแอลกอฮอล์ในกลุ่มเปราะบาง และดึงผู้เสพเข้าสู่ &quot;ระบบบำบัดทางสาธารณสุข&quot; ตั้งแต่เนิ่นๆ ก่อนที่สารเคมีในสมองจะถูกทำลายจนนำไปสู่การก่อเหตุรุนแรงในบ้าน</p>
              </div>

              <div className="bg-white border-l-4 border-indigo-500 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-indigo-50 p-1.5 rounded-md text-indigo-600"><Smartphone className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">นโยบายที่ 3: &quot;Proactive & Anonymous Rescue&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-indigo-600 mb-2 pl-[42px]">(เลิกรอให้เหยื่อโทรมา และสร้างแพลตฟอร์มแจ้งเหตุไร้รอยต่อ)</p>
                <p className="text-sm text-slate-600 pl-[42px]"><strong>แนวทางปฏิบัติ:</strong> ในเมื่อ Data ชี้ว่าเหยื่อหวาดกลัวจนไม่กล้าแจ้งเหตุเอง รัฐจะทำงานแบบ &quot;นั่งรอรับสาย&quot; ไม่ได้อีกต่อไป! ต้องยกระดับสายด่วน 1300 ให้มีแพลตฟอร์มแจ้งเหตุที่ <strong>&quot;ปกปิดตัวตนคนแจ้ง (Anonymous)&quot;</strong> เพื่อให้เพื่อนบ้านกล้าเป็นหูเป็นตา และมีระบบ <strong>&quot;Live Status Tracking&quot;</strong> ที่แสดงสถานะการเข้าช่วยเหลือแบบ Real-time เพื่อยืนยันว่าเจ้าหน้าที่มีแอคชั่นเชิงรุกทันทีที่ได้รับเบาะแส</p>
              </div>

              <div className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-50 p-1.5 rounded-md text-emerald-600"><Scale className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">นโยบายที่ 4: &quot;Absolute Protection & Justice&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-emerald-600 mb-2 pl-[42px]">(กฎหมายคุ้มครองและจัดการผู้กระทำผิดเด็ดขาด)</p>
                <p className="text-sm text-slate-600 pl-[42px]"><strong>แนวทางปฏิบัติ:</strong> หากผู้ก่อเหตุมีปัจจัยกระตุ้นจากสิ่งเสพติด รัฐต้องมีคำสั่งศาล <strong>&quot;บังคับบำบัดและปรับทัศนคติ&quot;</strong> และต้องนำกลไกทางกฎหมายมาใช้อย่างจริงจัง เช่น การทำทัณฑบน และการออก <strong>&quot;คำสั่งศาลห้ามเข้าใกล้เหยื่อ (Restraining Order)&quot;</strong> เพื่อการันตีความปลอดภัยในชีวิตของเหยื่อ</p>
              </div>

              <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-50 p-1.5 rounded-md text-blue-600"><HomeIcon className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900">นโยบายที่ 5: &quot;Emergency Safe Haven&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-blue-600 mb-2 pl-[42px]">(พื้นที่หลบภัยและการันตีชีวิตเหยื่อ)</p>
                <p className="text-sm text-slate-600 pl-[42px]"><strong>แนวทางปฏิบัติ:</strong> รัฐต้องยอมรับความจริงว่า &quot;การผลักเหยื่อกลับเข้าสู่สภาพแวดล้อมเดิม อาจหมายถึงการปล่อยให้เหยื่อเผชิญกับอันตรายถึงชีวิต&quot; จึงต้องจัดตั้ง <strong>&quot;พื้นที่หลบภัยฉุกเฉิน (Safe House)&quot;</strong> ที่เข้าถึงง่ายในระดับชุมชน โดยเฉพาะในช่วงเวลาวิกฤต <strong>(18:00 - 00:00 น.)</strong> เพื่อให้สตรี ผู้สูงอายุ หรือเด็ก มีพื้นที่ปลอดภัยทันทีที่มีการแจ้งเหตุ โดยไม่ต้องถูกบังคับให้กลับไปเสี่ยงภัยในบ้าน</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
