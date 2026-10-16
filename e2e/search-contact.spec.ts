import { expect, test } from '@playwright/test'

test('production search returns article and project results, then clears', async ({ page }) => {
  await page.goto('/search/?q=TypeScript')

  const search = page.getByRole('searchbox', { name: '搜索文章和项目' })
  const results = page.locator('[data-search-result]')
  await expect(search).toHaveValue('TypeScript')
  await expect(page.getByRole('status')).toContainText(/找到 \d+ 条结果/)
  await expect(results.filter({ hasText: '把前端状态关进组件边界' })).toHaveCount(1)
  await expect(results.filter({ hasText: 'BiliCatch' })).toHaveCount(1)

  await search.fill('zzzxqv987654')
  await expect(page.getByRole('status')).toHaveText('没有找到匹配结果')
  await page.getByRole('button', { name: '清空搜索' }).click()
  await expect(search).toHaveValue('')
  await expect(page.getByRole('status')).toHaveText('输入关键词开始搜索')
})

test('contact form reports errors and prepares an encoded mail draft', async ({ page }) => {
  await page.goto('/contact/')

  await page.getByRole('button', { name: '打开邮件应用' }).click()
  await expect(page.getByRole('alert')).toContainText('请修正 3 个字段')
  await expect(page.getByLabel('姓名')).toBeFocused()
  await expect(page.getByText('请输入姓名')).toBeVisible()

  await page.getByLabel('姓名').fill('杨风')
  await page.getByLabel('邮箱').fill('USER@example.com')
  await page.getByLabel('留言').fill('你好，我想了解这个项目的合作方式，并讨论具体的实施计划。')
  await page.getByRole('button', { name: '打开邮件应用' }).click()

  const form = page.locator('[data-contact-form]')
  await expect(form).toHaveAttribute('data-mailto', /mailto:me@1659140773@qq\.com/)
  const mailto = await form.getAttribute('data-mailto')
  expect(decodeURIComponent(mailto ?? '')).toContain('来自杨风的网站联系')
})
