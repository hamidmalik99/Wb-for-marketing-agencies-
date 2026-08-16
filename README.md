# Hamid Ali Asad — Portfolio (Repository)

This repository contains a static portfolio homepage (index.html) and a small generator to scaffold project case studies and thumbnail SVGs.

What I added:

- index.html — the Creative/Bold dark portfolio homepage (Electric Purple + Lime on Dark Navy).
- generate-projects.js — Node.js script (no external deps) to generate MDX case-study files and SVG thumbnails from projects.json.
- projects.json — structured list of projects you provided.

How to generate project pages & thumbnails locally

1. Clone this repo locally.
2. Ensure you have Node.js installed (v14+ recommended).
3. Run:

   node generate-projects.js

4. The script will create:

   - ./content/projects/*.mdx  (case study scaffolds)
   - ./public/thumbnails/*.svg (thin SVG thumbnails using the portfolio palette)

Usage notes

- The generated MDX files are scaffolds — fill in real summaries, process, screenshots, and metrics for each project.
- For a full site, import the MDX content into a Next.js + MDX site or any static site generator that supports MDX/markdown.
- If you want me to push a Next.js scaffold and wire up these MDX pages, tell me and I can create a branch with a starter site.

If you want screenshots (PNG thumbnails) for each live URL, I can generate those and add them to public/thumbnails — tell me and I'll run that step and push the results.
