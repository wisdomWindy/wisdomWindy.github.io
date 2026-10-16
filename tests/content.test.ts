import { describe, expect, it } from 'vitest'
import {
  estimateReadingMinutes,
  filterPublished,
  getAdjacentEntries,
  getAllTags,
  sortPosts,
  sortProjects,
} from '../src/lib/content'
import { formatDate } from '../src/lib/format'

const entry = (id: string, pubDate: string, options: { draft?: boolean; order?: number; tags?: string[] } = {}) => ({
  id,
  data: {
    pubDate: new Date(pubDate),
    draft: options.draft ?? false,
    order: options.order ?? 0,
    tags: options.tags ?? [],
  },
})

describe('content rules', () => {
  it('excludes drafts and sorts posts newest-first with an id tie-breaker', () => {
    const entries = [
      entry('beta', '2026-01-02'),
      entry('draft', '2026-02-01', { draft: true }),
      entry('zeta', '2026-01-03'),
      entry('alpha', '2026-01-02'),
    ]

    expect(sortPosts(filterPublished(entries)).map(({ id }) => id)).toEqual(['zeta', 'alpha', 'beta'])
  })

  it('sorts projects by explicit order, then newest date and id', () => {
    const entries = [
      entry('later', '2025-01-01', { order: 2 }),
      entry('beta', '2025-02-01', { order: 1 }),
      entry('alpha', '2025-02-01', { order: 1 }),
    ]

    expect(sortProjects(entries).map(({ id }) => id)).toEqual(['alpha', 'beta', 'later'])
  })

  it('merges case-insensitive tags while preserving a readable label', () => {
    const posts = [
      entry('one', '2026-01-01', { tags: ['TypeScript', '工程化'] }),
      entry('two', '2026-01-02', { tags: ['typescript', 'Accessibility'] }),
    ]

    expect(getAllTags(posts)).toEqual([
      { label: 'Accessibility', slug: 'accessibility', count: 1 },
      { label: 'TypeScript', slug: 'typescript', count: 2 },
      { label: '工程化', slug: '%E5%B7%A5%E7%A8%8B%E5%8C%96', count: 1 },
    ])
  })

  it('returns deterministic adjacent entries and empty edges', () => {
    const entries = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]

    expect(getAdjacentEntries(entries, 'a')).toEqual({ next: entries[1] })
    expect(getAdjacentEntries(entries, 'b')).toEqual({ previous: entries[0], next: entries[2] })
    expect(getAdjacentEntries(entries, 'c')).toEqual({ previous: entries[1] })
    expect(getAdjacentEntries(entries, 'missing')).toEqual({})
  })

  it('estimates at least one minute for short and Chinese content', () => {
    expect(estimateReadingMinutes('short')).toBe(1)
    expect(estimateReadingMinutes('前端工程化'.repeat(180))).toBeGreaterThan(1)
  })

  it('formats dates in stable Chinese notation', () => {
    expect(formatDate(new Date('2026-10-16T23:00:00+08:00'))).toBe('2026年10月16日')
  })
})
