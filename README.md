# DAYFA Transporter – Website

Statische Website für DAYFA Transporter (Bonn), gebaut mit [Astro](https://astro.build) und reinem CSS.

## Voraussetzungen

- Node.js 18.20+ oder 20.3+ (getestet mit 20.14)

## Entwickeln

```bash
npm install
npm run dev
```

Die Seite läuft dann unter http://localhost:4321.

## Bauen

```bash
npm run build
npm run preview
```

Das fertige Ergebnis liegt in `dist/` – reine HTML/CSS/Bild-Dateien, die auf jedem Webspace laufen.

## Deployment

- **Netlify / Cloudflare Pages / Vercel:** Repository verbinden, Build-Befehl `npm run build`, Ausgabeordner `dist`.
- **Klassischer Webspace (z. B. IONOS, Strato):** `npm run build` ausführen und den Inhalt von `dist/` per FTP hochladen.

Vor dem ersten Livegang die Punkte in [TODO.md](TODO.md) erledigen, vor allem Domain, Impressum, Datenschutz.

## Struktur

```
assets/photos/        Originalfotos (werden beim Build als AVIF/WebP/JPG optimiert)
design/               Freigegebenes Design (Referenz)
public/               Dateien, die unverändert ausgeliefert werden (favicon)
src/data/site.ts      Firmendaten an einer Stelle (Telefon, Adresse, Platzhalter)
src/styles/global.css Farben, Schrift, Buttons
src/components/       Abschnitte der Startseite, Header, Footer
src/layouts/          Grundgerüst (SEO/OG-Tags) und Layout für Rechtsseiten
src/pages/            Startseite, Impressum, Datenschutz, sitemap.xml, robots.txt
```

## Inhalte ändern

- Kontaktdaten, Öffnungszeiten, Inhabername, Google-Link: `src/data/site.ts`
- Texte der Abschnitte: jeweilige Datei in `src/components/`
- Domain: `src/data/site.ts` **und** `astro.config.mjs`
