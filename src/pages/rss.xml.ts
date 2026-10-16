import type { APIRoute } from 'astro'
import { getPublishedPosts } from '../lib/content'
import { siteConfig } from '../site.config'

const escapeXML = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts()
  const items = posts.map((post) => `
    <item>
      <title>${escapeXML(post.data.title)}</title>
      <link>${siteConfig.url}/blog/${post.id}/</link>
      <guid>${siteConfig.url}/blog/${post.id}/</guid>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <description>${escapeXML(post.data.description)}</description>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXML(siteConfig.description)}</description>${items}
  </channel>
</rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
