import { PageWrapper } from '@/components/layout/PageWrapper'
import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'

export default function Blog() {
  const allPosts = getAllPosts()

  return (
    <PageWrapper>
      <div className="space-y-16">
        {allPosts.map((post) => (
          <article key={post.slug} className="prose prose-lg max-w-none">
            <header className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            </header>
            <div className="markdown-content">
              <p className="mb-4">
                {post.content.split('\n').slice(0, 3).join('\n')}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more...
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageWrapper>
  )
}