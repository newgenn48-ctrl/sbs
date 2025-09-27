import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';

// The project root directory
const projectRoot = process.cwd();
// The directory where the sitemap will be placed
const publicDir = path.join(projectRoot, 'public');
// The directory where the pages are located
const pagesDir = path.join(projectRoot, 'app');

// Find all page.tsx files
const pages = globSync('**/page.tsx', { cwd: pagesDir });

// Base URL of the website
const baseUrl = 'https://staartbeheer.nl';

// Generate the sitemap entries
const urlset = pages
  .map(page => {
    // Convert file path to URL path
    let route = page.replace(/\\/g, '/').replace('page.tsx', '');
    if (route.endsWith('/')) {
      route = route.slice(0, -1);
    }
    // Handle the root page
    if (route === '') {
      route = '/';
    }

    // Exclude known non-page routes if any, for now we assume all are pages
    // Example: if (route.startsWith('/api')) return null;

    return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .filter(Boolean)
  .join('');

// Construct the final sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}
</urlset>`;

// Write the sitemap to the public directory
try {
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
}
