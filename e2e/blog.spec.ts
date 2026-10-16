import { expect, test } from '@playwright/test'

test('blog index lists published posts and tag counts', async ({ page }) => {
  await page.goto('/blog/')

  await expect(page.getByRole('heading', { level: 1, name: '文章' })).toBeVisible()
  await expect(page.locator('[data-post-row]')).toHaveCount(3)
  await expect(page.locator('[data-post-row]').first()).toContainText('用 Astro 重构个人技术站')
  await expect(page.getByRole('link', { name: 'TypeScript 2' })).toHaveAttribute('href', '/blog/tags/typescript/')
})

test('tag page contains matching posts and a return path', async ({ page }) => {
  await page.goto('/blog/tags/typescript/')

  await expect(page.getByRole('heading', { level: 1, name: '标签：TypeScript' })).toBeVisible()
  await expect(page.getByText('共 2 篇文章')).toBeVisible()
  await expect(page.locator('[data-post-row]')).toHaveCount(2)
  await expect(page.getByRole('link', { name: '返回全部文章' })).toBeVisible()
})

test('article renders metadata, TOC and adjacent navigation', async ({ page, isMobile }) => {
  await page.goto('/blog/astro-portfolio-rebuild/')

  await expect(page.getByRole('heading', { level: 1, name: /Astro 重构个人技术站/ })).toBeVisible()
  await expect(page.getByText(/2026年10月16日/)).toBeVisible()
  await expect(page.getByText(/\d+ 分钟阅读/)).toBeVisible()

  if (isMobile) {
    await expect(page.locator('details').filter({ hasText: '文章目录' })).toBeVisible()
  } else {
    const toc = page.getByRole('navigation', { name: '文章目录' })
    await expect(toc).toBeVisible()
    await expect(toc.getByRole('link', { name: '为什么选择静态架构' })).toHaveAttribute('href', '#为什么选择静态架构')
  }

  await expect(page.getByRole('link', { name: /下一篇.*把前端状态关进组件边界/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /上一篇/ })).toHaveCount(0)
})

test('RSS contains all published post titles', async ({ request }) => {
  const response = await request.get('/rss.xml')
  expect(response.ok()).toBe(true)
  const body = await response.text()

  expect(body).toContain('用 Astro 重构个人技术站')
  expect(body).toContain('把前端状态关进组件边界')
  expect(body).toContain('从可访问性出发设计项目筛选器')
})
