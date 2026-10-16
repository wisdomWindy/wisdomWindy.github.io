import { expect, test } from '@playwright/test'

test('unknown routes render a navigable 404 page', async ({ page, isMobile }) => {
  const response = await page.goto('/this-page-does-not-exist/')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1, name: '404 / 页面不存在' })).toBeVisible()
  await expect(page.getByRole('link', { name: '返回首页' })).toBeVisible()
  if (isMobile) {
    await expect(page.getByRole('button', { name: '打开导航菜单' })).toBeVisible()
  } else {
    await expect(page.getByRole('navigation', { name: '主导航' })).toBeVisible()
  }
})

test('home metadata and primary bitmap are valid', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://wisdomwindy.github.io/')
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://wisdomwindy.github.io/images/og-default.png')
  await expect(page.locator('link[type="application/rss+xml"]')).toHaveAttribute('href', '/rss.xml')

  const image = page.getByRole('img', { name: /W 字抽象身份图/ })
  await expect(image).toBeVisible()
  expect(await image.evaluate((element: HTMLImageElement) => [element.naturalWidth, element.naturalHeight])).toEqual([960, 960])
})

test('robots, sitemap and RSS discovery artifacts are served', async ({ request }) => {
  const robots = await request.get('/robots.txt')
  expect(robots.ok()).toBe(true)
  expect(await robots.text()).toContain('https://wisdomWindy.github.io/sitemap-index.xml')

  const sitemapIndex = await request.get('/sitemap-index.xml')
  expect(sitemapIndex.ok()).toBe(true)
  expect(await sitemapIndex.text()).toContain('sitemap-0.xml')

  const sitemap = await request.get('/sitemap-0.xml')
  expect(sitemap.ok()).toBe(true)
  const sitemapBody = await sitemap.text()
  expect(sitemapBody).toContain('https://wisdomwindy.github.io/projects/bili-catch/')
  expect(sitemapBody).toContain('https://wisdomwindy.github.io/blog/astro-portfolio-rebuild/')

  const rss = await request.get('/rss.xml')
  expect(rss.ok()).toBe(true)
  expect(rss.headers()['content-type']).toMatch(/(?:application\/rss\+xml|text\/xml)/)
})
