import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')
const basePath = '/bluewater-drainage'

const routes = [
  {
    path: '/',
    title: 'Tile Drainage Services in Ontario | Bluewater Farm Drainage',
    description: 'Bluewater Farm Drainage provides professional tile drainage, erosion control, and agricultural drainage services across Grey Bruce, Simcoe, Wellington, Huron, and Perth Counties in Ontario.',
  },
  {
    path: '/about',
    title: 'About Us | Bluewater Farm Drainage',
    description: 'Learn about Bluewater Farm Drainage — a family-run tile drainage business serving Ontario farmers with professional, GPS-guided drainage solutions.',
  },
  {
    path: '/services',
    title: 'Services | Bluewater Farm Drainage',
    description: 'Tile drainage installation, GPS survey & design, erosion control, land clearing, tile repair, and finish discing services across Ontario.',
  },
  {
    path: '/why-drainage',
    title: 'Why Tile Drainage | Bluewater Farm Drainage',
    description: 'Learn how tile drainage improves crop yields, field accessibility, and land value for Ontario farmers.',
  },
  {
    path: '/projects',
    title: 'Projects & Gallery | Bluewater Farm Drainage',
    description: 'See our completed tile drainage, erosion control, and land improvement projects across Ontario.',
  },
  {
    path: '/careers',
    title: 'Careers | Bluewater Farm Drainage',
    description: "Join the Bluewater Farm Drainage team. We're looking for skilled operators and labourers in Ontario.",
  },
  {
    path: '/contact',
    title: 'Contact & Request a Quote | Bluewater Farm Drainage',
    description: 'Request a free tile drainage quote from Bluewater Farm Drainage. Serving Grey Bruce, Simcoe, Wellington, Huron, and Perth Counties.',
  },
]

async function prerender() {
  const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8')
  const { render } = await import(resolve(distDir, 'server', 'entry-server.js'))

  for (const route of routes) {
    const appHtml = render(basePath + route.path)

    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
      .replace('</head>', `    <meta name="description" content="${route.description}">\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const filePath = route.path === '/'
      ? resolve(distDir, 'index.html')
      : resolve(distDir, route.path.slice(1), 'index.html')

    mkdirSync(dirname(filePath), { recursive: true })
    writeFileSync(filePath, html)
    console.log(`  Pre-rendered: ${route.path}`)
  }

  // 404 fallback for truly unknown routes
  copyFileSync(resolve(distDir, 'index.html'), resolve(distDir, '404.html'))
  console.log('  Created 404.html fallback')
}

prerender().catch(console.error)
