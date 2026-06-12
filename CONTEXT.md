# Context Proiect — Psiholog Mariana Tanase

## Ce Este
Site de prezentare pentru cabinetul psihologic al **Marianei Tanase** din București, România. Site single-page, fără autentificare utilizatori, cu integrare Calendly pentru programări.

## Stack Tehnic

| Layer | Tehnologie |
|-------|-----------|
| Frontend | React 19 + Tailwind CSS + Radix UI (shadcn) |
| Animații | framer-motion |
| Icoane | lucide-react |
| Programări | react-calendly (widget embed) |
| Notificări | sonner (toast) |
| Build tool | CRACO (wrapper peste CRA) |
| Backend | FastAPI + Motor (async MongoDB) |
| DB | MongoDB |
| Package manager | Yarn 1.22 |

## Structura Proiectului

```
├── frontend/
│   ├── src/
│   │   ├── App.js              ← Router principal (BrowserRouter)
│   │   ├── pages/
│   │   │   ├── HomePage.jsx    ← Landing page
│   │   │   ├── AboutPage.jsx   ← Despre mine
│   │   │   ├── ServicesPage.jsx ← Lista + detaliu servicii (/servicii/:slug)
│   │   │   ├── LearningPage.jsx ← Resurse + articol complet (/resurse/:id)
│   │   │   ├── PricingPage.jsx  ← Prețuri
│   │   │   ├── BookingPage.jsx  ← Calendly embed
│   │   │   └── ContactPage.jsx  ← Formular contact
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navigation.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── ui/            ← shadcn/radix components
│   │   ├── data/
│   │   │   ├── constants.js   ← Imagini, contact, Calendly URLs
│   │   │   ├── services.js    ← Date servicii
│   │   │   ├── prices.js      ← Prețuri
│   │   │   └── learning-materials.js ← Articole complete (inline)
│   │   ├── hooks/
│   │   └── lib/utils.js
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── craco.config.js
├── backend/                   ← LEGACY (nu se mai folosește)
├── memory/
│   └── PRD.md
├── design_guidelines.json
├── SECURITY.md
└── CONTEXT.md
```

## Design & Branding

- **Paletă**: Olive (#5F6F52), Cărămiziu (#A04030), Bej (#F9F7F2)
- **Fonturi**: Playfair Display (headings), Manrope (body)
- **Stil**: Calm, profesional, empatic, organic/earthy
- **Layout**: Asymetric, mobile-first, carduri cu rounded-2xl/3xl, blur effects

## Secțiuni Site (în ordine)
1. **Navigation** — fixed, glass morphism header
2. **Hero** — portret + headline + CTA programare
3. **Despre Mine** — bio, acreditări, poze personale
4. **Servicii** — 4 categorii (Clinică, Muncii, Transporturi, Securitate)
5. **Learning** — resurse educaționale
6. **Prețuri** — 6 tipuri de servicii cu prețuri transparente
7. **Programări** — Calendly widget embed
8. **Contact** — formular + info de contact
9. **Footer** — date contact, copyright

## Comenzi Utile

```bash
# Frontend
cd frontend
npm install --legacy-peer-deps
npx craco start       # dev server pe port 3000
npx craco build       # production build
```

## Arhitectură

- **Multi-page** cu React Router (pagini separate, nu single-page scroll)
- **Fără backend** — totul static, date inline în `src/data/`
- **Learning** — articole complete stocate în JS, deschidibile pe rute individuale
- **Formularul de contact** — UI only (simulează trimiterea, fără endpoint real)

## Status & Ce Rămâne de Făcut

### ✅ Done
- Site complet multi-page funcțional cu React Router
- Design modern, curat, profesional
- Componente separate (Navigation, Footer, Pages)
- Learning section cu 6 articole complete deschidibile
- Mobile responsive
- Calendly integration cu taburi pe tip de serviciu
- Formular contact cu notificări toast
- Build verificat — compilează fără erori

### 🔜 Backlog Prioritizat
- **P1**: URL Calendly real (acum e placeholder), Google Analytics
- **P2**: Testimoniale, Blog, WhatsApp, SEO (meta tags, sitemap, Open Graph)
- **P3**: Multi-language (EN), Newsletter, Plăți online

## Convenții de Lucru

- **Pagini** în `src/pages/`, **layout** în `src/components/layout/`, **date** în `src/data/`
- Stilizare prin Tailwind utility classes (nu CSS custom)
- Animații cu `framer-motion` (fadeInUp, scaleIn)
- Routing cu `react-router-dom` v7 (Link, Routes, useParams)
- Testare: `data-testid` pe elemente interactive
- Iconițe: doar din `lucide-react`
- Notificări: `sonner` toast

## Note Importante
- **Nu mai avem backend** — totul e frontend static
- Imaginile sunt hostate pe `customer-assets.emergentagent.com`
- Formularul de contact simulează trimiterea — de integrat cu un serviciu extern (ex: Formspree, EmailJS)
- URL-urile Calendly sunt placeholder — clientul trebuie să furnizeze link-urile reale
- Build tool: CRACO (wrapper CRA) — necesită `--legacy-peer-deps` la install
- Node 22 compatibil (necesită `ajv@8` + `ajv-keywords@5` instalate explicit)
