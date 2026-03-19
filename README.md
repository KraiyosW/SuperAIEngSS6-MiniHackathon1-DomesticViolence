# Domestic Violence Analytics Dashboard (THackle)

A modern, responsive web application for exploring and analyzing domestic violence incidents in Thailand. Built as part of the **Super AI Engineer Season 6 (Mini-Hackathon 1)**.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **GIS / Mapping**: [react-simple-maps](https://www.react-simple-maps.io/) (with topojson-client)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📊 Dashboard Features

- **KPI Summary**: Quick overview of total incidents, key demographics, and main contributing factors.
- **Geospatial Heatmap (GIS)**: Interactive map of Thailand displaying case density by province with tooltips highlighting top factors.
- **Factors Chart**: Ranking of primary catalysts for domestic violence (e.g., Drugs, Alcohol, Rage).
- **Demographics**: Breakdown of victims and offenders by age range and gender.
- **Relationships**: Insights into the dynamics between the offender and the victim (e.g., Husband, Child).
- **Reporting Sources**: Data on where the incidents are typically reported (e.g., Hotline 1300, hospitals, police stations).
- **Executive Summary**: A deep-dive narrative analysis providing actionable policy recommendations from the data.

## 📥 Data Sources

The dashboard processes three main JSON datasets located in `src/databases/`:
- `incidents.json`
- `offenders.json`
- `victims.json`
*(Note: Data is statically imported for the purpose of this hackathon demonstration and statically typed in `src/lib/data.ts`)*.

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```
2. **Run the development server**:
   ```bash
   pnpm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 👨‍💻 Credits

**Super AI Engineer season 6**
- **Participant ID**: `603081_Kraiyos Wanna`
- **Event**: Mini-Hackathon 1 Theme: Data ชุดข้อมูลเหตุความรุนแรงในครอบครัว
- **Organization**: AIAT (สมาคมปัญญาประดิษฐ์แห่งประเทศไทย)
