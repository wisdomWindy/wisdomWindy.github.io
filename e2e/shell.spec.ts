import { expect, test } from '@playwright/test'

test.describe('global site shell', () => {
  test('desktop navigation, skip link, theme and footer work', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop shell assertion')
    const pageErrors: Error[] = []
    page.on('pageerror', (error) => pageErrors.push(error))

    await page.goto('/')

    await expect(page.getByRole('link', { name: 'wisdomWindy', exact: true })).toBeVisible()
    await expect(page.getByRole('navigation', { name: '主导航' })).toBeVisible()
    await expect(page.getByRole('link', { name: '项目', exact: true })).toBeVisible()

    const skipLink = page.getByRole('link', { name: '跳到主要内容' })
    await skipLink.focus()
    await expect(skipLink).toBeFocused()
    await skipLink.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()

    const themeToggle = page.getByRole('button', { name: '切换到深色模式' })
    await themeToggle.click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect.poll(() => page.evaluate(() => localStorage.getItem('theme'))).toBe('dark')
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(page.getByRole('button', { name: '切换到浅色模式' })).toBeVisible()

    await expect(page.getByRole('contentinfo')).toContainText('wisdomWindy')
    await expect(page.getByRole('navigation', { name: '社交与订阅' }).getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/wisdomWindy',
    )

    const scrollTop = page.getByRole('button', { name: '返回顶部' })
    await expect(scrollTop).toBeHidden()
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(scrollTop).toBeVisible()
    await scrollTop.click()
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
    expect(pageErrors).toEqual([])
  })

  test('mobile menu opens, closes with Escape and restores focus', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile shell assertion')
    await page.goto('/')

    const menuButton = page.locator('.menu-toggle')
    const navigation = page.getByRole('navigation', { name: '主导航' })

    await expect(menuButton).toBeVisible()
    await expect(menuButton).toHaveAccessibleName('打开导航菜单')
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(navigation).toBeHidden()

    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await expect(menuButton).toHaveAccessibleName('关闭导航菜单')
    await expect(navigation).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(menuButton).toHaveAccessibleName('打开导航菜单')
    await expect(navigation).toBeHidden()
    await expect(menuButton).toBeFocused()
  })
})
