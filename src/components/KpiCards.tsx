import { data, getProvinceStats, getFactorStats, getGenderStats } from "@/lib/data";
import { Activity, MapPin, TrendingUp, Users } from "lucide-react";

export function KpiCards() {
  const total = data.length;
  const topProvince = getProvinceStats()[0];
  const topFactor = getFactorStats()[0];
  const genderStats = getGenderStats();
  const maleCount = genderStats.find(g => g.name === "ชาย")?.count || 0;
  const femaleCount = genderStats.find(g => g.name === "หญิง")?.count || 0;
  const totalGender = maleCount + femaleCount || 1;

  const cards = [
    {
      title: "จำนวนเคสทั้งหมด",
      value: total.toLocaleString(),
      subtitle: "เคสความรุนแรงในครอบครัว",
      icon: Activity,
      color: "from-blue-500 to-blue-700",
      iconBg: "bg-blue-500/20",
    },
    {
      title: "จังหวัดที่พบมากสุด",
      value: topProvince.name,
      subtitle: `${topProvince.count} เคส`,
      icon: MapPin,
      color: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-500/20",
    },
    {
      title: "ปัจจัยอันดับ 1",
      value: topFactor.name,
      subtitle: `${topFactor.count} เคส (${topFactor.pct}%)`,
      icon: TrendingUp,
      color: "from-rose-500 to-pink-600",
      iconBg: "bg-rose-500/20",
    },
    {
      title: "สัดส่วนเพศ",
      value: `${maleCount} : ${femaleCount}`,
      subtitle: `ชาย ${Math.round((maleCount / totalGender) * 100)}% / หญิง ${Math.round((femaleCount / totalGender) * 100)}%`,
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 group"
        >
          {/* Gradient accent line */}
          <div
            className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.color} opacity-60 group-hover:opacity-100 transition-opacity`}
          />
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                {card.title}
              </p>
              <p className="text-2xl font-bold text-slate-900">{card.value}</p>
              <p className="text-sm text-slate-600">{card.subtitle}</p>
            </div>
            <div
              className={`${card.iconBg} rounded-lg p-2.5 transition-transform group-hover:scale-110`}
            >
              <card.icon className="h-5 w-5 text-slate-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
