import { expect, test } from '@playwright/test'

test('home presents identity, shared skills and featured projects', async ({ page }) => {
  const pageErrors: Error[] = []
  page.on('pageerror', (error) => pageErrors.push(error))
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1, name: 'wisdomWindy' })).toBeVisible()
  await expect(page.getByText('前端开发工程师', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { level: 2, name: '技能与方法' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 2, name: '精选项目' })).toBeVisible()
  await expect(page.locator('[data-project-card]')).toHaveCount(3)
  await expect(page.getByRole('link', { name: '查看全部项目' })).toBeVisible()
  expect(pageErrors).toEqual([])
})

test('about stays factual and does not expose a broken resume link', async ({ page }) => {
  await page.goto('/about/')

  await expect(page.getByRole('heading', { level: 1, name: '关于我' })).toBeVisible()
  await expect(page.getByText('2021 至今', { exact: true })).toBeVisible()
  await expect(page.getByText('简历暂未开放下载')).toBeVisible()
  await expect(page.getByRole('link', { name: /LinkedIn|下载简历/ })).toHaveCount(0)
  await expect(page.getByText('Playwright', { exact: true })).toBeVisible()
})

test('project filters update cards and result count', async ({ page }) => {
  await page.goto('/projects/')

  const cards = page.locator('[data-project-card]')
  await expect(page.getByRole('heading', { level: 1, name: '项目' })).toBeVisible()
  await expect(cards).toHaveCount(3)
  await expect(page.getByText('共 3 个项目')).toBeVisible()
  await expect(page.getByRole('heading', { level: 3, name: 'BiliCatch' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 3, name: 'SkillHub' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 3, name: '可视化综合管理平台' })).toBeVisible()

  const rustFilter = page.getByRole('button', { name: 'Rust' })
  await rustFilter.click()
  await expect(rustFilter).toHaveAttribute('aria-pressed', 'true')
  await expect(cards.filter({ visible: true })).toHaveCount(1)
  await expect(page.getByRole('heading', { level: 3, name: 'BiliCatch' })).toBeVisible()
  await expect(page.getByText('共 1 个项目')).toBeVisible()

  await page.getByRole('button', { name: '全部' }).click()
  await expect(cards.filter({ visible: true })).toHaveCount(3)
})

test('project detail includes required narrative and adjacent navigation', async ({ page }) => {
  await page.goto('/projects/bili-catch/')

  await expect(page.getByRole('heading', { level: 1, name: 'BiliCatch' })).toBeVisible()
  for (const heading of ['背景', '责任', '实现亮点', '挑战与解决', '结果']) {
    await expect(page.getByRole('heading', { level: 2, name: heading })).toBeVisible()
  }
  await expect(page.getByRole('link', { name: '查看代码' })).toHaveAttribute('href', 'https://github.com/wisdomWindy/bili-catch')
  await expect(page.getByRole('link', { name: /下一个.*SkillHub/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /上一个/ })).toHaveCount(0)
})

test('confirmed external project links are shown without dead demo actions', async ({ page }) => {
  await page.goto('/projects/skill-hub/')
  await expect(page.getByRole('link', { name: '打开演示' })).toHaveAttribute('href', 'https://wisdomwindy.github.io/skill-hub/')

  await page.goto('/projects/visual-comprehensive-management-platform/')
  await expect(page.getByRole('link', { name: '查看代码' })).toHaveAttribute('href', 'https://github.com/wisdomWindy/visual-comprehensive-management-platform')
  await expect(page.getByRole('link', { name: '打开演示' })).toHaveCount(0)
})
