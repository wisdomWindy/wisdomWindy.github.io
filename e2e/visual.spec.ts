import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { expect, test } from '@playwright/test'

const routes = [
  '/',
  '/about/',
  '/projects/',
  '/projects/bili-catch/',
  '/blog/',
  '/blog/astro-portfolio-rebuild/',
  '/search/',
  '/contact/',
]

const screenshotRoutes = new Map([
  ['/', 'home'],
  ['/projects/', 'projects'],
  ['/blog/astro-portfolio-rebuild/', 'article'],
])

const evidenceDirectory = fileURLToPath(new URL(
  '../docs/requests/personal-portfolio-astro-rebuild/module-runs/portfolio-site/verification/evidence/screenshots/',
  import.meta.url,
))

test('representative routes fit the viewport and render their images', async ({ page }, testInfo) => {
  await mkdir(evidenceDirectory, { recursive: true })
  const pageErrors: string[] = []
  page.on('pageerror', (error) => pageErrors.push(error.message))

  for (const route of routes) {
    await page.goto(route)
    await expect(page.locator('h1')).toBeVisible()

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }))
    expect(dimensions.document, `${route} has horizontal overflow`).toBeLessThanOrEqual(dimensions.viewport)

    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded()
      await image.evaluate((element: HTMLImageElement) => element.decode())
    }
    await page.evaluate(() => window.scrollTo(0, 0))

    const brokenImages = await page.locator('img').evaluateAll((images: HTMLImageElement[]) =>
      images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.currentSrc),
    )
    expect(brokenImages, `${route} has broken images`).toEqual([])

    const screenshotName = screenshotRoutes.get(route)
    if (screenshotName) {
      await page.screenshot({
        path: `${evidenceDirectory}${screenshotName}-${testInfo.project.name}.png`,
        fullPage: true,
      })
    }
  }

  expect(pageErrors).toEqual([])
})
