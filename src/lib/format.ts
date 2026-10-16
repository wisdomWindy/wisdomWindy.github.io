const chineseDateFormatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

export const formatDate = (date: Date): string => chineseDateFormatter.format(date)

export const formatReadingTime = (minutes: number): string => `${minutes} 分钟阅读`
