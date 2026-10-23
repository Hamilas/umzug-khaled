# TODO – noch offene Punkte

Alles hier Genannte ist auf der Seite als sichtbarer `[PLATZHALTER]` markiert oder fehlt noch.

## Vom Inhaber benötigt

- [ ] **Vollständiger Name des Inhabers** – Impressum (`owner` in `src/data/site.ts`)
- [ ] **USt-IdNr.** oder Hinweis auf Kleinunternehmerregelung (§ 19 UStG) – Impressum (`vatNote`)
- [ ] **Kundenbewertungen prüfen** – Wortlaut in `src/components/Kundenstimmen.astro` mit den Originalfotos abgleichen (wurden per ChatGPT abgetippt) und Einverständnis der Kunden sicherstellen
- [ ] **Link zum Google-Unternehmensprofil** (Bewertungen) – `googleReviewsUrl`; danach erscheint der Button automatisch
- [ ] **Logodatei** (SVG bevorzugt) – derzeit Text-Logo in `src/components/Logo.astro`, Favicon ist ein Platzhalter-„D“

## Technik

- [ ] Optional: Vorher/Nachher-Fotos für **Umzug** und **Entsorgung** – dann können die Tabs aus dem Design ergänzt werden (aktuell nur „Entrümpelung“)
- [ ] Nach Livegang: Seite in der Google Search Console anmelden und `sitemap.xml` einreichen

## Rechtliches (bitte prüfen lassen)

- [ ] **Datenschutzerklärung** – wurde auf Wunsch entfernt. Für gewerbliche Websites in Deutschland ist sie in der Regel Pflicht (DSGVO Art. 13, z. B. wegen Server-Logs). Vor Livegang klären.
- [ ] **Streitbeilegung** im Impressum prüfen
