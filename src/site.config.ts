export const siteConfig = {
  name: 'wisdomWindy',
  role: '前端开发工程师',
  description: '关注前端工程化、可用性与用户体验，记录真实项目与技术思考。',
  url: 'https://wisdomWindy.github.io',
  email: 'me@1659140773@qq.com',
  github: 'https://github.com/wisdomWindy',
  nav: [
    { label: '首页', href: '/' },
    { label: '关于', href: '/about/' },
    { label: '项目', href: '/projects/' },
    { label: '文章', href: '/blog/' },
    { label: '联系', href: '/contact/' },
  ],
  skills: [
    { name: '界面工程', items: ['Vue', 'React', 'TypeScript', 'Astro'] },
    { name: '体验质量', items: ['Accessibility', 'Responsive UI', 'Performance'] },
    { name: '工程体系', items: ['Vite', 'Vitest', 'Playwright', 'GitHub Actions'] },
  ],
} as const

export type NavItem = (typeof siteConfig.nav)[number]
