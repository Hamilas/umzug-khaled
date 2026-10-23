import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: echte Domain eintragen (wird für Canonical-, OG- und Sitemap-URLs genutzt)
  site: 'https://www.dayfa-transporter.de',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
