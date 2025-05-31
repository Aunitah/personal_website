import { getPostBySlug } from '@/lib/mdx'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'
import remarkGfm from 'remark-gfm'

const components: MDXComponents = {
  a: ({ href, children }) => {
    if (typeof href !== 'string') return null
    return (
      <Link href={href} className="text-blue-600 hover:underline">
        {children}
      </Link>
    )
  },
  ol: ({ children }) => (
    <ol className="list-decimal pl-4 my-4 space-y-2 [&>li]:mt-2 first:[&>li]:mt-0">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="ml-4">{children}</li>
  ),
  del: ({ children }) => (
    <del className="line-through text-gray-500">{children}</del>
  )
}

export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    
    return (
      <PageWrapper>
        <article className="prose prose-lg max-w-none prose-ol:list-decimal prose-ol:ml-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{post.frontmatter.title}</h1>
          </header>
          <div className="markdown-content">
            <MDXRemote 
              source={post.content} 
              components={components}
              options={{
                parseFrontmatter: true,
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  format: 'mdx',
                  development: false
                }
              }}
            />
          </div>
        </article>
      </PageWrapper>
    )
  } catch (error) {
    notFound()
  }
}