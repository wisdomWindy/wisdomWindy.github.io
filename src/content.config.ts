import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projectCover = z.object({
  src: z.string().startsWith('/images/'),
  alt: z.string().min(1),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    techStack: z.array(z.string().min(1)).min(1),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    cover: projectCover,
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().int().default(0),
    outcome: z.string().optional(),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string().min(1)).default([]),
    draft: z.boolean().default(false),
    cover: projectCover.optional(),
    readingTime: z.number().int().positive().optional(),
  }),
})

export const collections = { projects, blog }
