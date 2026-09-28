import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Allowed tags. Add new ones here and the Work filter picks them up automatically.
export const TAGS = ['UI', 'UX', 'Front-end', 'Interactive', 'Motion', 'Game'] as const;

const projects = defineCollection({
  // One Markdown (.md) or MDX (.mdx) file per project in src/content/projects/.
  // The file name becomes the URL slug. Use .mdx to add custom sections (src/components/case/).
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => {
    // A slot for one image or video. Leave `src` and `video` empty to show a labeled gray
    // placeholder. `src` is a path relative to the Markdown file, e.g.
    // "../../assets/projects/impact/hero.jpg"; Astro resizes and compresses it.
    // `video` is a Vimeo or YouTube link, embedded as a player.
    const media = z.object({
      label: z.string(), // what goes here, shown on the placeholder
      alt: z.string().default(''),
      src: image().optional(),
      video: z.string().url().optional(),
      ratio: z.enum(['hero', 'card', 'portrait', 'square', 'auto']).optional(),
      caption: z.string().optional(),
    });

    return z.object({
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
      theme: z.string().optional(), // project theme for custom sections, see src/styles/themes/
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      cover: media, // card thumbnail
      hero: media, // case study hero
      gallery: z.array(media).default([]),
    });
  },
});

export const collections = { projects };
