// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static output deploys as-is to Netlify or Vercel (no adapter needed).
// Set `site` to the real domain once you have one (used for canonical URLs).
export default defineConfig({
  site: 'https://victorianeeser.com',
  // MDX lets a case study mix Markdown with custom section components
  integrations: [mdx()],
});
