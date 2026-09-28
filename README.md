# Portfolio

Victoria Neeser's design portfolio, built with [Astro](https://astro.build).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

Needs Node 22.12 or newer.

## Where things live

| What | Where |
| --- | --- |
| Design tokens (color, type, spacing, layout) | `src/styles/tokens.css` |
| Base styles and shared classes | `src/styles/global.css` |
| Name, email, social links, nav | `src/site.config.ts` |
| Projects (one Markdown file each) | `src/content/projects/` |
| Project fields (the schema) | `src/content.config.ts` |
| Pages | `src/pages/` |
| Resume PDF | `public/resume.pdf` (add it; the About page links to it) |
| Images and videos | `public/images/` |

## Adding a project

1. Copy any file in `src/content/projects/` and rename it. The file name becomes the URL (`my-app.md` → `/work/my-app/`).
2. Fill in the frontmatter: title, summary, role, timeline, tools, team, tags, `order`, and `featured: true` to show it on the home page.
3. Write the case study in the Markdown body under the existing headings.

## Swapping placeholders for Figma exports

Every gray box labeled **FIGMA: …** is an image slot.

- **Cover, hero and gallery** (in frontmatter): add `src: "/images/<project>/<file>.png"` and a real `alt` text. Use `type: video` for video.
- **Inside the case study body**: replace the `<div class="image-slot" …>` line with `![Alt text](/images/<project>/<file>.png)`.

Text placeholders are written as `[Placeholder: …]`.

## Deploying

The site builds to static files, so it deploys to Netlify (`netlify.toml` is included) or Vercel with no extra setup. Import the GitHub repo and accept the defaults.
