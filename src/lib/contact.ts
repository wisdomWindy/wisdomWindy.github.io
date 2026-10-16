import { siteConfig } from '../site.config'

export interface ContactValues {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export const normalizeContact = (values: ContactValues): ContactValues => ({
  name: values.name.trim(),
  email: values.email.trim().toLocaleLowerCase('en-US'),
  message: values.message.replace(/\r\n?/g, '\n').trim(),
})

const isEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const validateContact = (values: ContactValues): ContactErrors => {
  const normalized = normalizeContact(values)
  const errors: ContactErrors = {}

  if (!normalized.name) errors.name = '请输入姓名'
  else if ([...normalized.name].length < 2 || [...normalized.name].length > 60) errors.name = '姓名需为 2–60 个字符'

  if (!normalized.email) errors.email = '请输入邮箱地址'
  else if (normalized.email.length > 254 || !isEmail(normalized.email)) errors.email = '请输入有效的邮箱地址'

  if (!normalized.message) errors.message = '请输入留言'
  else if ([...normalized.message].length < 20 || [...normalized.message].length > 2000) errors.message = '留言需为 20–2000 个字符'

  return errors
}

export const buildMailto = (values: ContactValues): string => {
  const normalized = normalizeContact(values)
  const subject = `来自${normalized.name}的网站联系`
  const body = `姓名：${normalized.name}\n邮箱：${normalized.email}\n\n留言：\n${normalized.message}`

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
