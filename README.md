# Revenue Analytics

**Live demo → https://revenue-analytics-jade.vercel.app**

A clean **sales analytics dashboard** — KPIs, revenue trends and channel
breakdown — built with **Next.js 16, React 19, TypeScript and Tailwind CSS**.

Charts are hand-built with pure SVG/CSS (no charting library), keeping the
bundle small and the rendering crisp.

## Features

- **KPI cards** — total revenue, orders, average order value, MoM growth.
- **Monthly revenue** bar chart and an **orders trend** line chart (SVG).
- **Revenue by channel** breakdown and a **top products** table.
- Built-in API at `/api/summary` (route handler) — swap in a real data source
  without touching the UI.

## Tech stack

| Concern   | Choice                    |
| --------- | ------------------------- |
| Framework | Next.js 16 (App Router)   |
| UI        | React 19, Tailwind CSS    |
| Language  | TypeScript                |
| Charts    | Pure SVG / CSS (no deps)  |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Project structure

```
src/
  app/
    page.tsx              # dashboard (server component)
    api/summary/route.ts  # data endpoint
  components/             # Kpi, RevenueBars, TrendLine, ChannelSplit
  lib/                    # types, demo data, formatting helpers
```

## License

MIT
