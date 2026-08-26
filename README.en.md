<!-- ══════════════════════════ TITLE ══════════════════════════ -->
<div align="center">
  <img src="docs/title-banner.svg" width="100%" alt="Revenue Analytics"/>
</div>

<!-- ══════════════════════ IDIOMAS / LANGUAGES ══════════════════════ -->
<div align="center">
<a href="README.md"><img src="https://img.shields.io/badge/Português-555555?style=for-the-badge" alt="Português"/></a>
<a href="README.en.md"><img src="https://img.shields.io/badge/English-1987F0?style=for-the-badge" alt="English"/></a>
<a href="README.es.md"><img src="https://img.shields.io/badge/Español-555555?style=for-the-badge" alt="Español"/></a>
</div>

<h1 align="center">Revenue Analytics</h1>
<p align="center"><em>A clean sales analytics dashboard — KPIs, revenue trends and channel breakdown</em></p>
<p align="center"><strong>Data API → hand-built SVG charts → dashboard</strong></p>

<div align="center">
<img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="nextjs"/>
<img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="react"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="ts"/>
<img src="https://img.shields.io/badge/Zero_Chart_Libs-1987F0?style=flat-square" alt="zero libs"/>
<img src="https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square" alt="license"/>
</div>

<div align="center">
<a href="#about"><img src="https://img.shields.io/badge/▸_ABOUT-1987F0?style=for-the-badge" alt="about"/></a>
<a href="#features"><img src="https://img.shields.io/badge/▸_FEATURES-000000?style=for-the-badge" alt="features"/></a>
<a href="#structure"><img src="https://img.shields.io/badge/▸_STRUCTURE-1987F0?style=for-the-badge" alt="structure"/></a>
<a href="#usage"><img src="https://img.shields.io/badge/▸_USAGE-000000?style=for-the-badge" alt="usage"/></a>
</div>

<br/>

> 💡 **Zero charting dependency.** Every chart is pure SVG/CSS — small bundle, crisp rendering.

<div align="center">
  <img src="docs/screenshot.png" width="100%" alt="Revenue Analytics — sales dashboard"/>
</div>

## About

**Revenue Analytics** is a clean sales analytics dashboard — KPIs, revenue trends and channel breakdown — built with Next.js 16, React 19, TypeScript and Tailwind CSS. Charts are hand-built with pure SVG/CSS (no charting library), keeping the bundle small and the rendering crisp.

## Features

- **KPI cards** — total revenue, orders, average order value, MoM growth.
- **Monthly revenue** bar chart and an **orders trend** line chart (SVG).
- **Revenue by channel** breakdown and a **top products** table.
- Built-in API at `/api/summary` (route handler) — swap in a real data source without touching the UI.

## Structure

```
src/
  app/
    page.tsx              # dashboard (server component)
    api/summary/route.ts  # data endpoint
  components/             # Kpi, RevenueBars, TrendLine, ChannelSplit
  lib/                    # types, demo data, formatting helpers
```

## Usage

```bash
npm install
npm run dev      # http://localhost:3000
```

## License

[MIT](LICENSE).

<div align="center">
  <img src="https://file.loading.io/color/feature/thumb/Blues-8.png?" width="100%" height="10px" alt="divider"/>
</div>

<p align="center"><sub>Built by <strong><a href="https://github.com/geoggrigori">Grigori</a></strong> · 2026</sub></p>
