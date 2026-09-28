// @ts-check
import { defineConfig } from 'astro/config';

// Static output deploys as-is to Netlify or Vercel (no adapter needed).
// Set `site` to the real domain once you have one (used for canonical URLs).
export default defineConfig({
  site: 'https://example.com',
});
