/**
 * Usage:
 * 1. Save projects.json (provided) in the same folder
 * 2. node generate-projects.js
 * 3. Output folders: ./content/projects and ./public/thumbnails
 *
 * No external deps required.
 */
const fs = require('fs');
const path = require('path');

function slugify(s){
  return s.toLowerCase()
    .replace(/https?:\/\//,'')
    .replace(/www\./,'')
    .replace(/[^\w\-]+/g,'-')
    .replace(/\-+/g,'-')
    .replace(/^\-|\-$/g,'');
}

function ensureDir(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const projects = JSON.parse(fs.readFileSync(path.join(__dirname,'projects.json'),'utf8'));

const outMD = path.join(process.cwd(),'content','projects');
const outThumb = path.join(process.cwd(),'public','thumbnails');
ensureDir(outMD);
ensureDir(outThumb);

projects.forEach((p, idx) => {
  const slug = p.slug || slugify(p.url || p.title || `project-${idx+1}`);
  const mdPath = path.join(outMD, `${slug}.mdx`);
  const svgPath = path.join(outThumb, `${slug}.svg`);

  const frontmatter = `---\ntitle: "${(p.title||'').replace(/"/g,'\\"')}"\nurl: "${p.url||''}"\nslug: "${slug}"\ncategory: "${p.category||''}"\nsummary: "${(p.summary||'Replace this with a one-line project summary.').replace(/"/g,'\\"')}"\nrole: "${p.role||'Lead Developer'}"\nyear: ${p.year||''}\ntags: ${JSON.stringify(p.tags||[])}\nfeaturedImage: "/thumbnails/${slug}.svg"\n---`;

  const mdBody = `\n${frontmatter}\n\nimport Image from 'next/image';\n\n<!-- Replace the placeholder sections below with real content and screenshots -->\n\n# ${p.title}\n\n> ${p.summary || 'Short one-line summary about the project.'}\n\n## Problem\nDescribe the client's problem and project goals.\n\n## My role\n- ${p.role || 'Role placeholder — e.g., Lead Developer / Designer / Integrator'}\n\n## Process\nDescribe steps taken (Research → Design → Build → Launch). Include links to Figma, prototypes, or code if available.\n\n## Solution\nExplain the solution and key screens. Add images/screenshots using the featuredImage or actual assets.\n\n<Image src={${'`'}/thumbnails/${slug}.svg${'`'}} alt="${p.title} thumbnail" width={1200} height={700} />\n\n## Results\nReplace with metrics/outcomes where possible (e.g., "↑20% conversion", organic traffic uplift).\n\n## Tech & Tools\n- WordPress / WooCommerce / Webflow / Next.js / Make / Zapier / Figma\n\n## Links\n- Live: ${p.url || '—'}\n- Code: (add repo link if applicable)\n\n`;

  fs.writeFileSync(mdPath, mdBody.trim());
  // produce a simple SVG thumbnail
  const svg = `<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">\n  <defs>\n    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">\n      <stop offset="0" stop-color="#7C3AED" stop-opacity="0.95"/>\n      <stop offset="1" stop-color="#A3E635" stop-opacity="0.85"/>\n    </linearGradient>\n  </defs>\n  <rect width="1200" height="700" fill="#0F1724"/>\n  <rect x="40" y="40" width="1120" height="620" rx="18" fill="url(#g)" opacity="0.12"/>\n  <text x="80" y="140" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="44" fill="#E6F1FF">${(p.title || p.url).replace(/&/g,'&amp;')}</text>\n  <text x="80" y="200" font-family="Inter, Arial, sans-serif" font-size="20" fill="#CDE6A4">${p.url || ''}</text>\n  <rect x="80" y="240" width="480" height="260" rx="10" fill="#0A1220" opacity="0.6"/>\n  <text x="100" y="300" font-family="Inter, Arial, sans-serif" font-size="16" fill="#9FB4CC">Preview / screenshot placeholder</text>\n  <g transform="translate(600,240)">\n    <rect width="480" height="120" rx="8" fill="#0A1220" opacity="0.6"/>\n    <rect y="140" width="480" height="120" rx="8" fill="#0A1220" opacity="0.5"/>\n  </g>\n  <text x="80" y="640" font-family="Inter, Arial, sans-serif" font-size="14" fill="#9FB4CC">Hamid Ali Asad — Portfolio</text>\n</svg>\n`;
  fs.writeFileSync(svgPath, svg, 'utf8');
  console.log('Wrote:', mdPath, svgPath);
});

console.log('Done. Generated', projects.length, 'project files.');
