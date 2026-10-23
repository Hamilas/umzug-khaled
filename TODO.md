# TODO – noch offene Punkte

Alles hier Genannte ist auf der Seite als sichtbarer `[PLATZHALTER]` markiert oder fehlt noch.

## Vom Inhaber benötigt

- [ ] **Vollständiger Name des Inhabers** – Impressum und Datenschutz (`owner` in `src/data/site.ts`)
- [ ] **USt-IdNr.** oder Hinweis auf Kleinunternehmerregelung (§ 19 UStG) – Impressum (`vatNote`)
- [ ] **Erreichbarkeit / Öffnungszeiten** – Kontaktbereich (`openingHours`)
- [ ] **Echte Kundenbewertungen** (mit Einverständnis der Kunden) – `src/components/Kundenstimmen.astro`
- [ ] **Link zum Google-Unternehmensprofil** (Bewertungen) – `googleReviewsUrl`; danach erscheint der Button automatisch
- [ ] **Logodatei** (SVG bevorzugt) – derzeit Text-Logo in `src/components/Logo.astro`, Favicon ist ein Platzhalter-„D“
- [ ] **Domain** – `url` in `src/data/site.ts` und `site` in `astro.config.mjs` (aktuell Annahme: `www.dayfa-transporter.de`)

## Technik

- [ ] Optional: Vorher/Nachher-Fotos für **Umzug** und **Entsorgung** – dann können die Tabs aus dem Design ergänzt werden (aktuell nur „Entrümpelung“)
- [ ] Nach Livegang: Seite in der Google Search Console anmelden und `sitemap.xml` einreichen

## Rechtliches (bitte prüfen lassen)

- [ ] **Datenschutzerklärung** ausfüllen – `src/pages/datenschutz.astro` enthält nur die Abschnittsstruktur mit Platzhaltern (Hoster, E-Mail, WhatsApp, Aufsichtsbehörde, Stand)
- [ ] **Streitbeilegung** im Impressum prüfen
