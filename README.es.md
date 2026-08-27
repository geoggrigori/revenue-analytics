<!-- ══════════════════════════ PORTADA ══════════════════════════ -->
<div align="center">
  <img src="docs/title-banner.svg" width="100%" alt="Revenue Analytics"/>
</div>

<br/>

<!-- ══════════════════════ IDIOMAS / LANGUAGES ══════════════════════ -->
<div align="center">
<a href="README.md"><img src="https://img.shields.io/badge/Português-555555?style=for-the-badge" alt="Português"/></a>
<a href="README.en.md"><img src="https://img.shields.io/badge/English-555555?style=for-the-badge" alt="English"/></a>
<a href="README.es.md"><img src="https://img.shields.io/badge/Español-1987F0?style=for-the-badge" alt="Español"/></a>
</div>

<br/>

<div align="center">
<img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="nextjs"/>
<img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="react"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="ts"/>
<img src="https://img.shields.io/badge/Zero_Chart_Libs-1987F0?style=flat-square" alt="zero libs"/>
<img src="https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square" alt="license"/>
</div>

<div align="center">
<a href="#acerca-de"><img src="https://img.shields.io/badge/▸_ACERCA_DE-1987F0?style=for-the-badge" alt="acerca"/></a>
<a href="#funcionalidades"><img src="https://img.shields.io/badge/▸_FUNCIONALIDADES-000000?style=for-the-badge" alt="func"/></a>
<a href="#estructura"><img src="https://img.shields.io/badge/▸_ESTRUCTURA-1987F0?style=for-the-badge" alt="estructura"/></a>
<a href="#uso"><img src="https://img.shields.io/badge/▸_USO-000000?style=for-the-badge" alt="uso"/></a>
</div>

<br/>

> 💡 **Cero dependencia de charting.** Cada gráfico es SVG/CSS puro — bundle pequeño, renderizado nítido.

<div align="center">
  <img src="docs/screenshot.png" width="100%" alt="Revenue Analytics — dashboard de ventas"/>
</div>

## Acerca de

**Revenue Analytics** es un dashboard limpio de analytics de ventas — KPIs, tendencias de ingresos y desglose por canal — construido con Next.js 16, React 19, TypeScript y Tailwind CSS. Los gráficos están hechos a mano en SVG/CSS puro (sin librería de charts), manteniendo el bundle pequeño y el renderizado nítido.

## Funcionalidades

- **Tarjetas de KPI** — ingreso total, pedidos, ticket promedio, crecimiento MoM.
- **Gráfico de barras** de ingreso mensual y **gráfico de línea** de tendencia de pedidos (SVG).
- **Desglose de ingresos por canal** y tabla de **productos más vendidos**.
- **API propia** en `/api/summary` (route handler) — reemplázala por una fuente de datos real sin tocar la UI.

## Estructura

```
src/
  app/
    page.tsx              # dashboard (server component)
    api/summary/route.ts  # endpoint de datos
  components/             # Kpi, RevenueBars, TrendLine, ChannelSplit
  lib/                    # types, datos de demo, helpers de formato
```

## Uso

```bash
npm install
npm run dev      # http://localhost:3000
```

## Licencia

[MIT](LICENSE).

<div align="center">
  <img src="https://file.loading.io/color/feature/thumb/Blues-8.png?" width="100%" height="10px" alt="divider"/>
</div>

<p align="center"><sub>Desarrollado por <strong><a href="https://github.com/geoggrigori">Grigori</a></strong> · 2026</sub></p>
