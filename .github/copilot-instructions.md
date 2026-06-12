# Instrucțiuni Copilot — Psiholog Mariana Tănase

## Proiect
Site de prezentare pentru cabinetul psihologic al **Marianei Tănase** din București. Site multi-page (React Router), fără backend, fără cookies, deploy pe Vercel.

## Stack Tehnic

| Layer | Tehnologie |
|-------|-----------|
| Frontend | React 19 + Tailwind CSS + Radix UI (shadcn) |
| Animații | framer-motion |
| Icoane | lucide-react |
| Programări | Calendly (link extern, fără embed) |
| Notificări | sonner (toast) |
| Build tool | CRACO (wrapper peste CRA) |
| Analytics | @vercel/analytics (cookieless) |
| SEO | react-helmet-async + JSON-LD |
| Deploy | Vercel (frontend/ ca root) |

## Structura Proiectului

```
├── frontend/
│   ├── src/
│   │   ├── App.js              ← Router + HelmetProvider + ErrorBoundary
│   │   ├── App.css             ← Doar prefers-reduced-motion
│   │   ├── pages/
│   │   │   ├── HomePage.jsx    ← Hero + servicii + FAQ + CTA
│   │   │   ├── AboutPage.jsx   ← Bio, acreditări, poze
│   │   │   ├── ServicesPage.jsx ← Lista + detaliu (/servicii/:slug)
│   │   │   ├── LearningPage.jsx ← Resurse + articol (/resurse/:id)
│   │   │   ├── PricingPage.jsx  ← Prețuri + info practică
│   │   │   ├── BookingPage.jsx  ← Carduri cu link-uri Calendly externe
│   │   │   ├── ContactPage.jsx  ← Formular (UI only, fără endpoint)
│   │   │   └── PrivacyPage.jsx  ← Politica de confidențialitate
│   │   ├── components/
│   │   │   ├── layout/ (Navigation.jsx, Footer.jsx)
│   │   │   ├── SEO.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── StickyMobileCTA.jsx
│   │   │   └── ui/            ← shadcn/radix components
│   │   ├── data/
│   │   │   ├── constants.js   ← Imagini, contact, Calendly URLs
│   │   │   ├── services.js    ← 4 servicii cu detalii complete
│   │   │   ├── prices.js      ← Prețuri
│   │   │   └── learning-materials.js ← 10 articole (inline)
│   │   └── lib/utils.js
│   ├── public/
│   │   ├── index.html         ← JSON-LD, OG tags, meta SEO
│   │   ├── favicon.svg, favicon-32x32.png, favicon-192x192.png
│   │   ├── sitemap.xml
│   │   ├── robots.txt
│   │   └── google8b2ca18c2669200d.html (Search Console)
│   ├── vercel.json            ← SPA rewrites
│   ├── tailwind.config.js
│   └── craco.config.js
├── .github/copilot-instructions.md  ← ACEST FIȘIER
└── .copilot/                  ← Context local (gitignored)
```

## Design & Branding

- **Paletă**: Olive (#5F6F52), Cărămiziu (#A04030), Bej (#F9F7F2)
- **Fonturi**: Playfair Display (headings), Manrope (body)
- **Stil**: Calm, profesional, empatic, organic/earthy
- **Layout**: Mobile-first, carduri rounded-2xl/3xl, blur effects, glass morphism

## Comenzi

```bash
cd frontend
npm install --legacy-peer-deps   # obligatoriu (conflict react-day-picker + React 19)
npx craco start                  # dev server port 3000
npx craco build                  # production build
```

## Convenții

- Limbă site: **Română** (cu diacritice corecte: ă, â, î, ș, ț)
- Comunicare cu user-ul: în română
- Pagini în `src/pages/`, layout în `src/components/layout/`, date în `src/data/`
- Stilizare: Tailwind utility classes (nu CSS custom)
- Animații: `framer-motion`
- Routing: `react-router-dom` v7
- Testing attrs: `data-testid` pe elemente interactive
- Icoane: doar `lucide-react`
- **Nu commit/push decât la cerere explicită**

## Arhitectură

- Multi-page cu React Router (nu SPA scroll)
- Fără backend — totul static, date inline în `src/data/`
- Cookie-free (fără embed-uri terțe, fără tracking cookies)
- Calendly: link extern (new tab), NU embed/iframe
- Formular contact: UI only (simulează, fără endpoint real)
- Imagini hostate pe `customer-assets.emergentagent.com`
- SEO: meta tags per pagină + JSON-LD ProfessionalService + FAQPage

## SEO & Indexare

- Google Search Console verificat (HTML file method)
- Sitemap.xml submis și acceptat
- Keywords focus: „aviz psihologic", „permis auto", „port-armă", „angajare", „bucurești"
- Title-uri sub 60 caractere, description-uri ~155 caractere
- FAQ schema pe homepage

## 🔒 Securitate

### NU se commit niciodată:
- Credențiale, chei API, token-uri
- Date personale reale ale pacienților
- Fișiere `.env`, `.env.*`, `*.pem`, `*.key`

### Reguli:
- Nu hardcoda credențiale — variabile de mediu
- Input validation pe formulare
- HTTPS only în producție
- GDPR: site-ul nu colectează date personale (doar formular contact fără backend)
- Calendly gestionează propriile date

### La orice modificare verifică:
- [ ] Nu sunt credențiale hardcodate
- [ ] Build-ul trece (`npx craco build`)
- [ ] Textele sunt în română cu diacritice corecte
- [ ] Mobile responsive

## Status Actual

### ✅ Funcțional
- Site complet multi-page cu 8 pagini
- Design modern, responsive, accesibil
- 10 articole educaționale cu pagini individuale
- SEO complet (meta, OG, JSON-LD, sitemap, FAQ schema)
- Sticky CTA mobil, FAQ section, Privacy page
- Favicon custom (SVG + PNG)
- Vercel Analytics (cookieless)
- Google Search Console indexat

### 🔜 De făcut
- Calendly URLs separate per serviciu (acum toate duc la același link)
- Backend email pentru formularul de contact (Formspree/EmailJS)
- Testimoniale reale
- OG image custom (1200x630)
