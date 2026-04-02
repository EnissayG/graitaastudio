import { defineConfig } from 'vite'
import path from 'path'
import fs from 'node:fs'
import type { Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const SITE_NAME = 'Graitaa Studio'
const SITE_DESCRIPTION =
  'Graitaa Studio crée des sites web modernes et performants pour votre entreprise. Design sur-mesure, développement et stratégie digitale à Montréal.'

const ROUTES = ['', 'services', 'portfolio', 'about', 'contact'] as const

function getSiteUrl(): string | undefined {
  const raw = process.env.VITE_SITE_URL?.trim()
  if (!raw) return undefined
  try {
    const u = new URL(raw.startsWith('http') ? raw : `https://${raw}`)
    return `${u.origin}${u.pathname.replace(/\/$/, '')}`
  } catch {
    return undefined
  }
}

function pageLocations(siteUrl: string): string[] {
  const u = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`)
  const origin = u.origin
  const basePath = u.pathname.replace(/\/$/, '')
  return ROUTES.map((route) => {
    const p = route
      ? `${basePath}/${route}`.replace(/\/{2,}/g, '/')
      : basePath
        ? `${basePath}/`
        : '/'
    return `${origin}${p}`
  })
}

function seoPlugin(): Plugin {
  const siteUrl = getSiteUrl()
  return {
    name: 'seo',
    transformIndexHtml(html) {
      const head: string[] = [
        '<meta name="robots" content="index, follow, max-image-preview:large" />',
        '<meta name="googlebot" content="index, follow" />',
      ]
      if (siteUrl) {
        const canonical = pageLocations(siteUrl)[0]
        const ogImage = `${siteUrl}/og-preview.svg`
        head.push(`<link rel="canonical" href="${canonical}" />`)
        head.push(`<meta property="og:url" content="${canonical}" />`)
        head.push(`<meta property="og:image" content="${ogImage}" />`)
        head.push(`<meta name="twitter:image" content="${ogImage}" />`)
        const jsonLd = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${canonical}#website`,
              name: SITE_NAME,
              url: canonical,
              description: SITE_DESCRIPTION,
              inLanguage: 'fr-CA',
              publisher: { '@id': `${canonical}#organization` },
            },
            {
              '@type': 'ProfessionalService',
              '@id': `${canonical}#organization`,
              name: SITE_NAME,
              url: canonical,
              description: SITE_DESCRIPTION,
              email: 'graitaastudio@gmail.com',
              areaServed: { '@type': 'City', name: 'Montréal', containedInPlace: { '@type': 'Country', name: 'Canada' } },
            },
          ],
        }
        head.push(
          `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
        )
        html = html.replace(
          /<meta property="og:image" content="og-preview.svg" \/>/,
          '',
        )
        html = html.replace(
          /<meta name="twitter:image" content="og-preview.svg" \/>/,
          '',
        )
      }
      return html.replace('</head>', `${head.join('\n    ')}\n  </head>`)
    },
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      if (!fs.existsSync(outDir)) return
      let robots = 'User-agent: *\nAllow: /\n'
      if (siteUrl) {
        robots += `\nSitemap: ${siteUrl}/sitemap.xml\n`
        const locs = pageLocations(siteUrl)
        const today = new Date().toISOString().slice(0, 10)
        const urlEntries = locs
          .map(
            (loc, i) =>
              `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${i === 0 ? '1.0' : '0.85'}</priority>\n  </url>`,
          )
          .join('\n')
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8')
      }
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots, 'utf8')
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), seoPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
