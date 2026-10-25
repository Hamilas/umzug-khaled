import { defineConfig } from 'astro/config';

export default defineConfig({
  // Domain – wird für Canonical-, OG- und Sitemap-URLs genutzt
  site: 'https://www.dayfatransporter.de',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
