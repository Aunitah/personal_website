import { PageWrapper } from '@/components/layout/PageWrapper'
import { About } from '@/components/home/About'
import { getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXComponents } from 'mdx/types'
import remarkGfm from 'remark-gfm'

const components: MDXComponents = {
  a: ({ href, children }) => {
    if (typeof href !== 'string') return null
    return (
      <a href={href} className="text-orange-500 hover:text-orange-400 hover:underline">
        {children}
      </a>
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

export default function Home() {
  const allPosts = getAllPosts()

  return (
    <PageWrapper>
      <div className="space-y-16">
        <About />
        <div className="space-y-16">
          {allPosts.map((post) => (
            <article key={post.slug} className="prose prose-sm max-w-none">
              <header className="mb-4">
                <h2 className="text-orange-500 text-2xl font-bold mb-2">{post.title}</h2>
              </header>
              <div className="markdown-content text-white leading-relaxed">
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
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}