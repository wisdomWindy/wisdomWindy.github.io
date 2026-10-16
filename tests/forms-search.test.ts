import { describe, expect, it } from 'vitest'
import { buildMailto, normalizeContact, validateContact } from '../src/lib/contact'
import { mapPagefindData, normalizeQuery } from '../src/lib/search'

describe('search rules', () => {
  it('normalizes query whitespace without rejecting short terms', () => {
    expect(normalizeQuery('  Astro   搜索\n')).toBe('Astro 搜索')
    expect(normalizeQuery('  ')).toBe('')
    expect(normalizeQuery('a')).toBe('a')
  })

  it('maps Pagefind data with URL-derived fallbacks', () => {
    expect(mapPagefindData({
      url: '/projects/bili-catch/',
      meta: { title: 'BiliCatch' },
      excerpt: '<mark>内容</mark>与页面分离',
    })).toEqual({
      url: '/projects/bili-catch/',
      title: 'BiliCatch',
      excerpt: '<mark>内容</mark>与页面分离',
      type: '项目',
    })
  })
})

describe('contact rules', () => {
  it('normalizes only contract-approved whitespace and email case', () => {
    expect(normalizeContact({
      name: '  杨 风  ',
      email: '  USER@Example.COM ',
      message: '  第一行\r\n  第二行保留空格  ',
    })).toEqual({
      name: '杨 风',
      email: 'user@example.com',
      message: '第一行\n  第二行保留空格',
    })
  })

  it('returns field-specific errors for invalid values', () => {
    expect(validateContact({ name: 'A', email: 'bad', message: '太短' })).toEqual({
      name: '姓名需为 2–60 个字符',
      email: '请输入有效的邮箱地址',
      message: '留言需为 20–2000 个字符',
    })
  })

  it('builds an encoded mailto URI from normalized values', () => {
    const mailto = buildMailto({
      name: '杨风',
      email: 'USER@example.com',
      message: '你好，我想了解这个项目的合作方式。',
    })

    expect(mailto).toContain('mailto:me@1659140773@qq.com?')
    expect(decodeURIComponent(mailto)).toContain('来自杨风的网站联系')
    expect(decodeURIComponent(mailto)).toContain('user@example.com')
    expect(decodeURIComponent(mailto)).toContain('你好，我想了解这个项目的合作方式。')
  })
})
