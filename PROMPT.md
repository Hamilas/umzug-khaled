# Paste this into Claude Code (run `claude` inside your empty repo folder)

Build the website for **DAYFA Transporter**, a moving, transport, clearance (Entrümpelung) and disposal company in Bonn, Germany.

## Read first
- `CLAUDE.md` – business facts, brand, rules
- `design/Main.dc.html` and `design/Impressum.dc.html` – the approved design. Reuse its exact section order, German copy, spacing and look. The `/_blob/...` image links in those files will not work, so use the photos in `assets/photos/` instead (mapping in CLAUDE.md).

## Stack
- Astro (static output), plain CSS with CSS variables (no heavy UI framework), Manrope font self-hosted or via Google Fonts
- Mobile-first, responsive at 360px and up
- No backend. Contact happens via WhatsApp link, phone link, mailto link, and one simple contact form (use Formspree or Netlify Forms; leave the form endpoint as a clearly marked TODO)

## Pages
1. `/` Startseite with these sections in this order: header/nav, hero (Entrümpelung focus), Leistungen (8 cards), Zielgruppen (4 tiles), Ablauf (4 steps), Warum DAYFA (photo + 4 checkmarks), Vorher/Nachher + 3-photo gallery, Kundenstimmen, Kontakt, footer
2. `/impressum`
3. `/datenschutz` (create a clean German template with clear TODO markers; do not invent legal text beyond standard sections)

## Requirements
- All visible text in German, `lang="de"`
- Real `<a>` and `<button>` elements, visible focus states, alt text in German on every image, contrast of at least 4.5:1
- Optimize images (WebP/AVIF via Astro's image tools), `loading="lazy"` below the fold, explicit width/height to avoid layout shift
- SEO: unique `<title>` and meta description, Open Graph tags, `LocalBusiness` JSON-LD (name, address, phone, email, areaServed Bonn), `sitemap.xml`, `robots.txt`
- Sticky "Angebot anfordern" button on mobile that scrolls to the contact section
- Do NOT invent content: no fake reviews, prices, statistics, certifications or years of experience. Anything unknown stays as a visible `[PLATZHALTER]` and is listed in `TODO.md`

## Working method
1. Propose the file structure and wait for my OK
2. Scaffold the project, then build the home page, then Impressum and Datenschutz
3. Run the dev server and check the page at 375px, 768px and 1280px widths; fix any problems
4. Create `README.md` (how to run, build, deploy) and `TODO.md` (everything still missing)
5. Make small, clear git commits after each step

When done, tell me what is finished and what I still need to provide.
