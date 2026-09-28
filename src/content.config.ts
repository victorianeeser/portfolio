import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Allowed tags. Add new ones here and the Work filter picks them up automatically.
export const TAGS = ['UI', 'UX', 'Front-end', 'Interactive', 'Motion', 'Game'] as const;

// A slot for one image or video. Leave `src` empty to show a labeled gray placeholder;
// fill it in (e.g. "/images/game/hero.png") once the asset is exported from Figma.
const media = z.object({
  label: z.string(), // what goes here, shown on the placeholder
  alt: z.string().default(''),
  src: z.string().optional(),
  type: z.enum(['image', 'video']).default('image'),
  caption: z.string().optional(),
});

const projects = defineCollection({
  // One Markdown file per project in src/content/projects/. The file name becomes the URL slug.
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    timeline: z.string(),
    tools: z.array(z.string()),
    team: z.string(),
    tags: z.array(z.enum(TAGS)),
    order: z.number(), // lower = earlier in lists
    featured: z.boolean().default(false), // show on the home page
    draft: z.boolean().default(false), // hide from the site entirely
    figma: z.string().url().optional(), // link to the Figma file the visuals come from
    cover: media, // card thumbnail
    hero: media, // case study hero
    gallery: z.array(media).default([]),
  }),
});

export const collections = { projects };
