import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostFrontmatter } from '@/types'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`No post found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    frontmatter: {
      ...data,
      title: data.title,
      date: data.date.toString(),
      description: data.description,
      slug: slug,
    } as PostFrontmatter
  }
}

export function getAllPosts(): PostFrontmatter[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .filter(slug => slug.endsWith('.mdx'))
    .map(slug => {
      const realSlug = slug.replace(/\.mdx$/, '')
      const { frontmatter } = getPostBySlug(realSlug)
      return frontmatter
    })

  return posts.sort((post1, post2) => 
    new Date(post2.date).getTime() - new Date(post1.date).getTime()
  )
}