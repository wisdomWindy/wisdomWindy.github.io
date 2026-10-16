import type { CollectionEntry } from 'astro:content'

interface PublishableEntry {
  id: string
  data: {
    draft?: boolean
  }
}

interface DatedEntry extends PublishableEntry {
  data: PublishableEntry['data'] & {
    pubDate: Date
  }
}

interface OrderedEntry extends DatedEntry {
  data: DatedEntry['data'] & {
    order: number
  }
}

interface TaggedEntry {
  data: {
    tags: readonly string[]
  }
}

export interface TagSummary {
  label: string
  slug: string
  count: number
}

const compareIds = (left: string, right: string) => {
  if (left === right) return 0
  return left < right ? -1 : 1
}

export const filterPublished = <T extends PublishableEntry>(entries: readonly T[]): T[] =>
  entries.filter(({ data }) => !data.draft)

export const sortPosts = <T extends DatedEntry>(entries: readonly T[]): T[] =>
  [...entries].sort((left, right) =>
    right.data.pubDate.getTime() - left.data.pubDate.getTime() || compareIds(left.id, right.id),
  )

export const sortProjects = <T extends OrderedEntry>(entries: readonly T[]): T[] =>
  [...entries].sort((left, right) =>
    left.data.order - right.data.order
    || right.data.pubDate.getTime() - left.data.pubDate.getTime()
    || compareIds(left.id, right.id),
  )

export const slugifyTag = (tag: string): string =>
  encodeURIComponent(tag.trim().toLocaleLowerCase('en-US').replace(/\s+/g, '-'))

export const getAllTags = <T extends TaggedEntry>(posts: readonly T[]): TagSummary[] => {
  const tags = new Map<string, TagSummary>()

  for (const post of posts) {
    for (const rawTag of post.data.tags) {
      const label = rawTag.trim()
      if (!label) continue
      const key = label.toLocaleLowerCase('en-US')
      const existing = tags.get(key)
      if (existing) {
        existing.count += 1
      } else {
        tags.set(key, { label, slug: slugifyTag(label), count: 1 })
      }
    }
  }

  return [...tags.values()].sort((left, right) => left.label.localeCompare(right.label, 'en-US'))
}

export const getAdjacentEntries = <T extends { id: string }>(
  entries: readonly T[],
  id: string,
): { previous?: T; next?: T } => {
  const index = entries.findIndex((entry) => entry.id === id)
  if (index < 0) return {}

  return {
    ...(index > 0 ? { previous: entries[index - 1] } : {}),
    ...(index < entries.length - 1 ? { next: entries[index + 1] } : {}),
  }
}

export const estimateReadingMinutes = (body: string): number => {
  const chineseCharacters = body.match(/[\u3400-\u9fff]/g)?.length ?? 0
  const latinWords = body
    .replace(/[\u3400-\u9fff]/g, ' ')
    .match(/[A-Za-z0-9][A-Za-z0-9'_-]*/g)?.length ?? 0

  return Math.max(1, Math.ceil(chineseCharacters / 300 + latinWords / 200))
}

export const getPublishedPosts = async (): Promise<CollectionEntry<'blog'>[]> => {
  const { getCollection } = await import('astro:content')
  return sortPosts(filterPublished(await getCollection('blog')))
}

export const getPublishedProjects = async (): Promise<CollectionEntry<'projects'>[]> => {
  const { getCollection } = await import('astro:content')
  return sortProjects(filterPublished(await getCollection('projects')))
}

export const getFeaturedProjects = async (): Promise<CollectionEntry<'projects'>[]> =>
  (await getPublishedProjects()).filter(({ data }) => data.featured).slice(0, 3)
