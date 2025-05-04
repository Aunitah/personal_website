import { PageWrapper } from '@/components/layout/PageWrapper'
import { getAllPosts } from '@/lib/mdx'
import { PostFrontmatter } from '@/types'
import { formatShortDate } from '@/lib/utils/date'

export default function Blog() {
  const allPosts = getAllPosts()

  return (
    <PageWrapper>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="space-y-6">
          {allPosts.map((post: PostFrontmatter) => (
            <div key={post.slug}>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">{formatShortDate(post.date)}</span>
                <a href={`/blog/${post.slug}`} className="text-lg hover:underline">
                  {post.title}
                </a>
              </div>
              {post.description && (
                <p className="text-gray-600 mt-2">{post.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}