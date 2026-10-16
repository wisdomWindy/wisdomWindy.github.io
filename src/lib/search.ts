export interface PagefindData {
  url: string
  excerpt?: string
  meta?: {
    title?: string
    type?: string
  }
}

export interface SearchResult {
  url: string
  title: string
  excerpt: string
  type: '文章' | '项目'
}

export const normalizeQuery = (query: string): string => query.trim().replace(/\s+/g, ' ')

const fallbackTitle = (url: string): string => {
  const segment = url.split('/').filter(Boolean).at(-1) ?? '未命名页面'
  return decodeURIComponent(segment).replaceAll('-', ' ')
}

export const mapPagefindData = (data: PagefindData): SearchResult => ({
  url: data.url,
  title: data.meta?.title?.trim() || fallbackTitle(data.url),
  excerpt: data.excerpt ?? '',
  type: data.meta?.type === '项目' || data.url.startsWith('/projects/') ? '项目' : '文章',
})
