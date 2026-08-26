<!-- ══════════════════════════ TÍTULO ══════════════════════════ -->
<div align="center">
  <img src="docs/title-banner.svg" width="100%" alt="Revenue Analytics"/>
</div>

<!-- ══════════════════════ IDIOMAS / LANGUAGES ══════════════════════ -->
<div align="center">
<a href="README.md"><img src="https://img.shields.io/badge/Português-1987F0?style=for-the-badge" alt="Português"/></a>
<a href="README.en.md"><img src="https://img.shields.io/badge/English-555555?style=for-the-badge" alt="English"/></a>
<a href="README.es.md"><img src="https://img.shields.io/badge/Español-555555?style=for-the-badge" alt="Español"/></a>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="nextjs"/>
<img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="react"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="ts"/>
<img src="https://img.shields.io/badge/Zero_Chart_Libs-1987F0?style=flat-square" alt="zero libs"/>
<img src="https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square" alt="license"/>
</div>

<div align="center">
<a href="#sobre"><img src="https://img.shields.io/badge/▸_SOBRE-1987F0?style=for-the-badge" alt="sobre"/></a>
<a href="#funcionalidades"><img src="https://img.shields.io/badge/▸_FUNCIONALIDADES-000000?style=for-the-badge" alt="func"/></a>
<a href="#estrutura"><img src="https://img.shields.io/badge/▸_ESTRUTURA-1987F0?style=for-the-badge" alt="estrutura"/></a>
<a href="#uso"><img src="https://img.shields.io/badge/▸_USO-000000?style=for-the-badge" alt="uso"/></a>
</div>

<br/>

> 💡 **Zero dependência de charting.** Todos os gráficos são SVG/CSS puro — bundle pequeno, renderização nítida.

<div align="center">
  <img src="docs/screenshot.png" width="100%" alt="Revenue Analytics — dashboard de vendas"/>
</div>

## Sobre

**Revenue Analytics** é um dashboard limpo de analytics de vendas — KPIs, tendências de receita e breakdown por canal — construído com Next.js 16, React 19, TypeScript e Tailwind CSS. Os gráficos são feitos à mão em SVG/CSS puro (sem lib de charts), mantendo o bundle pequeno e a renderização nítida.

## Funcionalidades

- **Cards de KPI** — receita total, pedidos, ticket médio, crescimento MoM.
- **Gráfico de barras** de receita mensal e **gráfico de linha** de tendência de pedidos (SVG).
- **Breakdown de receita por canal** e tabela de **produtos mais vendidos**.
- **API própria** em `/api/summary` (route handler) — troque por uma fonte de dados real sem tocar na UI.

## Estrutura

```
src/
  app/
    page.tsx              # dashboard (server component)
    api/summary/route.ts  # endpoint de dados
  components/             # Kpi, RevenueBars, TrendLine, ChannelSplit
  lib/                    # types, dados de demo, helpers de formatação
```

## Uso

```bash
npm install
npm run dev      # http://localhost:3000
```

## Licença

[MIT](LICENSE).

<div align="center">
  <img src="https://file.loading.io/color/feature/thumb/Blues-8.png?" width="100%" height="10px" alt="divider"/>
</div>

<p align="center"><sub>Desenvolvido por <strong><a href="https://github.com/geoggrigori">Grigori</a></strong> · 2026</sub></p>
