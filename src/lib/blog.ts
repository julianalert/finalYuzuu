import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog')

export type TocEntry = {
  level: 2 | 3
  text: string
  id: string
}

export function extractToc(content: string): TocEntry[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const entries: TocEntry[] = []
  let match: RegExpExecArray | null

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3
    const text = match[2].trim()
    // Matches the ID that rehype-slug generates
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    entries.push({ level, text, id })
  }

  return entries
}

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  imageAlt: string
}

export type BlogPost = BlogPostMeta & {
  content: string
}

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(CONTENT_DIR, filename)
      const { data } = matter(fs.readFileSync(filePath, 'utf-8'))

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        image: data.image as string,
        imageAlt: data.imageAlt as string,
        published: data.published !== false,
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const { data, content } = matter(fs.readFileSync(filePath, 'utf-8'))

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    image: data.image as string,
    imageAlt: data.imageAlt as string,
    content,
  }
}
